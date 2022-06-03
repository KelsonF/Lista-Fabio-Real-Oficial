import { input,print} from '../io_utils.js'

function main(){
    let linha = input("Numeros: ")
    const numeros = linha.split(" ").map(Number)
    const numero1 = numeros[0]
    const numero2 = numeros[1]
    const numero3 = numeros[2]
    
   const ordem = ordenar(numero1, numero2, numero3)
   const A = ordem[0]
   const B = ordem[1]
   const C = ordem[2]

   let tipo_lado = ''
   let tipo_angulo = ''
    
   if(A >= B + C){
       tipo_angulo = "NAO FORMA TRIANGULO"
   }
   else if(A**2 === B**2 + C**2){
       tipo_angulo = "TRIANGULO RETANGULO"
   }
   else if(A**2 > B**2 + C**2){
       tipo_angulo = "TRIANGULO OBTUSANGULO"
   }
   else if(A**2 < B**2 + C**2){
       tipo_angulo = "TRIANGULO ACUTANGULO"
   }

   if(A = B = C){
       tipo_lado = "TRIANGULO EQUILATERO"   
   }
   else if(A === B !== C){
       tipo_lado = "TRIANGULO ISOSCELES"
   }

   print(tipo_angulo)
   print(tipo_lado)

}
main()    
function ordenar(numero1, numero2, numero3){
    
    let maior = Math.max(numero1,numero2,numero3)
    let menor = Math.min(numero1,numero2,numero3)
    let medio = 0
    
    if(numero1 !== maior && numero1 !== menor){
        medio = numero1
    }
     else if(numero2 !== maior && numero2 !==menor){
        medio = numero2
    }
    else if(numero3 !== maior && numero3!== menor){
        medio = numero3
    }

    return [maior,medio,menor]
}
