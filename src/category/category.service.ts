import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
//import { UpdateCategoryDto } from './dto/update-category.dto';
import {CategoryEntity} from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(CategoryEntity)
    private CategoryRepository: Repository<CategoryEntity>
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const cat = this.CategoryRepository.create(createCategoryDto);
    console.log("this is service DTO");
    console.log(createCategoryDto);
    console.log("this is cat obj");
    console.log(cat);
    await this.CategoryRepository.save(cat);

    return cat;
  }

  async findAll() {
    return await this.CategoryRepository.find();
  }

  async findOne(id: number) {
    return await this.CategoryRepository.findOne(id);
  }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
