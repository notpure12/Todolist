import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';
import { User } from '../../user/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username: string, password: string): Promise<User> {
    const user: User = await this.userService.findUserByUsername(username);
    if (user && user.password == password) return user;
    if (user == undefined)
      throw new UnauthorizedException('User Not Found : ' + username);
    if (user.password != password)
      throw new UnauthorizedException('Invalid Password');
  }
}
