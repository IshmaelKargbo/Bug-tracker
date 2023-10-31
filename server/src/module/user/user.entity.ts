import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'given_names', nullable: true })
  public givenNames: string;

  @Column({ name: 'family_name', nullable: true })
  public familyName: string;

  @Column({ nullable: true })
  public image: string;

  @Column({ nullable: true })
  public provider: string;

  @Index()
  @Column({ unique: true })
  public email: string;

  @Index()
  @Column({ nullable: true, name: 'hashed_rt' })
  public hashedRT: string;

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  public createAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude()
  public updateAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

export default UserEntity;
