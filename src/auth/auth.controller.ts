import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleGuard } from './guards/google.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(GoogleGuard)
  @Get('oauth/google')
  async signinWithGoogle() {}

  @UseGuards(GoogleGuard)
  @Get('oauth/google/redirect')
  async googleOAuthredirect(@Req() req) {
    return this.authService.googleAuthRedirect(req.user);
  }
}
