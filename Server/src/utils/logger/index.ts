import { devLogger } from '@utils/logger/devLogger';
import { prodLogger } from '@utils/logger/prodLogger';

const logger = process.env.NODE_ENV === 'production' ? prodLogger : devLogger;

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};
export { logger, stream };
