const argv = require('yargs')
    .options("h", 
        {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Establece hasta donde quiere llegar la tabla'
        }
    ).options("b", 
        {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Establece la base de la tabla'
        }
    ).option("l",
        {
            alias: 'lista',
            type: 'boolean',
            default: false,
            describe: 'Si se ejecuta este comando muestra el resultado de la tabla en consola'
        }
    ).check(( argv, options ) => {
        if( isNaN( argv.b ) ){
            throw 'Este parametro requiere de un numero';
        }
        return true;      
    }).argv;

module.exports = argv;