import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}
  async create(body: CreateAuthorDto) {
    const exsitingAuthor = await this.authorRepository.findOne({where: {name: body.name}});
    if (exsitingAuthor) {
      throw new BadRequestException('Author already exists');
    }
    const author = this.authorRepository.create(body); 
    return this.authorRepository.save(author); 
    
  }

  findAll() {
    return this.authorRepository.find();}

  findOne(id: number) {
    return this.authorRepository.findOne({where: {id}});
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = this.authorRepository.findOne({where: {id}});
    if (!author) {
      throw new BadRequestException('Author not found');
    }
    return this.authorRepository.update(id, updateAuthorDto);
  }

  remove(id: number) {
    if (!this.authorRepository.findOne({where: {id}})) {
      throw new BadRequestException('Author not found');
    }
    return this.authorRepository.delete(id);
  }
}
