const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, lista, hasta ) => {
    
    try {

        let salida = '';
        let salida2 = '';

        salida2 += `============================\n`;
        salida2 += `        Tabla del ${ base }  \n`;
        salida2 += `============================\n`;

        salida += `${'============================'.rainbow }\n`;
        salida += `        ${ 'Tabla del'.yellow } ${ colors.green( base ) }  \n`;
        salida += `${'============================'.rainbow }\n`;

        for(let i = 1; i <= hasta; i++){
            salida2 += `${ base } X ${ i } = ${ base * i }\n`;
            salida += `${ colors.blue( base ) } X ${ colors.green( i ) } = ${ colors.bold( base * i ) }\n`;
        }
        
        fs.writeFileSync( `txt/tabla-${ base }.txt`, salida2 );

        if( lista ){
            console.log( salida );
        }
        
        return `tabla-${ base }.txt`;
        
    } catch ( err ) {
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}


//! Una forma diferente de creae un archivo con un callback sin async
//* fs.writeFile( 'tabla-5.txt', salida, ( err ) => {
//*     if( err ) throw err;

//*     console.log('Archivo creado!')
//* });