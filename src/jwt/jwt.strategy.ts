import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from 'src/authentication/auth.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Buffer.from(process.env.JWT_SECRET_KEY, 'base64'),
    });
  }

  // async validate(payload: any): Promise<User> {
  //   const user = await this.authService.validateUser(payload);
  //   console.log('User:', user);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }

  async validate(payload: any): Promise<User> {
    // Mock implementation for testing
    const dummyUser: User = {
      id: 1,
      username: 'dummy',
      password: '',
      updatedAt: undefined,
      isActive: false,
      isLocked: false,
      firstName: '',
      lastName: '',
      gender: '',
      accessToken: '',
      refreshToken: '',
      resetPasswordToken: '',
      lastLoginAt: undefined,
    }; // Define dummy user object
    // const user = await this.authService.validateUser(payload); // Original implementation
    const user = dummyUser; // Mock implementation
    console.log('User:', user); // Log the value of user
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
