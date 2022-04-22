import { input,print} from '../io_utils.js'

function main(){
    const angulo1 = Number(input("Digite o valor de um ângulo: "))
    const angulo2 = Number(input("Digite o valor de um ângulo: "))
    const angulo3 = Number(input("Digite o valor de um ângulo: ")) 

    const tipo_do_triangulo = tipo_triangulo(angulo1,angulo2,angulo3)
    print(`Esses angulos ${tipo_do_triangulo}`)
}
function tipo_triangulo(A1,A2,A3){
    let triangulo_formado = ""
    if((A1 + A2 + A3) !== 180)triangulo_formado = "não formam triângulo"
    else if((A1 + A2 + A3)===180){
        if(A1<90 && A2<90 && A3<90){
            triangulo_formado = "formam um triangulo Acutangulo"
        }
        else if(A1=== 90 || A2 === 90 || A3 === 90){
            triangulo_formado = "formam um triangulo Retangulo"
        }
        else if(A1>90||A2>90||A3>90){
            triangulo_formado = "formam um triangulo Obtusangulo"
        }
    }
    return triangulo_formado
}
main()