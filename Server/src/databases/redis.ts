import { REDIS_HOSTNAME, REDIS_PASSWORD, REDIS_PORT, REDIS_USERNAME } from '@config/index';
import { createClient } from 'redis';

const redisClient = createClient({
  url: `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_HOSTNAME}:${REDIS_PORT}/0`,
});

export default redisClient;
