'use strict'
const fs = require('fs')
fs.watch('target', () => console.log('File changed!'));
console.log('Now watching target for changes...');
