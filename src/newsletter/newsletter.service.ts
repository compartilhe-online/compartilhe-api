import { Injectable } from '@nestjs/common';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';
import { Newsletter } from './entities/newsletter.entity';

@Injectable()
export class NewsletterService {
  async subscribe(email: string) {
    return Newsletter.create({ email }).save();
  }

  async unsubscribe(email: string) {
    const newsletter = await Newsletter.findOne({ where: { email } });
    return Newsletter.remove(newsletter);
  }
}
