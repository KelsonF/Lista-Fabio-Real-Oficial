/* 
16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um emprestimo.
Com um emprestimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do emprestimo.
*/ 

import { input,print } from "../io_utils.js";

function main(){
    let emprestimo = Number(input("Valor emprestimo: "))

    let dias = 0
    let dia_util = 0

    while(emprestimo > 0){
        
        if(eh_dia_util(dias)){
           emprestimo -= 200
           dia_util++
           print('DIA UTIL')
        }

       emprestimo += calcular_juros(emprestimo)

       dias++
    }
    print(`DIAS UTEIS: ${dia_util}`)

}
main()

function eh_dia_util(dia){
    return !(dia % 6 === 0 || dia % 7 === 0)
}

function calcular_juros(emprestimo){
    return emprestimo * (0.85 / 100)
}   