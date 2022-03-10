import { Module } from '@nestjs/common';
import { ExceptionsModule } from 'src/configuration/exceptions/exceptions.module';
import { DatabaseServiceModule } from 'src/services/database/database.module';
import { SubTaskFactoryService } from './sub-task-factory.service';
import { SubTaskService } from './sub-task-service.service';

@Module({
  imports: [DatabaseServiceModule, ExceptionsModule],
  providers: [SubTaskFactoryService, SubTaskService],
  exports: [SubTaskFactoryService, SubTaskService],
})
export class SubTasksServicesModule {}
