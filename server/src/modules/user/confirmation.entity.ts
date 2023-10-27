import { Exclude } from 'class-transformer';
import randomString from 'src/common/random-string';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class ConfirmationEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Index()
  @Column({ unique: true })
  public code: string;

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  public createAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude()
  public updateAt: Date;

  @BeforeInsert()
  updateDates() {
    this.code = randomString();
  }

  constructor(partial: Partial<ConfirmationEntity>) {
    Object.assign(this, partial);
  }
}

export default ConfirmationEntity;
