import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubTasksController } from './controllers/sub-tasks.controller';
import { TasksController } from './controllers/tasks.controller';
import { DatabaseServiceModule } from './services/database/database.module';
import { SubTasksServicesModule } from './services/use-cases/subTasks/sub-task-service.module';
import { TaskServicesModule } from './services/use-cases/tasks/task.services.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseServiceModule,
    TaskServicesModule,
    SubTasksServicesModule,
  ],
  controllers: [TasksController, SubTasksController],
  providers: [],
})
export class AppModule {}
