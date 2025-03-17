import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, loginUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    async validateUser(body:loginUserDto): Promise<any> {
        const {email,password} = body;
        const user = await this.userService.findByUserEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
          const { password, ...result } = user;
          return result;
        }
        return null;    
      }
    
      async login(user: User) {
        try {
        const payload = { email: user.email, sub: user.id, role: user.role };
        console.log("payload",payload);
        return {
          access_token: this.jwtService.sign(payload,   { expiresIn: '1h' , secret:process.env.JWT_SECRET}, ),
        };
    } catch (error) {
        console.log(error,"fffffff");
    }
      }
}
