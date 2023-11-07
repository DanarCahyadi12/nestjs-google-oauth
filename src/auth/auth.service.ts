import { Injectable, NotFoundException } from '@nestjs/common';
import { UserGoogleDto } from './dto/user-google.dto';

@Injectable()
export class AuthService {
  googleAuthRedirect(user: UserGoogleDto) {
    return user ? user : new NotFoundException('User google account not found');
  }
}
