import { BaseEntity } from "../../base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User  extends BaseEntity {
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    email: string;
    @Column( {type: 'enum', enum: ['admin', 'user'], default: 'user' })
    role: string;


}
