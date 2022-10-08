# MBeBazar-ecommerce

## _This is the back-end of mbebazar ecommerce project. its a express-typescript project and I used mongodb and redis as my database._

## Tech

I have used many technology to build this backend

- expressJs
- Typescript
- MongoDB 🍃
- Redis
- Mongoose
- passportJs 🛃
- formidable
- json web token
- swagger
- morgan , winston
- ✨ eslint , prettier ✨ etc

## Features 🔥

- Get products based on categories like popular products , top sell products , deals of the day.
- Search products by text
- Get suggestion for searched product
- Search any product by id
- See related products
- Order product
- Review product only after the order is delivered
- create user with email and password
- login with email and password
- send jwt via http only cookies after successful login
- protect route via passport jwt
- update profile , upload profile
- view docs with swagger docs
  and so on...

## DOCS 📗

**Read documentation in [api documentation](https://api.mbebazar.live/api-docs/ 'api documentation')**

## ENV FILE STRUCTURE

_Create **.env.development.local** file for development mode and **.env.production.local** file for production mode_

```
# PORT
PORT = YOUR PORT

# DATABASE
URI = YOUR MONGODB DATABASE URI

# TOKEN (Time in seconds)
SECRET_KEY = YOUR SECRET KEY
JWT_TOKEN_EXPIRE= JWT TOKEN EXPIRE TIME IN SECONDS
JWT_REFRESH_EXPIRE=JWT REFRESH TOKEN EXPIRE TIME IN SECONDS
COOKIE_SECRET=COOKIE SECRET
COOKIE_DOMAIN=CLIENT DOMAIN

# LOG
LOG_FORMAT = combined
LOG_DIR = ../logs

# CORS
ORIGIN = YOUR CLINET ORIGIN
CREDENTIALS =true

#SESSION
SECRET=SESSION_SECRET

#REDIS
REDIS_HOSTNAME= YOUR REDIS HOSTNAME
REDIS_PORT=YOUR REDIS PORT
REDIS_PASSWORD=YOUR REDIS PASSWORD
REDIS_USERNAME =YOUR REDIS USERNAME


#STRIPE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= STRIPE PUBLISHABLE KEY
STRIPE_SECRET_KEY= STRIPE SECRET KEY
WEB_HOOK_SECRET= WEBHOOK SECRET KEY
```

## HOW TO RUN

First clone the databse by command

    git clone git@github.com:SuhravHussen/MBeBazar-ecommerce.git

Install dependecies

    yarn install

> your node js version must be **>=16** to run the app without any issues

Create the .env files and give all the informations correctly to run. The start the server by command

    yarn start

---
