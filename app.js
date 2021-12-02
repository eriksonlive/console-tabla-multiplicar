const { crearArchivo } = require('./helpers/multiplicar');
const { b, l, h } = require('./yargs/yargs-conf');

crearArchivo( b, l, h )
    .then( archivo => console.log( archivo ) )
    .catch( err => console.log( err ) );

//console.log( process.argv );

// const [ , , arg3 = 'base=5' ] = process.argv;

// console.log( arg3 );

// const [ , base ] = arg3.split('='); 

// console.log( base );



//const base = 3;




