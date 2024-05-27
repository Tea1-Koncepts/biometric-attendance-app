import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BiometricDataDto } from '../biometrics/biometric-data.dto';
import { BiometricService } from '../biometrics/biometric.service';
import { User } from '../user/user.interface';
import { UserService } from '../user/user.service';
import { PasswordHasherService } from './password-hasher.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly biometricService: BiometricService,
    private readonly passwordHasher: PasswordHasherService,
  ) {}

  async authenticateUser(user: Partial<User>): Promise<User | null> {
    const existingUser = await this.userService.findByUsername(user.username);
    if (
      existingUser &&
      user.password &&
      (await this.passwordHasher.compare(user.password, existingUser.password))
    ) {
      return existingUser;
    } else {
      return null;
    }
  }

  async generateToken(user: User): Promise<string> {
    const payload = {
      sub: user.id,
      username: user.username,
    };
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: any): Promise<User> {
    return this.userService.findById(payload.sub);
  }

  async biometricLogin(biometricData: BiometricDataDto): Promise<User> {
    const userId = await this.biometricService.verifyBiometric(biometricData);
    this.logger.debug(`User ID from biometric verification: ${userId}`);
    if (!userId) {
      throw new UnauthorizedException('Invalid biometric data');
    }
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
