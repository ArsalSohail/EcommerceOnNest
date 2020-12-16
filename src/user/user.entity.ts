import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Entity('users')
export class userEntity{
    @PrimaryGeneratedColumn()
    user_id: string;
    @Column({
        type: 'text',
        unique: true
    })
    user_name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    number: string;
    @Column()
    status: string;


    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }


    toResponseObject(showToken: boolean = true){
        const {user_id,user_name, token} = this;
        const responseObject: any = {user_id,user_name};
        if (showToken){
            responseObject.token = token;
        }
        return responseObject;
    }

    async comparePassword(attempt: string){
        return await bcrypt.compare(attempt, this.password);
    }


    private get token(){
        const {user_id, user_name} = this;
        return jwt.sign(
            {
                user_id, user_name,
            },
            'this is secrete Key',
            {expiresIn: '7d'},
        );
        }
}