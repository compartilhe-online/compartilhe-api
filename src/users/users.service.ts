import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { UserRequest } from 'src/types/user.request';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const checkEmail = await User.count({
      where: { email: createUserDto.email },
    });
    const checkPhone = await User.count({
      where: { phone: createUserDto.phone },
    });

    if (checkEmail > 0) {
      throw new HttpException('E-mail já cadastrado', HttpStatus.CONFLICT);
    }

    if (checkPhone > 0) {
      throw new HttpException('Celular já cadastrado', HttpStatus.CONFLICT);
    }
    return User.create(createUserDto).save();
  }

  findAll() {
    return User.find();
  }

  async findOne(id: number) {
    const user = (await User.findOne({ where: { id } })) as any;
    const campaigns = await Campaign.find({
      where: { user: user.id },
      relations: ['user', 'testimonial'],
    });

    user.campaign = campaigns;

    return user;
  }

  async update(req: UserRequest, updateUserDto: UpdateUserDto) {
    if (req.user.id === updateUserDto.id) {
      return User.save(updateUserDto);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
