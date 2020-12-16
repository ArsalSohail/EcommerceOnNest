import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}
    @Get()
    findAll(){
        return this.productService.findAll();
    }
    @Get(':id')
    findByID(@Param('id') id: number){
        return this.productService.findOne(+id);
    }
}
