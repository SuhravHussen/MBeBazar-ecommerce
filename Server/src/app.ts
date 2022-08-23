import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { connect, set, disconnect } from 'mongoose';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS, COOKIE_SECRET } from '@config/index';
import { dbConnection } from '@databases/index';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';
import { logger, stream } from '@/utils/logger';
import { PassportLogin, passportJwt, passportGoogle } from '@config/passport.config';
import passport from 'passport';
import redisClient from '@databases/redis';
import { cloudinaryConfig } from './config/cloudinary.config';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;
  private passportLocal = new PassportLogin();
  private passportJwt = new passportJwt();
  private passportGoogle = new passportGoogle();
  private cloudinary = new cloudinaryConfig();
  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;
  }

  public async listen() {
    this.app
      .listen(this.port, () => {
        logger.info(`=================================`);
        logger.info(`======= ENV: ${this.env} =======`);
        logger.info(`🚀 App listening on the port ${this.port}`);
        logger.info(`=================================`);
      })
      .on('error', e => console.log(e));
  }

  public getServer() {
    return this.app;
  }

  public connectToDatabase() {
    if (this.env !== 'production') {
      set('debug', true);
    }
    //mongoDB
    connect(dbConnection.url as string, dbConnection.options)
      .then(() => {
        logger.info(`=================================`);
        logger.info(`Database connection successful 🔗`);
        logger.info(`=================================`);
      })
      .catch(e => console.log(e));
  }

  public connectToRedis() {
    //Redis

    redisClient.connect().then(() => {
      logger.info(`=================================`);
      logger.info(`Redis connection successful 🔗`);
      logger.info(`=================================`);
    });
    redisClient.on('error', e => console.log('Redis Client error', e));
  }

  public initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT as string, { stream }));
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser(COOKIE_SECRET));
  }

  public initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use(route.path as string, route.router);
    });
  }

  public initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  public initializePassport() {
    this.passportLocal.Login();
    this.passportJwt.jwtAuth();
    this.passportGoogle.signupOrLogin();
    this.app.use(passport.initialize());
  }

  public initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  public initializeCloudinary() {
    this.cloudinary.config();
  }
  public closeMongoDB() {
    disconnect();
  }
}

export default App;
