import {
    BaseEntity,
    Entity,
    Column,
    Unique,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    ManyToOne,
    DeleteDateColumn
} from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Unique(['user', 'key'])
@Entity()
export class UserMetadatum extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user: User) => user.id, {
        cascade: true,
        nullable: false
    })

    @JoinColumn()
    user: User;

    @Column()
    key: string;

    @Column({ type: 'json' })
    value: Array<any>

}

@Entity()
@Unique(["user", "key"])
export class UserTMPMetadatum extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user: User) => user.id, {
        cascade: true,
        nullable: false
    })

    @JoinColumn()
    user: User;

    @Column()
    key: string;

    @Column()
    value: string

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}