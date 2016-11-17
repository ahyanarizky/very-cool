# Very Cool
Portofolio Project Final Phase 2 Blandford Fox

## Main Stack
* NodeJs - Engine Server
* Express - Web Framework
* MongoDB - Database
* Mongoose - ODM
* Passport - Authentication Handler
* Bootstrap - CSS Framework
* jQuery - DOM Manipulator
* Live-server - Client-side Rendering

## Server Dependencies
* cors
* dotenv
* express-session
* jsonwebtoken
* mongoose-sequence
* passport-local
* passport-local-mongoose

## API Routes

### Auth
Endpoint | Method | Description |
----|-----| ------|
`http://localhost:3000/api/auth/register` | POST | Register User
`http://localhost:3000/api/auth/login` | POST | Login User

### Cool Forum
Endpoint | Method | Description |
----|-----| ------|
`http://localhost:3000/api/cool` | GET | Get All Threads
`http://localhost:3000/api/cool/:id` | GET | Get One Thread
`http://localhost:3000/api/cool` | POST | Create New Thread
`http://localhost:3000/api/cool/:id` | PUT | Edit Thread
`http://localhost:3000/api/cool/:id` | DELETE | Delete Thread

## Model
### User
```js
var userSchema = mongoose.Schema({
    UserId: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(email) {
                return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
            },
            message: `WRONG EMAIL FORMAT`
        },
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    avatar_url: {
        type: String
    }
});

```
### Thread
```js
let threadSchema = new mongoose.Schema({
    threadId: {
        type: Number
    },
    avatar_url: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hashtag: {
        type: Array
    }
}, {
    timestamps: true
});
```

## Installation
### Package Installation
* Go to folder `server`
* Install Dependencies
```sh
cd server
npm install
```
### package.json
```json
{
    "name": "server",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "start": "node ./bin/www",
        "dev": "nodemon ./bin/www",
        "test": "mocha"
    },
    "dependencies": {
        "body-parser": "~1.15.1",
        "cookie-parser": "~1.4.3",
        "cors": "^2.8.1",
        "debug": "~2.2.0",
        "dotenv": "^2.0.0",
        "express": "~4.13.4",
        "mongodb": "^2.2.11",
        "mongoose": "^4.6.7",
        "mongoose-sequence": "^3.1.0",
        "morgan": "~1.7.0",
        "serve-favicon": "~2.3.0"
    },
    "devDependencies": {
        "nodemon": "^1.11.0"
    }
}
```

## Usage
### Run Server
* Make sure you are in folder `server`
* Run server
```sh
cd server
npm run dev
```

### Run Client
* Go to folder `client`
* Run live server
* Make sure you have `live-server` installed globally by using `npm install --global live-server`
```sh
cd client
live-server
```
### License
MIT

### Copyright
Copyright 2016 by ahyanarizky
