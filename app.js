const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


// option('l')
// listar
// boolean
// default: false

                    
// FORMA CON PROBLEMAS => YA QUE SI NO C MANDA LA BASE COMO PRIMERA POSICION TOMARA LA PRIMERA POS EJEMPLO: --limite=50 --base
// const [,,arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')


// console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
