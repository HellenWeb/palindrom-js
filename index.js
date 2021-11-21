
// Modules

let chalk = require('chalk')
let uuid = require('uuid')

// Logic

// Comments created through the "Better Comments" extension

// ** Create function "pal" with parameter "n"

let pal = n => {
    if (!n || typeof n !== 'string') return; // ** Doing a simple check
    let arr = [ ...n ].reverse() // ! Expand the string into an array and reverse
    console.log(n == arr.join('')); // ! Perform a comparison through "console.log"
}

pal('ala')

// || \\