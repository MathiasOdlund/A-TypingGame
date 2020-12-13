import {
  Injectable,
  Dependencies,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';
import { User } from '../entities/User.entity';

@Injectable()
@Dependencies(getRepositoryToken(User))
export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async validateLocalUser(email, password) {
    const user = await this.findUserByEmail(email);
    if (user) {
      const isValidPassword = await this.validatePassword(
        password,
        user.password,
      );
      if (isValidPassword) return user;
      else {
        throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
      }
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
    }
  }

  async createUser(data) {
    try {
      const { email, password } = data;
      const hashPassword = await this.hashPassword(password);
      const user = this.userRepository.create({
        email,
        password: hashPassword,
        authType: 'local',
        isVerified: false,
      });
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code) {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new HttpException(
              'Email already exists',
              HttpStatus.FORBIDDEN,
            );
          default:
            throw new InternalServerErrorException();
        }
      }
      throw error;
    }
  }

  async findUserByEmail(email) {
    return await this.userRepository.findOne({ where: { email } });
  }

  hashPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 8, (error, hash) => {
        if (error) return reject(error);
        return resolve(hash);
      });
    });
  }

  validatePassword(givenPassword, passwordHash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(givenPassword, passwordHash, (error, isValidPassword) => {
        if (error) return reject(error);
        else return resolve(isValidPassword);
      });
    });
  }
}
