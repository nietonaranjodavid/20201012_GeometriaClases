import { menu } from '../views/menu'
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
                
                console.log("Perímetro del triángulo="+triangulo.getPerimetro())
                console.log("Área del triángulo="+triangulo.getArea())
                break
            case 2:
                console.log('Perimetro y Area del cuadrado..........')
                
                let lado:number
                
                lado = parseInt(await leerTeclado('Lado del cuadrado:'))
                
                let cuadrado = new Cuadrado(lado)
                
                console.log("Perímetro del cuadrado="+cuadrado.getPerimetro())
                console.log("Área del cuadrado="+cuadrado.getArea())
                break
            case 3:
                console.log('Perimetro y Area del rectangulo............')
                
                let baserectangulo, alturarectangulo:number
                
                baserectangulo = parseInt(await leerTeclado('Base del rectángulo:'))
                alturarectangulo = parseInt(await leerTeclado('Altura del rectángulo:'))
                
                let rectangulo = new Rectangulo(baserectangulo,alturarectangulo)
                
                console.log("Perímetro del rectángulo="+ rectangulo.getPerimetro())
                console.log("Área del rectángulo="+ rectangulo.getArea())
                break
            case 4:
                console.log('Perimetro y Area de un circulo...........')
                
                let radio:number
                
                radio = parseInt(await leerTeclado('Radio del círculo:'))
                
                let circulo = new Circulo(radio)
                
                console.log("Perímetro del círculo="+circulo.getPerimetro())
                console.log("Área del círculo="+circulo.getArea())
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