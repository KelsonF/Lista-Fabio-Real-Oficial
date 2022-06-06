import { input,print } from "../io_utils.js";

function main(){
    let salario = Number(input("Salario: "));
    let soma_salarios = 0;
    let soma_novos_salarios = 0;
    let diferença_antigo_novo_salario = 0;

    while(salario !== 0){
        soma_salarios += salario;

        novo_salario = calcular_novo_salario(salario)

        print(`Salario Antigo: ${salario}`);
        print(`Novo Salario: ${novo_salario}`);
        
        
        soma_novos_salarios += novo_salario;

        salario = Number(input("Salario: "));
    }

    diferença_antigo_novo_salario = soma_novos_salarios - soma_salarios

    print(`Soma Novos Salarios: ${soma_novos_salarios}`)
    print(`Soma Salarios Antigos: ${soma_salarios}`)
    print(`Diferenca de Novos e Antigos Salarios: ${diferença_antigo_novo_salario}`)
}
main()

function calcular_novo_salario(salario){
    let novo_salario = 0;
    
    if(salario < 3000){
        novo_salario = (salario * 0.25) + salario;
    }
    else if(salario < 6000){
        novo_salario = (salario * 0.20) + salario;
    }
    else if(salario < 10000){
        novo_salario = (salario * 0.15) + salario;
    }
    else{
        novo_salario = (salario * 0.10) + salario;
    }

    return novo_salario
}