# Car Configurator [![Build Status](https://travis-ci.org/janb87/car-configurator.svg?branch=master)](https://travis-ci.org/janb87/car-configurator)

Car configurator app, developed just for fun.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Project requirements

### Must have

1. [x] Being able to customize a car
    1. [x] Brand (using data from this [api](https://car-api.firebaseio.com/rest.json))
    2. [x] Body color
    3. [x] Rims (type + color)
    4. [x] Number on the side
2. [x] Don't use any images (including SVG or Canvas), try to do as much as possible using CSS
3. [x] Use next generation Javascript / CSS
4. [x] Minification / any other optimizations for Production
5. [x] Proper HTML semantics
6. [x] Responsive design

### Should have

1. [ ] Auto-saving configuration to the `localStorage`
2. [ ] Sharing configuration using a url
3. [x] Basic tests (added a reducer test example)
4. [x] Travis build

### Nice to have

1. [ ] Server side rendering
2. [ ] View car from multiple angles
3. [ ] Change configuration for interior
4. [ ] Use [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)
5. [ ] Use [React Hot Loader](https://github.com/gaearon/react-hot-loader)
6. [ ] i18n
7. [ ] Sass compilation as part of webpack
8. [x] Make use of Redux Saga

## Directory structure

1. `actions` Action creators, used for creating Redux action objects.
2. `components` Presentation components. Focus on displaying things, don't use the global store.
3. `containers` Container components. Focus on behavior, use the global store.
4. `reducers` Redux reducers. Convert an action into a new state.
5. `sagas` Redux sagas, used to simplify interactions with async actions.
5. `services` Services which interact with the backend (JSON Api).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
