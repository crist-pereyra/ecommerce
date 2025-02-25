import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './server/migrations',
  dialect: 'postgresql',
  schema: './server/schema.ts',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
