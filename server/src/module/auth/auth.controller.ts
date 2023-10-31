import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthDTO } from '../user/user.dto';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { RTGuard } from './guard/rt';

@Public()
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
  @UseGuards(AuthGuard('github'))
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
  @UseGuards(AuthGuard('google'))
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

  @UseGuards(RTGuard)
  @Get('/refresh')
  refresh() {}
}
