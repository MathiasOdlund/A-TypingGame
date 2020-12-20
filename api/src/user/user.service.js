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
import { Like } from 'typeorm';

@Injectable()
@Dependencies(getRepositoryToken(User))
export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.usernameMaxDigits = 4;
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
      const { username, email, password } = data;
      const hashPassword = await this.hashPassword(password);
      const userCompleteUsername = await this.generateUsername(username);
      const user = this.userRepository.create({
        email,
        username: userCompleteUsername,
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

  async generateUsername(username) {
    const usernameNum = await this.userRepository.count({ username: Like(`${username}#%`) }) + 1;
    const usernameNumDigits = usernameNum.toString().split('').length;
    const paddedZeros = Array.from({ length: this.usernameMaxDigits - usernameNumDigits }, x => 0).join('');
    username = `${username}#${paddedZeros + usernameNum.toString()}`
    return username;
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
