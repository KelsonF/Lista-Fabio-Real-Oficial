import { input,print } from "../io_utils.js";

function main(){
    const turno = input("Informe o seu horario de estudo ex(M,V,N): ")

    const resultado = mensagem(turno)

    print(resultado)
}
function mensagem(t){
    if(t == "M"){
        return "Bom Dia!"
    }
    else if(t == "V"){
        return "Boa Tarde!"
    }
    else if(t == "N"){
        return "Boa Noite!"
    }
}
main()