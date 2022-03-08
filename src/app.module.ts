import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskController } from './controllers/task.controller';
import { DatabaseServiceModule } from './services/database/database.module';
import { TaskServicesModule } from './services/use-cases/tasks/task.services.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseServiceModule,
    TaskServicesModule,
  ],
  controllers: [TaskController],
  providers: [],
})
export class AppModule {}
