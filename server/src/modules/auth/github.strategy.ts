import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import * as Strategy from 'passport-github';
import { AuthConfig } from 'src/config/configuration';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly config: ConfigService) {
    const gConfig = config.get<AuthConfig>('github');
    super({
      clientID: gConfig.clientID,
      clientSecret: gConfig.secret,
      callbackURL: gConfig.callback,
      scope: ['public_profile'],
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: any) {
    const json = profile._json;

    const names = `${json.name}`.split(' ');
    const familyName = names.splice(-1).join();
    const givenNames = names.join(' ');

    const user = {
      email: json.email,
      givenNames: givenNames.trim(),
      familyName: familyName.trim(),
      image: json.avatar_url,
      provider: 'github',
      accessToken,
      refreshToken: _refreshToken,
    };

    return { accessToken, user };
  }
}
