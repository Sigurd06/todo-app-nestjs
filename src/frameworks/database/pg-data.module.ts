import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDatabaseAbstract } from 'src/core/abstracts';
import { PgDatabaseService } from './pg-data.service';

import * as entities from './entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          type: 'postgres',
          host: config.get<string>('PGHOST'),
          port: config.get<number>('PGPORT'),
          username: config.get<string>('PGUSER'),
          password: config.get<string>('PGPASSWORD'),
          database: config.get<string>('PGDATABASE'),
          entities: Object.values(entities),
          logging: false,
          synchronize: false,
          keepConnectionAlive: true,
        };
      },
    }),

    TypeOrmModule.forFeature(Object.values(entities)),
  ],
  providers: [
    {
      provide: IDatabaseAbstract,
      useClass: PgDatabaseService,
    },
  ],
  exports: [IDatabaseAbstract],
})
export class PgDatabaseServiceModule {}
