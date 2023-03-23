'use strict';

const inquirer = require('..');
const assert = require('assert').strict;

assert.strictEqual(inquirer(), 'Hello from inquirer');
console.info("inquirer tests passed");
