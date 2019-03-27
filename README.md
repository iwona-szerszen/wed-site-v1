https://wed-site-app-v1.herokuapp.com/

# wed-site-v1
Wedding site is an isomorphic application built on MERN stack, dedicated to guests invited to the wedding. wed-site-v1 is the first version of appliaction (before changing graphic design).


## Table of contents
* [About the app](#about-the-app)
* [Technologies](#technologies)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Available Commands](#available-commands)
* [Road to version 2](#road-to-version-2)
* [Sources](#sources)
* [License](#license)


## About the app
Wedding site gives some information about ceremony, reception, time left to the wedding. We can find out, who has been invited, what is its status and what is the statistic about the guests - how many people have accepted / declined or not responded yet to wedding invitation. We can get insight into list of reserved / not reserved wedding gifts suggested by the young couple. It is also possible to read and listen to all music dedications made by guests till now. Although user login has not been implemented, the user's account management has been simulated (test user's id entered in server/config.js) so the following functionalities below are enabled:
* presence confirmation / rejection,
* present reservation / cancelling reserved presents,
* adding / deleting user's dedications.


## Technologies
Project created with:
* MERN (MongoDB, Express, React, NodeJS)
* Webpack - version 3
* Bootstrap - version 4


## Getting Started
To run this project, install it locally using npm:

```
  cd wed-site
  npm install
  npm start
```
and then start the app in development mode:

```
  npm start
```

or in production mode:
```
  npm run start:prod
```

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/). Also `npm6` is required to install dependencies properly.


## Project Structure

### Webpack Configs

MERN uses Webpack for bundling modules. There are four types of Webpack configs provided `webpack.config.dev.js` (for development), `webpack.config.prod.js` (for production), `webpack.config.server.js` (for bundling server in production) and `webpack.config.babel.js` (for [babel-plugin-webpack-loaders](https://github.com/istarkov/babel-plugin-webpack-loaders) for server rendering of assets included through webpack).

### Server

MERN uses express web framework. The app sits in server.js where we check for NODE_ENV.

If NODE_ENV is development, we apply Webpack middlewares for bundling and Hot Module Replacement.

#### Server Side Rendering

We use React Router's match function for handling all page requests so that browser history works.

All the routes are defined in `client/routes.js`. React Router renders components according to route requested.

`match` function takes two parameters, first is an object that contains routes, location and history and second is a callback function which is called when routes have been matched to a location.

`fetchComponentData` is the essential function which collects all the arrays of actions that are required to be dispatched before rendering the component in the current route. It returns a promise when all the required actions are dispatched. We render the page and send data to the client for client-side rendering in `window.__INITIAL_STATE__`.

### Client

Client directory contains all the shared components, routes, actions, reducers.

#### components
This folder contains all the common components which are used throughout the project. The components are divided into functional components (directory named presentational) and containers (directory named containers).

#### index.js
Index.js simply does client side rendering using the data provided from `window.__INITIAL_STATE__`.


## Available Commands

1. `npm run start` - starts the development server with hot reloading enabled,

2. `npm run bs` - bundles the code and starts the production server,

3. `npm run lint` - runs linter to check for lint errors.


## Road to version 2
TODOs for future development:
- v2.1.0 -> improve RWD for the smallest devices
- v2.2.0 -> write unit tests for components
- v2.3.0 -> make DevTools to be loaded at the app starting


## Sources
Application based on boilerplate [MERN](http://mern.io) project.<br>
To create Countdown component, the following code sources have been used:
* [React Flip Clock](https://codepen.io/Libor_G/pen/JyJzjb),
* [react-countdown-date](https://github.com/destinythegame/react-countdown-date).


## License
Project released under the [ISC License](http://www.opensource.org/licenses/ISC).