import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'forsaken@69',
  database: 'taskmanagement',
  autoLoadEntities: true,
  synchronize: true,
};
