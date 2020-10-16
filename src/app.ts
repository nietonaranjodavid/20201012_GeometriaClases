import { menu, menutriangulo } from '../views/menu'
import { leerTeclado } from '../views/lecturaTeclado'
import { Triangulo } from '../figuras/triangulo'
import { Cuadrado } from '../figuras/cuadrado'
import { Rectangulo } from '../figuras/rectangulo'
import { Circulo } from '../figuras/circulo'

const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Perimetro y area del triangulo............')
                
                let base, altura, ladoa, ladob: number
                
                base =  parseInt( await leerTeclado('Base del triángulo:'))
                altura =  parseInt( await leerTeclado('Altura del triángulo:'))
                ladoa =  parseInt( await leerTeclado('Lado A del triángulo:'))
                ladob =  parseInt( await leerTeclado('Lado B del triángulo:'))
                
                let triangulo = new Triangulo(base,altura,ladoa,ladob)
                
                console.log("Perímetro del triángulo="+triangulo.perimetro())
                console.log("Área del triángulo="+triangulo.area())
                break
            case 2:
                console.log('Perimetro y Area del cuadrado..........')
                
                let lado:number
                
                lado = parseInt(await leerTeclado('Lado del cuadrado:'))
                
                let cuadrado = new Cuadrado(lado)
                
                console.log("Perímetro del cuadrado="+cuadrado.perimetro())
                console.log("Área del cuadrado="+cuadrado.area())
                break
            case 3:
                console.log('Perimetro y Area del rectangulo............')
                
                let baserectangulo, alturarectangulo:number
                
                baserectangulo = parseInt(await leerTeclado('Base del rectángulo:'))
                alturarectangulo = parseInt(await leerTeclado('Altura del rectángulo:'))
                
                let rectangulo = new Rectangulo(baserectangulo,alturarectangulo)
                
                console.log("Perímetro del rectángulo="+ rectangulo.perimetro())
                console.log("Área del rectángulo="+ rectangulo.area())
                break
            case 4:
                console.log('Perimetro y Area de un circulo...........')
                
                let radio:number
                
                radio = parseInt(await leerTeclado('Radio del círculo:'))
                
                let circulo = new Circulo(radio)
                
                console.log("Perímetro del círculo="+circulo.perimetro())
                console.log("Área del círculo="+circulo.area())
                break
            case 5:
                    let m: number
                    do {
                        m = await menutriangulo()
                        switch(m){
                            case 1:
                                console.log('Perimetro del triangulo............')
                
                                let base2, altura2, ladoa2, ladob2: number
                
                                base2 =  parseInt( await leerTeclado('Base del triángulo:'))
                                altura2 =  parseInt( await leerTeclado('Altura del triángulo:'))
                                ladoa2 =  parseInt( await leerTeclado('Lado A del triángulo:'))
                                ladob2 =  parseInt( await leerTeclado('Lado B del triángulo:'))
                
                                let triangulo2 = new Triangulo(base2,altura2,ladoa2,ladob2)
                
                                console.log("Perímetro del triángulo="+triangulo2.perimetro())
                                
                                break
                            case 2:
                                console.log('Area del triangulo............')

                                let base3, altura3, ladoa3, ladob3: number

                                base3 =  parseInt( await leerTeclado('Base del triángulo:'))
                                altura3 =  parseInt( await leerTeclado('Altura del triángulo:'))
                                ladoa3 =  parseInt( await leerTeclado('Lado A del triángulo:'))
                                ladob3 =  parseInt( await leerTeclado('Lado B del triángulo:'))

                                let triangulo3 = new Triangulo(base3,altura3,ladoa3,ladob3)

                                console.log("Área del triángulo="+triangulo3.area())

                                break
                            case 0:
                                console.log('\nGracias por su participación')
                                break
                            default:
                                console.log("Opción incorrecta")
                                break
                        }
                    }while (m != 0)
                main
                break
            case 0:
                console.log('\nGracias por su participación')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()