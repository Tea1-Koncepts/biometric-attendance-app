import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';

import { User } from './user.entity';
import { AuthService } from 'src/authentication/auth.service';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(
    @Body() body: { username: string; password: string },
  ): Promise<User> {
    return this.userService.createUser(body.username, body.password);
  }

  @Post('login')
  async login(
    @Body() body: { username: string; password: string },
  ): Promise<{ access_token: string }> {
    const user = await this.userService.validateUser(
      body.username,
      body.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const access_token = await this.authService.generateToken(user);
    return { access_token };
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req): User {
    return req.user;
  }
}
