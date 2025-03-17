import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor( @InjectRepository(Category)
      private categoryRepository: Repository<Category >,) {}
  async create(body: CreateCategoryDto) {
    const exsitingCategory = await this.categoryRepository.findOne({where: {name: body.name}});
    if (exsitingCategory) {
      throw new BadRequestException('Category already exists');
    }
    const category = this.categoryRepository.create(body);
    return this.categoryRepository.save(category);
   
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({where: {id}});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
     const category = this.categoryRepository.findOne({where: {id}});
     if (!category) {
       throw new BadRequestException('Category not found');
     }
     return this.categoryRepository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
