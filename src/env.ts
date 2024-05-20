import { config } from 'dotenv';
config();

export const DATABASE_URL: string = String(process.env.DATABASE_URL);
export const AWS_ACCESS_KEY: string = String(process.env.AWS_ACCESS_KEY);
export const AWS_SECRET_KEY: string = String(process.env.AWS_SECRET_KEY);
export const AWS_REGION: string = String(process.env.AWS_REGION);
export const AWS_SNS_TOPIC_ARN: string = String(process.env.AWS_SNS_TOPIC_ARN);
