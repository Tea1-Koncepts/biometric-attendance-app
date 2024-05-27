import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PasswordHasherService } from './password-hasher.service';
import { BiometricData } from 'src/biometrics/biometric.data.entity';
import { UserModule } from 'src/user/user.module';
import { BiometricModule } from 'src/biometrics/biometric.module';

@Module({
  imports: [
    UserModule,
    BiometricModule,
    TypeOrmModule.forFeature([BiometricData]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60m' },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, PasswordHasherService],
  exports: [AuthService],
})
export class AuthModule {}
