import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthenticationDto } from './dto/user-authentication.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async auth(@Body() { email, password }: UserAuthenticationDto) {
    return this.authService.validateUser(email, password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('verify')
  async verify() {
    return {
      valid: true,
    };
  }
}
