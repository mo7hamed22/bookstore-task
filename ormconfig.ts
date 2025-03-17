import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'user',
  password: 'password',
  database: 'bookstore',
  entities: ['src/**/*.entity.ts'], // Ensure paths are correct
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Use migrations instead of auto-sync
});
