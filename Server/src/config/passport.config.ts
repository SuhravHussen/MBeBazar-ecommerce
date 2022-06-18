import userModel from '@models/users.model';
import passport from 'passport';

import LocalStrategy from 'passport-local';

export class PassportLogin {
  user = userModel;
  customFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  };

  public verifyCallback = async (req, email, password, done) => {
    try {
      email = email || req.body.email;
      password = password || req.body.password;
      console.log(this.user);
      const userData = await this.user.findOne({ email: email });
      if (!userData)
        return done({
          message: 'Could not find user in database',
        });
      const isValid = await userData.comparePassword(password);
      if (isValid) {
        done(null, userData);
      } else {
        return done({
          message: 'Invalid password',
        });
      }
    } catch (e) {
      done(e);
    }
  };

  strategy = new LocalStrategy(this.customFields, this.verifyCallback);

  public async Login() {
    passport.use(this.strategy);
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((userId, done) => {
      userModel
        .findById(userId)
        .then(user => {
          done(null, user);
        })
        .catch(err => done(err));
    });
  }
}
