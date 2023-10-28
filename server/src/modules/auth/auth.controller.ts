import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import UserEntity from '../user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: UserService) {}

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Request() req) {
    return req.user;
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req) {
    return req.user;
  }

  @Get('github-redirect')
  @UseGuards(AuthGuard('github'))
  async githubAuthRedirect(@Request() req) {
    const accessToken = req.user.accessToken;
    const refreshToken = req.user.refreshToken;
    const profile = req.user;

    const dto = new UserEntity({
      email: profile.email,
      image: profile.image,
      familyName: profile.familyName,
      givenNames: profile.givenNames,
      provider: profile.provider,
    });

    const user = await this.service.findOrCreate(dto);

    return { accessToken, refreshToken, user };
  }

  @Get('google-redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Request() req) {
    const accessToken = req.user.accessToken;
    const refreshToken = req.user.refreshToken;
    const profile = req.user;

    const dto = new UserEntity({
      email: profile.email,
      image: profile.image,
      familyName: profile.familyName,
      givenNames: profile.givenNames,
      provider: profile.provider,
    });

    const user = await this.service.findOrCreate(dto);

    return { accessToken, refreshToken, user };
  }
}
