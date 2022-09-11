import { Routes } from '@interfaces/routes.interface';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import ProductRoute from '@routes/product.route';
import validateEnv from '@utils/validateEnv';
import ReviewRoute from '@routes/review.route';
import orderRoute from '@routes/order.route';
import paymentRoute from './routes/stripepayment.route';
validateEnv();

const app = new App();

// database connect
app.connectToDatabase();
app.connectToRedis();
// initialize middleware
app.initializeMiddlewares();

// initialize routes
app.initializeRoutes([
  new IndexRoute(),
  new AuthRoute(),
  new UsersRoute(),
  new ProductRoute(),
  new ReviewRoute(),
  new orderRoute(),
  new paymentRoute(),
] as Routes[]);

// initialize swagger
app.initializeSwagger();
// initialize passport
app.initializePassport();

// intialize cloudinary
app.initializeCloudinary();

// error handler
app.initializeErrorHandling();
app.listen();
