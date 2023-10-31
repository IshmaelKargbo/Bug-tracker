import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from 'src/config/configuration';
import { Request } from 'express';

@Injectable()
export class ATStrategy extends PassportStrategy(Strategy, 'access-token') {
  constructor(private readonly config: ConfigService) {
    const appConfig = config.get<AppConfig>('app');
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ATStrategy.extractJWTFromCookie,
      ]),
      secretOrKey: appConfig.secret,
    });
  }
  private static extractJWTFromCookie(req: Request): string | null {
    if (req.cookies && req.cookies.access_token) {
      return req.cookies.access_token;
    }
    return null;
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
