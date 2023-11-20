import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';

import {
  UserMetadatum,
  UserTMPMetadatum,
} from './entities/users-metadatum.entity';
import * as bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersMetadataService {
  async saveUpload(request, files): Promise<void> {
    const getUserData = await UserMetadatum.findOne({
      where: { user: request.user.id, key: 'uploads' },
    });

    const payload: any = {
      user: +request.user.id,
      key: 'uploads',
      value: [],
    };

    if (files.length > 0) payload.value = files;
    if (getUserData) {
      payload.value = payload.value.concat(getUserData.value);
      payload.id = getUserData.id;
    }

    await UserMetadatum.save(payload);
  }

  async getUserUploads(id: number): Promise<UserMetadatum> {
    return await UserMetadatum.findOne({
      where: { user: id as any, key: 'uploads' },
    });
  }

  async generateTMPPasswd(id: number) {
    const getUserTMPPassword = await UserTMPMetadatum.findOne({
      where: { user: id as any, key: 'tmpPasswd' },
    });
    const tmpPass = uuid();
    const tmpPassBcrypt = await bcrypt.hash(
      tmpPass,
      Number(process.env.HASH_SALT),
    );

    if (getUserTMPPassword) {
      getUserTMPPassword.value = tmpPassBcrypt;

      await UserTMPMetadatum.save(getUserTMPPassword);
    } else {
      const user = UserTMPMetadatum.create({
        user: { id: +id },
        key: 'tmpPasswd',
        value: tmpPassBcrypt,
      });

      await user.save();
    }

    return {
      data: tmpPass,
      expiresIn: 3600,
    };
  }

  async validatePasswdResetHash(hash: string) {
    const getHash = await UserTMPMetadatum.findOne({
      where: { key: 'passwdReset', value: hash },
      relations: ['user'],
    });

    if (getHash) {
      return getHash;
    }

    throw new HttpException('Hash inválido.', HttpStatus.CONFLICT);
  }

  async invalidatePasswdResetHash(hash: string) {
    const getHash = await UserTMPMetadatum.findOne({
      where: { key: 'passwdReset', value: hash },
      relations: ['user'],
    });

    if (getHash) {
      return UserTMPMetadatum.remove(getHash);
    }

    throw new HttpException('Hash inválido.', HttpStatus.CONFLICT);
  }
}
