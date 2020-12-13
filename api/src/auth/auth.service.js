import { Injectable, Dependencies } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
@Dependencies(UserService, JwtService)
export class AuthService {
  constructor(userService, jwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  async validateLocalUser(email, password) {
    const foundUser = await this.userService.validateLocalUser(email, password);
    if (foundUser) {
      const { id, email } = foundUser;
      return {
        ...foundUser,
        token: this.jwtService.sign({ id, email }),
      };
    }
  }
}
