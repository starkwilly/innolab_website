#!/usr/bin/env node
'use strict';

const {argv} = require('yargs');
const replace = require('replace-in-file');
const usePresets = argv.presets ? true : false;

//Load the library and specify options
const options = {
  files: 'node_modules/react-scripts/config/webpack.config.js',
  from: /babelrc: (true|false)/g,
  to: 'babelrc: ' + usePresets,
  countMatches: true
};

replace(options, (error, results) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
});
