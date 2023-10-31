import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthConfig } from 'src/config/configuration';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly config: ConfigService) {
    const gConfig = config.get<AuthConfig>('google');

    super({
      clientID: gConfig.clientID,
      clientSecret: gConfig.secret,
      callbackURL: gConfig.callback,
      scope: ['email', 'profile'],
    });
  }

  authorizationParams(): { [key: string]: string } {
    return {
      access_type: 'offline',
      prompt: 'consent',
    };
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    const { name, emails, photos } = profile;

    const user = {
      email: emails[0].value,
      givenNames: name.givenName,
      familyName: name.familyName,
      image: photos[0].value,
      provider: 'google',
      accessToken,
      refreshToken,
    };

    return user;
  }
}
