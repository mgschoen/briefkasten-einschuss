# briefkasten-einschuss

This repo contains the script and some debugging stuff for a tagmanager injection that loads a notice about Zeit Online's anonymous letterbox into a subset of a specified size into all articles.

## Development setup

#### Prerequisites

Install [Parcel](https://parceljs.org/) and all local dependencies:

```
$ npm install -g parcel-bundler
$ npm install
```

#### Run the development server

```
$ npm start
```

The site is hosted at [localhost:1234](http://localhost:1234).

#### Build for production

```
$ npm run build
```

The built script is stored in the `/dist` folder, alongside a source map.

#### Test

For a demo of the gatekeeping function that decides in which article the embed is loaded, run

```
$ parcel test.html
```

Open the test site at [localhost:1234](http://localhost:1234) and take a look at the console.