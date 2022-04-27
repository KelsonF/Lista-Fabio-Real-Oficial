import { input,print } from "../io_utils.js";

function main(){
    const senha = Number(input("Digite uma senha de 4 digitos(ex:1234): "))
    const senha_real = Number(1234)

    const resultado = validacao_senha(senha,senha_real)

    print(resultado)
}
function validacao_senha(s,sr){
    if(s === sr){
        return "Acesso Autorizado"
    }
    else if(s !== sr){
        return "Acesso Negado"
    }
}
main()