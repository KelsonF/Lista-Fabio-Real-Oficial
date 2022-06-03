import { input,print } from "../io_utils.js";

function main(){
    const renda = Number(input("Digite sua renda mensal: "))
    const valor_emprestimo = Number(input("Valor emprestimo: "))

    const resposta = emprestimo(renda,valor_emprestimo)

    print(resposta)
}
main()

function emprestimo(valor1, valor2){
    if(valor2 < 1212){
        return 'Valor de emprestimo invalido'
    }
    else{
        const numero_parcelas = Number(input("Numero de parcelas: "))

        if(numero_parcelas > 24 || numero_parcelas < 2){
            return "Numero de parcelas invalido"
        }
        else{
            const iof_valor_total = iof_total(valor2)
            const iof_por_dia = iof_do_total * (numero_parcelas*30)

            const iof_do_total = iof_por_dia + iof_valor_total
            const selic_parcial = (iof_do_total + valor2) * 0.1275

            const selic_final = selic(selic_parcial, numero_parcelas)
            const valor_total_emprestimo = valor2 + iof_do_total + selic_final

            const valor_parcela = valor_total_emprestimo/n_parcelas

            if(valor_parcela > valor1 * 0.4){
                return "Emprestimo negado"
            }
            else{
                return `valor IOF: ${iof_do_total} 
                \nvalor dos juros: ${selic_final.toFixed(2)} 
                \nvalor total: ${valor_total_emprestimo}\nvalor da parcela: ${n_parcelas} de ${valor_parcela.toFixed(2)}
                \nEMPRESTIMO APROVADO!`
            }
        }
    }
              
}

function iof_total(valor2){
   return valor2 * 0.0038
}

function selic( selic_parcial, n_parcelas) {

    if( n_parcelas<=6) {
        return selic_parcial * 0.5
    } else if(n_parcelas <= 12) {
        return selic_parcial * 0.75
    } else if( n_parcelas <= 18) {
        return selic_parcial * 1
    } else if(n_parcelas > 18) {
        return selic_parcial * 1.3
    }
}
