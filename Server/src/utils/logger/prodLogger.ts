import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import { LOG_DIR, URI } from '@config/index';
require('winston-mongodb');
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
const transports: any = winston.transports;
const prodLogger = winston.createLogger({
  // format: winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.metadata()),
  transports: [
    // debug log setting
    new winstonDaily({
      level: 'debug',
      // datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/debug', // log file /logs/debug/*.log in save
      filename: `%DATE%.log`,
      maxFiles: 30, // 30 Days saved
      json: false,
      zippedArchive: true,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'dddd, MMMM Do YYYY, h:mm:ss a',
        }),
        logFormat,
      ),
    }),
    // error log setting

    new transports.MongoDB({
      level: 'error',
      db: URI,
      options: {
        useUnifiedTopology: true,
      },
      format: winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.metadata()),
      collection: 'errorlog',
    }),
  ],
});

export { prodLogger };
