import {print, input} from "../io_utils.js"

function main(){
    let numero_boi; 
    let peso_boi;

    let numero_boi_magro = 0;
    let peso_boi_magro = 0;
    let numero_boi_gordo = 0;
    let peso_boi_gordo = 0;

    while(numero_boi !== 0){
        let dados = input("Dados do boi: ").split(" ").map(Number)
        numero_boi = dados[0]
        peso_boi = dados[1]

        if(peso_boi < peso_boi_magro){
            numero_boi_magro = numero_boi
            peso_boi_magro = peso_boi
        }

        if (peso_boi > peso_boi_gordo){
            numero_boi_gordo = numero_boi
            peso_boi_gordo = peso_boi
        }
    }

    print(`Dados boi mais gordo ----> NUMERO: ${numero_boi_gordo} ; PESO: ${peso_boi_gordo}`)
    print(`Dados boi mais magro ----> NUMERO: ${numero_boi_magro} ; PESO: ${peso_boi_magro}`)
}
main()