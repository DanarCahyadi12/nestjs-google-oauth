import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleGuard } from './guards/google.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('oauth/google')
  @UseGuards(GoogleGuard)
  async signinWithGoogle() {}

  @Get('oauth/google/redirect')
  @UseGuards(GoogleGuard)
  async googleOAuthredirect(@Req() req) {
    return this.authService.googleAuthRedirect(req.user);
  }
}
