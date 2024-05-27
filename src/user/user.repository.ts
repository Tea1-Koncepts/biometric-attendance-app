import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  findOne(arg0: {
    where: { username: string };
  }): import('./user.entity').User | PromiseLike<import('./user.entity').User> {
    throw new Error('Method not implemented.');
  }
  create(arg0: {
    username: string;
    password: any;
    fingerprintData: string;
    facialRecognitionData: string;
  }) {
    throw new Error('Method not implemented.');
  }
  save(
    user: any,
  ): import('./user.entity').User | PromiseLike<import('./user.entity').User> {
    throw new Error('Method not implemented.');
  }
  // Your UserRepository implementation
}
