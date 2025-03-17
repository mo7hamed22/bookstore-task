import { Body, Controller, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto, CreateUserDto, loginUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './public.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
@UseGuards(JwtAuthGuard,RolesGuard)
export class AuthController {
  constructor(private readonly authService: AuthService,
      private readonly userService: UserService

  ) {}
  @Roles('admin')
  @Post('register')
  @ApiBearerAuth()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @Public()
  @Post('login')
  // validat body 
  async login(@Body() body: AuthCredentialsDto) {
   
    const user = await this.authService.validateUser(body);
    console.log("user",user);
    
    if (!user) throw new UnauthorizedException('Invalid email or password');
    return this.authService.login(user);
   

}
}
