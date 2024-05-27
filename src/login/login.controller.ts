import { Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/authentication/auth.service';
import { BiometricData } from 'src/biometrics/biometric.data.interface'; // Import the interface

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('biometric-login')
  async biometricLogin() {
    const biometricData: BiometricData = {
      fingerprint: 'some-fingerprint-data',
    };

    if (biometricData.userId) {
      biometricData.userId = 1; // or any other valid user ID
    }
  }
}
