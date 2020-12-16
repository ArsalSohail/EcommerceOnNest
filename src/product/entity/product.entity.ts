import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('item')
export class ProductEntity{
    @PrimaryGeneratedColumn() item_id: string;
    @Column() item_name: string;
    @Column() item_description: string;
    @Column() price: string;
    @Column() category_id: string;
    @Column() item_url: string;
    @Column() quantity: number;
}