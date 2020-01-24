# ConjurJS

https://github.com/pkcwong/conjur

[![CircleCI](https://circleci.com/gh/pkcwong/conjur/tree/master.svg?style=shield)](https://circleci.com/gh/pkcwong/conjur/tree/master)

A full stack boilerplate project with ExpressJS + ReactJS.

## Prerequisites and Installation

Install the following frameworks and packages.

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

Verify the installation.

```bash
node --version
yarn --version
```

Clone this repository.

```bash
git clone https://github.com/pkcwong/conjur.git <PROJECT_NAME>
cd <PROJECT_NAME>
yarn build
```

## Development

Start a development server.

```bash
yarn start:dev
```

Run unit tests.

```bash
yarn test
```

## Production

Create a production build.

```bash
yarn clean
yarn build
```

Start the production server.

```bash
yarn start
```

Stop the production server.

```bash
yarn stop
```

## Support and Updates

Receive the latest updates.

```bash
git remote add pk https://github.com/pkcwong/conjur.git
git pull pk master
```
