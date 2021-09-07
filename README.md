# Movie Rating App 

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://github.com/lintojohny/movie-rating)) and run it by executing `mongod`
- `npm run start:dev` to start the local server

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [cookie-parser](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [bcrypt](https://github.com/auth0/node-jsonwebtoken) - A library to help you hash passwords.
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [mongo-sanitize](https://www.npmjs.com/package/mongo-sanitize)The sanitize function will strip out any keys that start with '$' in the input, so you can pass it to MongoDB without worrying about malicious users overwriting query selectors.
-[body-parser](https://www.npmjs.com/package/body-parser) Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
-[@hapi/joi](https://www.npmjs.com/package/@hapi/joi) joi is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components

## Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration and as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `controllers/` - This folder contains the core business for our API.
- `middleware/` - This folder Middleware comes in between our request and business logic for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.


## Authentication
Requests are authenticated using the `Authorization` header with a valid JWT. We define a express middlewares in `auth.js` that can be used to authenticate requests. 

## Eslint and prettier config - With VS Code

This repo follows wes bos eslint and prettier setup [No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos)

To add eslint and prettier to your VSCode You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
  // These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```


