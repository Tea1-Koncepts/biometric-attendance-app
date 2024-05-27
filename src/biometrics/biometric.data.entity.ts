import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BiometricData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({ type: 'text' })
  fingerprint: string;

  @Column({ type: 'text' })
  biometricData: string;
}
