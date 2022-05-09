import { input,print } from "../io_utils.js";

function main(){
    const numero_dia = Number(input("Informe o numero correspondete a semana: "))

    const resultado = dia_semana(numero_dia)

    print(resultado)
}
function dia_semana(n){
    if(n == 1){
        return "Domingo"
    }
    else if(n == 2){
        return "Segunda"
    }
    else if(n == 3){
        return "Terca-Feira"
    }
    else if(n == 4){
        return "Quarta-Feira"
    }
    else if(n == 5){
        return "Quinta-Feira"
    }
    else if(n == 6){
        return "Sexta-Feira"
    }
    else if(n == 7){
        return "Sabado"
    }
    else{
        return "Numero invalido, tente novamente"
    }
}
main()