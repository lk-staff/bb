import { Logger } from '@nestjs/common';
import { defineConfig } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const logger = new Logger('MikroOrm');

export default defineConfig({
  type: 'sqlite',
  timezone: '+3',
  dbName: 'testDbSqlite',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  migrations: {
    path: 'dist/core/migrations',
    pathTs: 'src/core/migrations',
  },
  debug: true,
  logger: logger.log.bind(logger),
  metadataProvider: TsMorphMetadataProvider,
});
