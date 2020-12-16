import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn() category_id: string;
    @Column() category_name: string;
    @Column() parent_category: string;
}
