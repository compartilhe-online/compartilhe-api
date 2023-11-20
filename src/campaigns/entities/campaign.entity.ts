import { CampaignTestimonial } from 'src/campaigns-testimonials/entities/campaign-testimonial.entity';
import { CampaignType } from 'src/campaigns-types/entities/campaign-type.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Campaign extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user: User) => user.id, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => CampaignType, (type: CampaignType) => type.id, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn()
  type: CampaignType;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  photo: string;

  @OneToMany(() => CampaignTestimonial, (testimonial) => testimonial.campaign)
  testimonial: CampaignTestimonial[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
