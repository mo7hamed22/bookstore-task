import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private booksRepository: Repository<Book>
  ,@InjectRepository(Author) private authorRepository: Repository<Author>,
  @InjectRepository(Category) private categoryRepository: Repository<Category>
) {}
  async create(body: CreateBookDto) {
    try{
   const existingBooks =await this.booksRepository.findOne({where:{title:body.title}});
   const author = await this.authorRepository.findOne({ where: { id: +body.authorId } });
   const category = await this.categoryRepository.findOne({ where: { id: +body.categoryId } });

if (!author || !category) {
  throw new Error('Author or Category not found'); // Handle errors properly
}
   if(existingBooks){
     return "Book already exists";
   }
   const data = {
    title:body.title,
    author,
    price:body.price,
    category

   }
   const book = this.booksRepository.create({
    ...data
   });
   return this.booksRepository.save(book);
  }catch(error){
    throw new Error(error);
  }
  }

  findAll() {
    // populate the author
    return this.booksRepository.find({relations:['author']});
  }

  findOne(id: number) {
    const existingBooks = this.booksRepository.findOne({where:{id}});
    if(!existingBooks){
      return "Book not found";
    }
return existingBooks;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const existingBooks = this.booksRepository.findOne({where:{id}});
    if(!existingBooks){
      return "Book not found";
    }
    return this.booksRepository.update(id,updateBookDto);
  }

  remove(id: number) {
    const existingBooks = this.booksRepository.findOne({where:{id}});
    if(!existingBooks){
      return "Book not found";
    }
    return this.booksRepository.delete(id);
  }
  // soft delete
  async removeBook(id: number) {
    const existingBooks = this.booksRepository.findOne({where:{id}});
    if(!existingBooks){
      return "Book not found";
    }
    return this.booksRepository.softDelete(id);
  }
}
