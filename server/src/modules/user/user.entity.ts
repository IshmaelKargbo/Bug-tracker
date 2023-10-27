import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ConfirmationEntity from './confirmation.entity';

@Entity('user')
class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'given_names', nullable: true })
  public givenNames: string;

  @Column({ name: 'family_name', nullable: true })
  public familyName: string;

  @Index()
  @Column({ unique: true })
  public email: string;

  @Index()
  @Column({ name: 'user_name', nullable: true })
  public userName: string;

  @Column({ nullable: true })
  @Exclude()
  public password: string;

  @OneToOne(() => ConfirmationEntity)
  @JoinColumn()
  public confirmation: ConfirmationEntity;

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
