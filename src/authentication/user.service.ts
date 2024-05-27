import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'user1',
      password: 'password1',
      updatedAt: undefined,
      isActive: false,
      isLocked: false,
      firstName: '',
      lastName: '',
      gender: '',
      accessToken: '',
      refreshToken: '',
      resetPasswordToken: '',
      lastLoginAt: undefined,
    },
    {
      id: 2,
      username: 'user2',
      password: 'password2',
      updatedAt: undefined,
      isActive: false,
      isLocked: false,
      firstName: '',
      lastName: '',
      gender: '',
      accessToken: '',
      refreshToken: '',
      resetPasswordToken: '',
      lastLoginAt: undefined,
    },
  ];

  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(
    username: string,
    password: string,
    fingerprintData?: string,
    facialRecognitionData?: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
      fingerprintData,
      facialRecognitionData,
    });
    return this.userRepository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }

  // async findById(id: number): Promise<User> {
  //   return this.userRepository.findOne({ where: { id } });
  // }
  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async verifyFingerprint(
    username: string,
    fingerprintData: string,
  ): Promise<boolean> {
    const user = await this.findByUsername(username);
    if (user && user.fingerprintData === fingerprintData) {
      return true;
    }
    return false;
  }

  async verifyFacialRecognition(
    username: string,
    facialRecognitionData: string,
  ): Promise<boolean> {
    const user = await this.findByUsername(username);
    if (user && user.facialRecognitionData === facialRecognitionData) {
      return true;
    }
    return false;
  }
}
