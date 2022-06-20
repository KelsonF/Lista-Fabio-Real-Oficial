// Leia um senha de um usuário, colocando asteriscos nos caracteres digitados e verifique se a senha é
// correta ou não.

import { numero,input } from "../io_utils.js"

function main(){
    let senha = input("Senha: ")
    console.clear()

    let senha_criptografada = senha_asteriscos(senha)
    console.log(senha_criptografada)

    let senha_usuario = input("Senha: ")
    
    while(senha_usuario !== senha){
        console.clear()
        console.log("INCORRETO TENTE NOVAMENTE") 
        console.log(senha_criptografada)
        senha_usuario = input("Senha: ")
    }
    console.log("Senha Correta")
}

function senha_asteriscos(senha){
    let asteriscos = ''

    for(let i = 0; i < senha.length; i++){
        asteriscos += "*"
    }

    return asteriscos
}

main()