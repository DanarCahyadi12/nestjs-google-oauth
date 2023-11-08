import { Injectable, NotFoundException } from '@nestjs/common';
import { UserGoogleDto } from './dto/user-google.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private userId: string;
  private readonly SALT_ROUNDS = 10;
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async googleAuthRedirect(user: UserGoogleDto, res: Response) {
    if (!user) return new NotFoundException('User google account not found');
    this.userId = (await this.userService.findOneByEmail(user.email))?.id;
    if (!this.userId)
      this.userId = (await this.userService.createUser(user)).id;

    const refreshToken = await this.generateRefreshToken(this.userId);
    const accessToken = await this.generateAccessToken(this.userId);
    const hashedRefreshToken = await bcrypt.hash(
      refreshToken,
      this.SALT_ROUNDS,
    );

    await this.userService.updateRefreshToken(this.userId, hashedRefreshToken);
    res.cookie('token', refreshToken, {
      maxAge: 3 * 24 * 60 * 60,
      httpOnly: true,
    });
    res.json({
      status: 'success',
      message: 'Login successfully',
      data: {
        accessToken: accessToken,
      },
    });
  }

  private async generateAccessToken(userId: string): Promise<string> {
    return await this.jwtService.signAsync(
      { sub: userId },
      {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: '20m',
      },
    );
  }
  private async generateRefreshToken(userId: string): Promise<string> {
    return await this.jwtService.signAsync(
      { sub: userId },
      {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '3d',
      },
    );
  }
}
