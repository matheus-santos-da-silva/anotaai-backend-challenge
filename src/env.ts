import { config } from 'dotenv';
config();

export const DATABASE_URL: string = String(process.env.DATABASE_URL);
