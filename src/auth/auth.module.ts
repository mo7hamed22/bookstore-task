import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';

dotenv.config(); // Load .env variables

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET||'secretKey', // ✅ Ensure a default secret
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),],
  controllers: [AuthController],
  providers: [AuthService,UserService,JwtService,JwtStrategy,ConfigService],
  exports: [AuthService,JwtModule],
})
export class AuthModule {}
