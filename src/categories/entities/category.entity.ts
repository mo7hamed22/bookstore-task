import { BaseEntity } from "../../base.entity";
import { Book } from "src/books/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity {

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}
