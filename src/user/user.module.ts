import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/authentication/auth.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { BiometricModule } from 'src/biometrics/biometric.module';
import { PasswordHasherService } from 'src/authentication/password-hasher.service';

@Module({
  imports: [
    BiometricModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'your_secret_key', // Use a secure secret key
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    UserService,
    AuthService,
    JwtService,
    PasswordHasherService,
    UserRepository,
  ],
  controllers: [UserController],
  exports: [UserService, UserRepository],
})
export class UserModule {}
