import { Module } from '@nestjs/common';
import { PgDatabaseServiceModule } from 'src/frameworks/database/pg-data.module';

@Module({
  imports: [PgDatabaseServiceModule],
  exports: [PgDatabaseServiceModule],
})
export class DatabaseServiceModule {}
