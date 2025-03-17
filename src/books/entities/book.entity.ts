import { Author } from '../../authors/entities/author.entity';
import { BaseEntity } from "../../base.entity";
import { Category } from '../../categories/entities/category.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Book extends BaseEntity  {
  @Column()
  title: string;

  @ManyToOne(() => Author, (author) => author.books, { eager: true })
  author: Author;

  @ManyToOne(() => Category, (category) => category.books )
  category: Category;

  @Column({ type: 'float' })
  price: number;

}
