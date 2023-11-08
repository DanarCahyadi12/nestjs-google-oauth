import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './DTOs/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    try {
      return await this.prismaService.user.create({
        data: dto,
      });
    } catch (error) {
      if (error) throw error;
    }
  }
  async findOneByEmail(email: string) {
    try {
      return await this.prismaService.user.findUnique({
        where: {
          email: email,
        },
      });
    } catch (error) {
      if (error) throw error;
    }
  }
  async updateRefreshToken(userId: string, refreshToken: string) {
    return await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: refreshToken,
      },
    });
  }
}
