import { input,print } from "../io_utils.js";

function main(){
    let prova = Number(input("Numero da prova: "))
    let competidores = Number(input("Numero nadadores: "))

    let contador = 0

    while(prova !== 0 && competidores !== 0){
        while(contador < competidores){
            let dados_nadador = input("Dados do jogador(Nome; Clube; Tempo;): ")
            let dados = dados_nadador.split(" ")
            let Nome = dados[0]
            let Clube = dados[1]
            let Tempo = dados[2]

            print(Nome)
            print(Clube)
            print(Tempo)

            contador++
        }
    prova = Number(input("Numero da prova: "))
    competidores = Number(input("Numero nadadores: "))  
    }
}
main()