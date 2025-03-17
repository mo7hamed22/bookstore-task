import { BaseEntity } from "../../base.entity";
import { Book } from "src/books/entities/book.entity";
import {  Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author  extends BaseEntity {
    @Column()
    name: string;
    @Column()
    dob: Date;
    @Column()
    email: string;
    @OneToMany(() => Book, (book) => book.author, { cascade: true })
        books: Book[];
}
