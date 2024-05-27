import {
  Controller,
  Get,
  Post,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
import { FingerprintJS } from 'fingerprintjs';
import { BiometricService } from './biometric.service';

@Controller('biometric')
export class BiometricController {
  constructor(private readonly biometricService: BiometricService) {}

  @Post('capture')
  async captureFingerprint(@Body() body: { userId: string }): Promise<any> {
    try {
      const fingerprint = await this.biometricService.captureFingerprint();
      // Save fingerprint to the database (not shown here)
      return { status: 'success', fingerprint };
    } catch (error) {
      throw new InternalServerErrorException('Failed to capture fingerprint');
    }
  }

  // @Post('verify')
  // async verifyFingerprint(@Body() body: { userId: string, fingerprint: any }): Promise<any> {
  //   try {
  //     // Retrieve stored fingerprint from the database (not shown here)
  //     const storedFingerprint = ...;
  //     const isMatch = await this.biometricService.verifyFingerprint(body.fingerprint, storedFingerprint);
  //     return { status: 'success', isMatch };
  //   } catch (error) {
  //     throw new InternalServerErrorException('Failed to verify fingerprint');
  //   }
  // }

  @Get()
  getBiometric(): string {
    return 'Biometric data';
  }

  @Post('enroll')
  async enroll(@Body() userData: any) {
    const fingerprint = await FingerprintJS.get({
      // Options...
    });
    // Store the fingerprint data securely
  }

  @Post('authenticate')
  async authenticate(@Body() userData: any) {
    const fingerprint = await FingerprintJS.get({});
    // Compare with stored data and authenticate
  }
}
