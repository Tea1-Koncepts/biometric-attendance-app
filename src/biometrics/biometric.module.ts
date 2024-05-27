import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiometricData } from './biometric-data.entity';
import { BiometricDataRepository } from './biometric-data.repository';
import { BiometricService } from './biometric.service';
import { BiometricController } from './biometric.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiometricData, BiometricDataRepository])],
  controllers: [BiometricController],
  providers: [BiometricService],
  exports: [BiometricService],
})
export class BiometricModule {}
