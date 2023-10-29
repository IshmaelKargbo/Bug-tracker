import {
  Controller,
  Get,
  Redirect,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import UserEntity from '../user/user.entity';
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
  @Redirect('http://localhost:3000', 301)
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

    const accessToken = this.service.access(dto);

    return { accessToken };
  }

  @Get('google-redirect')
  @Redirect('http://localhost:3000', 301)
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(
    @Request() req,
    @Session() session: Record<string, any>,
  ) {
    const profile = req.user;

    const dto: AuthDTO = new AuthDTO({
      email: profile.email,
      image: profile.image,
      familyName: profile.familyName,
      givenNames: profile.givenNames,
      provider: profile.provider,
    });

    const accessToken = this.service.access(dto);

    session.accessToken = accessToken;
  }
}
