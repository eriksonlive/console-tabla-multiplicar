const argv = require('yargs')
    .options("h", 
        {
            alias: 'hasta',
            type: 'number',
            default: 10
        }
    ).options("b", 
        {
            alias: 'base',
            type: 'number',
            demandOption: true
        }
    ).option("l",
        {
            alias: 'lista',
            type: 'boolean',
            default: false
        }
    ).check(( argv, options ) => {
        if( isNaN( argv.b ) ){
            throw 'Este parametro requiere de un numero';
        }
        return true;      
    }).argv;

module.exports = argv;