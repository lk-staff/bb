import { Logger } from '@nestjs/common';
import { defineConfig } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const logger = new Logger('MikroOrm');

export default defineConfig({
  type: 'sqlite',
  dbName: 'testDbSqlite',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  debug: true,
  logger: logger.log.bind(logger),
  metadataProvider: TsMorphMetadataProvider,
});
