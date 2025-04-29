import { Resolver } from '@nestjs/graphql';
import { UserService } from '../core/application/user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
}
