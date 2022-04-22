import { input,print } from "../io_utils.js";

function main(){
    const data = (input("Digite uma data (EX:17/04/2022): ").split("/"))
    const dia = Number(data[0])
    const mes =  Number(data[1])
    const ano =  Number(data[2])

    const validacao_data = checagem_data(dia,mes,ano)
    print(validacao_data)
}
function checagem_data(d,m,a){
    let checagem = ""
    if(a<0) checagem = "Data invalida, tente novamente"
    else if(m<1 || m>12) checagem = "Data invalida, tente novamente"
    else if(m===1 && d>31||m===3&&d>31||m===5&&d>31)checagem = "Data invalida, tente novamente"
    else if(m===7&&d>31||m==8&&d>31||m==10&&d>31||m==12&&d>31) checagem = "Data invalida, tente novamente"
    else if(m==4&& d>30||m==6&& d>30||m==9&& d>30||m==11&& d>30) checagem = "Data invalida, tente novamente"
    else if(m===2 && d>28) checagem = "Data invalida, tente novamente"
    else checagem = "Data valida"
    return checagem
}
main()