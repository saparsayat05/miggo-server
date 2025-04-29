import { Module } from '@nestjs/common';
import { UserService } from './core/application/user.service';
import { UserResolver } from './graphql/user.resolver';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
