import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // userId: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  fingerprintData?: string;

  @Column({ nullable: true })
  facialRecognitionData?: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isLocked: boolean;

  // @Column({ nullable: true })
  // firstName: string;

  // @Column({ nullable: true })
  // lastName: string;

  // @Column({ nullable: true })
  // gender: string;

  @Column({ nullable: true })
  accessToken: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  lastLoginAt: Date;
}
