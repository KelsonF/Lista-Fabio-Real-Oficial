import { input,print } from "../io_utils.js";

function main(){
    const genero = input("Digite o codigo de genero escolhido: ")

    const resultado = definicao_de_genero(genero)

    print(`O genero selecionado foi: ${resultado}`)
}
function definicao_de_genero(g){
    if(g === "M"){
        return 'MASCULINO'
    }
    else if(g === "F"){
        return 'FEMININO'
    }
    else{
        return 'Sexo invalido'
    }

}
main()