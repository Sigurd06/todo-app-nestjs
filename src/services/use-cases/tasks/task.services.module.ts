import { Module } from '@nestjs/common';
import { ExceptionsModule } from 'src/configuration/exceptions/exceptions.module';
import { DatabaseServiceModule } from 'src/services/database/database.module';
import { TaskFactoryService } from './task-factory.service';
import { TaskService } from './task-service.service';

@Module({
  imports: [DatabaseServiceModule, ExceptionsModule],
  providers: [TaskFactoryService, TaskService],
  exports: [TaskFactoryService, TaskService],
})
export class TaskServicesModule {}
