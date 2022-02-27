const fs = require('fs')
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {

    return new Promise((resolve, reject) => {

        try {
            

            let salida = ''
            let consola = ''

            for (let i = 1; i < hasta + 1; i++) {
                salida += `RESULTADO DE ${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
                consola += `RESULTADO DE ${base} x ${i} = ${base * i}\n`
            }

            if (listar) {
                console.log('=============='.green)
                console.log('TABLA DEL:'.green, colors.blue(base))
                console.log('=============='.green)
                console.log(salida)
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)

            resolve(`tabla-${base}.txt`.rainbow)
        } catch (err) {
            throw err
        }

    })



}

module.exports = {
    crearArchivo
}