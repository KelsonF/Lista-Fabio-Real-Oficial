import { input,print } from "../io_utils.js";

function main(){
    const senha_correta = (2002)
    let senha_usuario = Number(input("Digite sua senha: "))
    
    while(senha_usuario != senha_correta){
        print("Senha Incorreta")
        senha_usuario = Number(input("Digite sua senha: "))
    }
    print("Acesso Permitido")
}
main()