import { input,print } from "../io_utils.js";

function main(){
    const letras = input("Digite a letra escolhida: ")

    const resultado = vogal_consoante(letras)
    if(resultado){
        print("A letra e uma vogal")
    }
    else{
        print("A letra e uma consoante")
    }
}
function vogal_consoante(l){
    if(l == "a"||l=="e"||l=="i"||l=="o"||l=="u"){
        return true
    }
    else{
        return false
    }
}
main()