import { leerTeclado } from '../views/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\nElija una opción:')
    console.log('1.- Triangulo')
    console.log('2.- Cuadrado')
    console.log('3.- Circulo')
    console.log('4.- Rectangulo')
    console.log('5.- Triangulo 2')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}

export const menutriangulo = async () => {
    let m: number
    console.log('\nElija una opción:')
    console.log('1.- Perimetro')
    console.log('2.- Area')
    console.log('0.- SALIR')
    m = parseInt( await leerTeclado('opción: ') )
    return m
}