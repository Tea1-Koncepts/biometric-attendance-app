import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { BiometricDataDto } from 'src/biometrics/biometric-data.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('biometric-login')
  async biometricLogin(@Body() biometricData: BiometricDataDto) {
    try {
      const user = await this.authService.biometricLogin(biometricData);
      const token = await this.authService.generateToken(user);
      return { token };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new HttpException(
          'Authentication failed',
          HttpStatus.UNAUTHORIZED,
        );
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
