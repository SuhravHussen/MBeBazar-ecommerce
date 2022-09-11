import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  PORT,
  URI,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  SECRET,
  REDIS_HOSTNAME,
  REDIS_PORT,
  REDIS_PASSWORD,
  REDIS_USERNAME,
  JWT_TOKEN_EXPIRE,
  JWT_REFRESH_EXPIRE,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  COOKIE_SECRET,
  STRIPE_SECRET_KEY,
} = process.env;
