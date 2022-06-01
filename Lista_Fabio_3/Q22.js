//Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
//nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
//numero de identificação e o peso do boi mais magro e do boi mais gordo.


import { input,print } from "../io_utils.js";

function main(){
    let N = Number(input("Numero de fichas: "))

    let id_boi_gordo
    let peso_boi_gordo = 0
    let id_boi_magro
    let peso_boi_magro = 0

    let contador = 1

    while(contador <= N){
        const info_boi = input("Digite ID e PESO do boi: ")
        const [id_boi, peso_boi] = info_boi.split(" ").map(Number)

        if(contador === 1){
            id_boi_gordo = id_boi
            peso_boi_gordo = peso_boi

            id_boi_magro = id_boi
            peso_boi_magro = peso_boi
        }
        else{
            if(peso_boi > peso_boi_gordo){
                id_boi_gordo = id_boi
                peso_boi_gordo = peso_boi
            }
            
            if(peso_boi < peso_boi_magro){
                id_boi_magro = id_boi
                peso_boi_magro = peso_boi
            }
        }

    contador++
    
    }

    print(`ID boi mais gordo: ${id_boi_gordo}`)
    print(`Peso boi mais gordo: ${peso_boi_gordo} KG`)
    print(`ID boi magro: ${id_boi_magro}`)
    print(`Peso boi mais magro: ${peso_boi_magro} KG`)
}
main()