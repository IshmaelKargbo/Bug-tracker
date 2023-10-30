import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthDTO } from '../user/user.dto';

@Injectable()
export class AuthService {
  constructor(private service: UserService, private jwt: JwtService) {}

  async access(dto: AuthDTO): Promise<any> {
    return await this.service.findOrCreate(dto);
  }
}
