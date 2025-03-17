import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, loginUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

 
    async createUser(body: CreateUserDto ): Promise<User> {
      const userExists =  await this.findByUserEmail(body.email);
      if (userExists) {
        throw new BadRequestException('Email or username already exists');
      }
      const passwordHash = await bcrypt.hash(body.password, 10);
      const user = this.userRepository.create({ username:body.username, password:passwordHash, email:body.email });
      return this.userRepository.save(user);
    }
    async findByUserEmail(email: string): Promise<User | null> {
      const user = await this.userRepository.findOne({ where: { email } });
      return user;
    }
   
  }
 
