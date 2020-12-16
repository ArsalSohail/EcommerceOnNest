import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDto } from './user.dto';
import { userEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(userEntity)
    private userRepository: Repository<userEntity>){}
    async showAll(){
        const user = await this.userRepository.find();
        return user.map(user => user.toResponseObject(false));
    }



    async login(data: userDto){
        const {user_name, password} = data;
        const user = await this.userRepository.findOne({where: {user_name}});
        if (!user || !(await user.comparePassword(password))){
            console.log("Enter Valid data");
        }else{
            console.log("Logged in successfully")
        }

    }



    async register(data: userDto){
        const {user_name} = data;
        let user = await this.userRepository.findOne({where: {user_name}});
        if (user){
            console.log("User Already Exsists");
        }else{
            user = await this.userRepository.create(data);
            await this.userRepository.save(user);
            return user.toResponseObject();
        }
        
    }
    
}
