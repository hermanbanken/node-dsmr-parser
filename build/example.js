'use strict';

var parser = require('./index');
var telegram = require('fs').readFileSync('example-telegram.txt', 'utf-8');

console.log(parser.parse(telegram).objects);