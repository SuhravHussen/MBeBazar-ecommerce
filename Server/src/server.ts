import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import ProductRoute from '@routes/product.route';
import validateEnv from '@utils/validateEnv';
import ReviewRoute from '@routes/review.route';
validateEnv();

const app = new App();

// database connect
app.connectToDatabase();
app.connectToRedis();
// initialize middleware
app.initializeMiddlewares();

// initialize routes
app.initializeRoutes([new IndexRoute(), new AuthRoute(), new UsersRoute(), , new ProductRoute(), new ReviewRoute()]);

// initialize swagger
app.initializeSwagger();
// initialize passport
app.initializePassport();
// error handler
app.initializeErrorHandling();
app.listen();
