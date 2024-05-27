import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BiometricData } from './biometric.data.entity';
import { BiometricDataDto } from './biometric-data.dto';

@Injectable()
export class BiometricService {
  captureFingerprint() {
    throw new Error('Method not implemented.');
  }
  private biometricDevice: any;

  //   constructor() {
  //     this.biometricDevice = new BiometricSdk.Device();
  //     this.initializeDevice();
  //   }

  //   private initializeDevice(): void {
  //     try {
  //       this.biometricDevice.initialize();
  //     } catch (error) {
  //       throw new InternalServerErrorException(
  //         'Failed to initialize biometric device',
  //       );
  //     }
  //   }

  //   async captureFingerprint(): Promise<any> {
  //     try {
  //       return await this.biometricDevice.captureFingerprint();
  //     } catch (error) {
  //       throw new InternalServerErrorException('Failed to capture fingerprint');
  //     }
  //   }

  //   async verifyFingerprint(
  //     fingerprint: any,
  //     storedFingerprint: any,
  //   ): Promise<boolean> {
  //     try {
  //       return await this.biometricDevice.verifyFingerprint(
  //         fingerprint,
  //         storedFingerprint,
  //       );
  //     } catch (error) {
  //       throw new InternalServerErrorException('Failed to verify fingerprint');
  //     }
  //   }
  // }
  // constructor(private readonly dataSource: DataSource) {}

  // async storeBiometricData(biometricData: BiometricData) {
  //   const encryptedData = await this.encrypt(biometricData);
  //   await this.dataSource.manager.save(encryptedData);
  // }

  encrypt(biometricData: BiometricData) {
    throw new Error('Method not implemented.');
  }

  // async verifyBiometric(biometricData: any) {
  //   const storedData = await this.dataSource.manager.findOneBy(BiometricData, {
  //     userId: biometricData.userId,
  //   });
  //   if (storedData) {
  //     const decryptedData = await this.decrypt(storedData);
  //     return await this.compareBiometricData(biometricData, decryptedData);
  //   } else {
  //     return null;
  //   }
  async verifyBiometric(
    biometricData: BiometricDataDto,
  ): Promise<number | null> {
    // Mock implementation - replace with actual biometric verification logic
    if (biometricData.biometricInfo === 'valid-bio-info') {
      return biometricData.userId;
    }
    return null;
  }
}
