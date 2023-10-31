import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthDTO } from '../user/user.dto';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from 'src/config/configuration';
import { MIN_15, WEEK } from 'src/common/constant';
import { Tokens } from 'src/common/interface';

@Injectable()
export class AuthService {
  constructor(
    private service: UserService,
    private jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async access(dto: AuthDTO): Promise<Tokens> {
    const appConfig = this.config.get<AppConfig>('app');

    const user = await this.service.findOrCreate(dto);
    const payload = { sub: user.id, email: user.email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(
        {
          ...payload,
        },
        {
          secret: appConfig.secret,
          expiresIn: MIN_15,
        },
      ),
      this.jwt.signAsync(
        {
          ...payload,
        },
        {
          secret: appConfig.refresh,
          expiresIn: WEEK,
        },
      ),
    ]);

    this.service.updateHashedRT(user.id, refreshToken);

    return { accessToken, refreshToken };
  }
}
