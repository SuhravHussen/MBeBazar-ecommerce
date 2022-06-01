import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App();

// database connect
app.connectToDatabase();

// initialize middleware
app.initializeMiddlewares();

// initialize routes
app.initializeRoutes([new IndexRoute(), new AuthRoute(), new UsersRoute()]);

// initialize swagger
app.initializeSwagger();

// error handler
app.initializeErrorHandling();
app.listen();
