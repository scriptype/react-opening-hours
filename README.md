# React Opening Hours

![Travis Badge](https://api.travis-ci.org/scriptype/react-opening-hours.svg)

This project is built with [`create-react-app`](https://create-react-app.dev).

## Usage

There are 5 different opening hours data examples in the mock data of api. And
randomly one of them will be shown on each refresh.

To retrieve a certain opening hours data every time, a hash can be added to the
end of page url (e.g. #0). This works until #4, and after that, any number will
just randomly return one of the existing random opening hours datas.

## Development

This project has been developed with the following versions of `node` and `yarn`.

```sh
$ node -v
v10.16.3

$ yarn -v
1.7.0
```

Clone the project:

```sh
git clone git@github.com:scriptype/react-opening-hours.git
```

Install the dependencies:

```sh
cd react-opening-hours
yarn install
```

Start dev environment:

```sh
# Each of these commands should run in separate shells for convenience.
yarn start     # Starts source code compiling.
yarn start:api # Starts the api server.
yarn test      # Starts unit tests in watch mode.
yarn storybook # Starts component documentation app in a separate port.
```

## Tests

In dev mode, any changes to source files will trigger re-running of unit tests,
as Jest is running in watch mode.

For e2e tests, run:

```sh
yarn test:e2e
```

## Production build

Running the following command should generate an optimized build in `build` folder:

```sh
yarn build
```

## Further documentation

[CRA's docs](https://create-react-app.dev/docs/documentation-intro)
can be consulted for additional details.
