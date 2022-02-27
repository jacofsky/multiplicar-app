const { options } = require('yargs')
const argv = require('yargs')
                    .options({
                        'b': {
                        alias: 'base',
                        describe: 'Elige numero a multiplicar',
                        type: 'number',
                        demandOption: true
                        },
                        'l': {
                            alias: 'listar',
                            describe: 'Mostrar la tabla',
                            type: 'boolean',
                            demandOption: true,
                            default: false
                        },
                        'h': {
                            alias: 'hasta',
                            describe: 'Elija hasta que numero multiplicar',
                            type: 'number',
                            demandOption: true,
                            default: 10
                        },
                
                    })
                    .check((argv, options) => {

                        if (isNaN(argv.b) || isNaN(argv.h)) {
                            throw 'La base y el hasta tine que ser un numeros'
                        } 
                        
                        return true
                    })
                    .argv

module.exports = argv