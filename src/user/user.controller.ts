import { Body, Controller, Get, Post } from '@nestjs/common';
import { userDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Get('api/user')
    ShowAllUsers(){
        return this.userService.showAll();
    }
    @Post('login')
    login(@Body() data: userDto){
        return this.userService.login(data);
    }


    @Post('register')
    register(@Body() data: userDto){
        return this.userService.register(data);
    }
}
