import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book]),
    TypeOrmModule.forFeature([Author]),
    TypeOrmModule.forFeature([Category])

],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
