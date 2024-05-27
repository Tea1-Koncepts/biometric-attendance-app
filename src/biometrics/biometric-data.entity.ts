import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BiometricData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column()
  userId: number;

  @Column()
  biometricType: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  email: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  deviceId: string;

  @Column({ default: false })
  isLocked: boolean;

  @Column({ nullable: true })
  lastLoginAt: Date;
}
