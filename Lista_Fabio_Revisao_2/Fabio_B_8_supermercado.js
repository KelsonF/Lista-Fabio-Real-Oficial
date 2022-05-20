import { input,print } from "../io_utils.js";

function main(){
    const tipo_carne = input('Qual o tipo de carne que voce deseja (F-file; A-alcatra; P-picanha): ')
    const quantidade_desejada = Number(input('Quantos quilos voce deseja: '))
    const tipo_pagamento = input('Digite seu tipo de pagamento (C-cartao de credito; D-dinheiro): ')

    const resultado = desconto_cartao(tipo_carne,quantidade_desejada,tipo_pagamento)

    print(resultado)
}
main()

function pagamento(carne,quantidade_desejada){
    if(carne = 'F'){
        if(quantidade_desejada <= 5){
            return (quantidade_desejada * 4.90)
        }
        else if(quantidade_desejada > 5){
            return (quantidade_desejada * 5.80)
        }
    }
    
    if(carne === "A"){
        if(quantidade_desejada <= 5){
            return (quantidade_desejada * 5.90)
        }
        else if(quantidade_desejada > 5){
            return (quantidade_desejada * 6.80)
        } 
    }

    if(carne === 'P'){
        if(quantidade_desejada <= 5){
            return (quantidade_desejada * 6.90)
        }
        else if(quantidade_desejada > 5){
            return (quantidade_desejada * 7.80)
        }
    }
}

function desconto_cartao(carne,quantidade_desejada,pagamento){
    const valor = pagamento(carne,quantidade_desejada)

    if(pagamento === 'C'){
        return (valor - (valor/10))
    }
    else{
        valor
    }
}