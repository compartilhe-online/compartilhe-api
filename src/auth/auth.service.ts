import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/entities/user.entity';

export interface JwtType {
  token: string;
  expiresIn: number;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<JwtType> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Wrong credentials');
    }

    const compare = await bcrypt.compare(password, user.password);

    const token = this.jwtService.sign(
      { email: user.email, id: user.id },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: +process.env.JWT_EXPIRATION_TIME,
      },
    );

    if (compare) {
      return {
        token,
        expiresIn: +process.env.JWT_EXPIRATION_TIME,
      };
    }

    throw new UnauthorizedException('Wrong credentials');
  }
}
