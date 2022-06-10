/*17. Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').
*/

import { input,print } from "../io_utils.js";

function main(){

    let linha;
    let nome;
    let altura; 
    let peso; 

    let nome_magra = ''
    let peso_magra = 0
    let altura_magra = 0

    let nome_gorda = ''
    let peso_gorda = 0
    let altura_gorda = 0

    while(nome !== 'FIM'){
        linha = input("Dados: ").split(" ");
        nome = linha[0];
        altura = Number(linha[1]);
        peso = Number(linha[2])

        if(peso < peso_magra){
            peso_magra = peso
            nome_magra = nome
            altura = altura_magra
        }
        else if(peso > peso_gorda){
            peso_gorda = peso
            nome_gorda = nome
            altura = altura_gorda
        }


    }

    print(`DADOS MAIS GORDA \n NOME: ${nome_gorda}\n Altura: ${altura_gorda}\n Peso: ${peso_gorda}`)
    print(`DADOS MAIS MAGRA \n NOME: ${nome_magra}\n Altura: ${altura_magra}\n Peso: ${peso_magra}`)

}
main()

