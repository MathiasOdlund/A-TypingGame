import {
  Injectable,
  Dependencies,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(authService) {
    super({ usernameField: 'email' });
    this.authService = authService;
  }

  async validate(email, password) {
    const user = await this.authService.validateLocalUser(email, password);
    if (!user) throw new UnauthorizedException();
    else {
      return user;
    }
  }
}
