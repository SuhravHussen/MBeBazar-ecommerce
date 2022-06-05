import { URI } from '@config';

export const dbConnection = {
  url: URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'MBBazar',
  },
};
