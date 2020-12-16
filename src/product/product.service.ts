import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';

@Injectable()
export class ProductService {
    constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>){}
    async findAll(){
        return await this.productRepository.find();
    }
    async findOne(item_id: number){
        return await this.productRepository.findOne(item_id);
    }
}
