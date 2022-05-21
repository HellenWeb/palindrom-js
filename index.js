
// Modules

let chalk = require('chalk')
let uuid = require('uuid')

// Logic

// Comments created through the "Better Comments" extension

// ** Create function "pal" with parameter "n"

let pal = (n = 1) => n === [...n].reverse().join("") 

console.log(pal('ollo'))

// || \\
