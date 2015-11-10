# Webpack starter for designers
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
###### An Webpack Starter kit for designers who want to kick off projects using Webpack ( **Webpack**, **Webpack dev server**, **Babel**, **ES6+**, **PostCSS** ).

Styles are broken down into the following groups: **Base**, **Layout**, **Modules**, **State**, **Libs**, **Utilities**.

_Make your own folder structure._

#### Getting Started

1. If needed, install [node](https://github.com/creationix/nvm "Node Version Manager - Simple bash script to manage multiple active node.js versions") and npm (Node Package Manager) using nvm ( Node Version Manager ).
2. Clone this repo with git clone ``https://github.com/ArmendGashi/Webpack-starter-for-designers.git`` or download the zip.
3. In terminal, cd to the folder containing your project. Alternatively, you can type cd and drag the location of the folder into your terminal and hit enter (on Macs).
4. Type ``npm install``. If (and only if) npm install isn't working, try ``sudo npm install``. This should install all devDependencies.
5. In terminal, enter ``npm start or npm run dev`` , read bellow when/why you should use ``npm run dev``.
6. Open your browser at ``http://localhost:8080``.
7. Edit your code inside of the ``dev`` folder.
8. For production enter ``npm run prod`` or add your commands in ``package.json``, this will minify css, and javascript files and will be created and updated in ``public/``.

#### Requirements

* Node/NPM
* Webpack
* PostCSS

#### Features

* Live reloading with Webpack-dev-server
* Babel 6
* ESLint
* PostCSS
* Autoprefixer
* Image Minification
* Feature flags


#### Enable PostCSS plugins
Enable plugins directly in CSS using [postcss-use](https://github.com/postcss/postcss-use "PostCSS-use url"), also before you use dont forget to add it on ``webpack.config.js`` see ``line:79`` how in ``postcssUse``.


#### Feature flags

We have code we want to gate only to our dev environments (like logging) and our internal dogfooding servers (like unreleased features we're testing with employees). In your code, refer to magic globals:

    if ( __DEV__ ) {
      console.warn('Extra logging');
    }
    // ...
    if ( __PRERELEASE__ ) {
      showSecretFeature();
    }
  
Then you can build with ``BUILD_DEV=1 or npm run dev`` ``BUILD_PRERELEASE=1 or npm run build`` webpack from the console. Note that since ``webpack -p or npm run prod`` runs uglify dead-code elimination, anything wrapped in one of these blocks will be stripped out, so you won't leak secret features or strings.




#### devDependencies

    "devDependencies": {
      "autoprefixer": "^6.1.0",
      "babel-core": "^6.1.2",
      "babel-loader": "^6.0.1",
      "babel-plugin-transform-runtime": "^6.1.2",
      "babel-preset-es2015": "^6.1.2",
      "babel-preset-react": "^6.1.2",
      "css-loader": "^0.22.0",
      "eslint": "^1.9.0",
      "eslint-loader": "^1.1.1",
      "extract-text-webpack-plugin": "^0.9.1",
      "file-loader": "^0.8.4",
      "image-webpack-loader": "^1.6.2",
      "lost": "^6.6.2",
      "postcss-import": "^7.1.3",
      "postcss-loader": "^0.7.0",
      "postcss-use": "^2.0.1",
      "style-loader": "^0.13.0",
      "webpack": "^1.12.3",
      "webpack-dev-server": "^1.12.1"
    }

#### Bugs & Support

[@numproc](https://twitter.com/numproc "Armend Gashi") Please list all bugs and feature requests in the Github issue tracker.

Do what you'd like with it :)
