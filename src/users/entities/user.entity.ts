import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  phone: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  biography: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({
    nullable: true,
  })
  photo: string;

  @Column({
    nullable: true,
  })
  bornDate: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: true,
  })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async encryptPassword() {
    this.password = await bcrypt.hash(this.password, 2);
  }
}
