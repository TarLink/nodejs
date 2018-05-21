'use strict'
const fs = require('fs')
fs.readFile('target', (err,data) => {
  if (err) {
    throw err
  }
  console.log(data.toString())
})
