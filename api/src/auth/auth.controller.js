import {
  Controller,
  UseGuards,
  Post,
  Request,
  Bind,
  Body,
  Dependencies,
  UsePipes,
} from '@nestjs/common';
import { JoiValidationPipe } from '../pipes/JoiValidationPipe';
import { UserService } from '../user/user.service';
import { LocalAuthGuard } from './local-strategy.guard';
import { UserLoginSchema } from './validations/UserLogin.schema';
import { UserSignupSchema } from './validations/UserSignup.schema';

@Controller('auth')
@Dependencies(UserService)
export class AuthController {
  constructor(userService) {
    this.userService = userService;
  }

  @Post('login/local')
  @UseGuards(LocalAuthGuard)
  @Bind(Request())
  localLogin(req) {
    return req.user;
  }

  @Post('signup/local')
  @UsePipes(new JoiValidationPipe(UserSignupSchema))
  @Bind(Body())
  async localSignup(data) {
    return await this.userService.createUser(data);
  }
}
