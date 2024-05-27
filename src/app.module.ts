import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BiometricController } from './biometrics/biometric.controller';
import { AuthModule } from './authentication/auth.module';
import { BiometricService } from './biometrics/biometric.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '#tea1',
      database: 'biometric_attendance_app',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    // BiometricModule,
    UserModule,
  ],

  controllers: [AppController, BiometricController],
  providers: [AppService, BiometricService],
})
export class AppModule {}
