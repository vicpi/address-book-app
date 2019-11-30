# Address Book App

### Overview

Sample address book application, where you can search for users addresses and other user information.

User data is taken from https://randomuser.me - API that generates random user information.

Here you can find [the requirements](https://github.com/vicpi/address-book-app/blob/master/REQUIREMENTS.md) for this application.

### Tech Stack

- `React`
- `Redux`
- `Redux Saga`
- `React Router`
- `Jest`
- `Webpack`
- `SASS`
- `React Styleguidist`

### Install

First, you need to clone the repository and install project dependencies:

```sh
git clone https://github.com/vicpi/address-book-app.git
cd address-book-app
npm install
```

### Start in development mode

```sh
npm start
```

This command will build the application in development mode and start the development server on [http://localhost:3000/](http://localhost:3000/).

It will open the application in your default browser automatically.

### Start in production mode

```sh
npm run production
```

This command will build the application in production mode and start the Node.js server on [http://localhost:3000/](http://localhost:3000/).

Then you will need to open [http://localhost:3000/](http://localhost:3000/) in your favourite browser.

### Unit Tests

You can run unit tests using ```npm test``` command. 

Unit tests are written using Jest.

### Documentation

You can see the documentation by running `npm run docs` command in the terminal.

This command will run the Styleguidist server on port 6060 and open the page with the documentation in the browser.

On this page you can find various React components used in the application, list of their props and how they look like.

### License

[MIT](https://github.com/vicpi/address-book-app/blob/master/LICENSE)