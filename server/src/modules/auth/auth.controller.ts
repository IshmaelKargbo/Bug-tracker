import { Controller, Get, Redirect, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthDTO } from '../user/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

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
  // @Redirect('http://localhost:3000', 301)
  @UseGuards(AuthGuard(['github', 'jwt']))
  async githubAuthRedirect(@Request() req) {
    const profile = req.user;

    const dto: AuthDTO = new AuthDTO({
      email: profile.email,
      image: profile.image,
      familyName: profile.familyName,
      givenNames: profile.givenNames,
      provider: profile.provider,
    });

    return this.service.access(dto);
  }

  @Get('google-redirect')
  // @Redirect('http://localhost:3000', 301)
  @UseGuards(AuthGuard(['github', 'jwt']))
  async googleAuthRedirect(@Request() req) {
    const profile = req.user;

    const dto: AuthDTO = new AuthDTO({
      email: profile.email,
      image: profile.image,
      familyName: profile.familyName,
      givenNames: profile.givenNames,
      provider: profile.provider,
    });

    return this.service.access(dto);
  }
}
