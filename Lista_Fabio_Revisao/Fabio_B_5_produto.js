import { input,print } from "../io_utils.js";

function main(){
    const produtos = input('Digite o valor dos tres produtos: ')
    const [A,B,C] = produtos.split(" ").map(Number)

    const resultado = verificar_valores(A,B,C)

    print(`O poroduto escolhido deve ser o ${resultado}`)
}
function verificar_valores(a,b,c){
    let menor = Math.min(a,b,c)
    if(menor === a){
        return "produto A"
    }
    else if(menor === b){
        return "produto B"
    }
    else if(menor === c){
        return "produto C"
    }
}
main()