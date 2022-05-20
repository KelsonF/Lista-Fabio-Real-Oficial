import { input,print } from "../io_utils.js";

function main(){
    const qtd_maçãs = Number(input('Digite quantos quilos de maçãs voce deseja: '))
    const qtd_morangos = Number(input('Digite quantos quilos de morango voce deseja: '))

    const resultado1 = descontos_morango(qtd_morangos)
    const resultado2 = descontos_maçãs(qtd_maçãs)

    print(resultado1)
    print(resultado2)
    print(resultado1 + resultado2)
}
main()

function descontos_morango(morango){
    if(morango <= 5){
        return (morango * 2.50)
    }
        if(morango > 5 && morango < 8){
            return (morango * 2.20)
        }
        else if(morango >= 8){
            return (morango * 2.20) - (morango * 2.20)/10
        }
}

function descontos_maçãs(maçãs){
    if(maçãs <= 5){
        return (maçãs * 1.80)
    }
        if(maçãs > 5 && maçãs < 8){
            return (maçãs * 1.20)
        }
        else if(maçãs >= 8){
            return (maçãs * 1.20) - (maçãs * 1.20)/10
        }
}