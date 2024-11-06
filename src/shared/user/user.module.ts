import { Module } from '@nestjs/common';
import { UserDatabaseModule } from './infrastructure/database/database.module';
import { UserService } from './application/services/user.service';

@Module({
  imports: [UserDatabaseModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}