import { input,print} from '../io_utils.js'

function main(){
    const lado1 = Number(input("Digite o valor de um lado do triangulo: "))
    const lado2 = Number(input("Digite o valor de um lado do triangulo: "))
    const lado3 = Number(input("Digite o valor de um lado de um triangulo: ")) 

    const forma_triangulo = tipo_do_triangulo(lado1,lado2,lado3)

    print(forma_triangulo)
}
function tipo_do_triangulo(L1,L2,L3){
    let triangulo_formado = ""

    if((L1+L2)>L3||(L1+L3)>L2||(L2+L3)>L1){
        if(L1===L2 && L1==L3){
            triangulo_formado = "formam um triangulo Equilatero"
        }
        else if(L1===L2||L2===L3||L1===L3){
            triangulo_formado = "formam um triangulo Isosceles"
        }
        else if(L1!==L2&&L2!==L3){
            triangulo_formado = "formam um triangulo Escaleno"
        }
    }
    return triangulo_formado
}
main()