import {input, print} from '../io_utils.js'

function main(){
    let distancia = 0;
    let tanque_carro = 50;
    let consumo = 0;

    let distancia_ultima_medição = Number(input("Valor: "));
    let litros_consumidos = Number(input("Valor: "));

    while (distancia <= 600 || tanque_carro === 0) {
        distancia = distancia + distancia_ultima_medição
        tanque_carro = tanque_carro - litros_consumidos

        consumo += distancia_ultima_medição / litros_consumidos
    }
    print(`CONSUMO: ${consumo}`)
}
main()