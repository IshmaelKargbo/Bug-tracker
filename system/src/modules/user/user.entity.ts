import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity("user")
class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({name: 'given_names'})
  public givenNames: string;
  
  @Column({name: 'family_name'})
  public familyName: string;

  @Index()
  @Column({unique: true})
  public email: string;

  @Index()
  @Column({name: "user_name"})
  public userName: string;

  @Column()
  public password: string;
 
  @CreateDateColumn({name: 'created_at'})
  public createAt: Date;
 
  @UpdateDateColumn({name: 'updated_at'})
  public updateAt: Date;

}
 
export default UserEntity;