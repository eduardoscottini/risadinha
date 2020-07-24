#!/usr/bin/env node

const meow = require('meow');
const risadinha = require('./index')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  while(true)
    await risadinha()
}

const cliInterface = meow({})
cliMode(cliInterface)
