import { EntityRepository, Repository } from 'typeorm';
import { BiometricData } from './biometric-data.entity';

@EntityRepository(BiometricData)
export class BiometricDataRepository extends Repository<BiometricData> {}
