import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import winston from 'winston';
import { LOG_DIR } from '@config/index';

// logs dir
const logDir: string = join(__dirname, LOG_DIR as string);

if (!existsSync(logDir)) {
  mkdirSync(logDir);
}

// Define log format
const logFormat = winston.format.printf(({ timestamp, level, message, id, status }) => {
  return `${timestamp} ${level}: ${message} id: ${id ? id : 'No Id'} status: ${status ? status : 'No Status'}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const devLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'dddd, MMMM Do YYYY, h:mm:ss a',
    }),
    logFormat,
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(winston.format.timestamp()),
    }),
  ],
});

export { devLogger };
