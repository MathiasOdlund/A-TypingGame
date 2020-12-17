import {
  Controller,
  UseGuards,
  Post,
  Request,
  Bind,
  Body,
  Dependencies,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LocalAuthGuard } from './local-strategy.guard';

@Controller()
@Dependencies(UserService)
export class AuthController {
  constructor(userService) {
    this.userService = userService;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login/local')
  @Bind(Request())
  localLogin(req) {
    return req.user;
  }

  @Post('auth/getUsername')
  @Bind(Body())
  async getUsername (data) {
    return await this.userService.generateUsername(data.username);
  }

  @Post('auth/signup/local')
  @Bind(Body())
  async localSignup(data) {
    return await this.userService.createUser(data);
  }
}
