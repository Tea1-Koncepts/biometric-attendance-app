import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/authentication/auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your_secret_key', // Replace with your own secret key
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService, JwtModule], // Export JwtModule to make it available for other modules
})
export class AuthModule {}
