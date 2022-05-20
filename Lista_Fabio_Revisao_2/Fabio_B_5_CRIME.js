import { input,print } from "../io_utils.js";

function main(){
    let lista = []
    print("Telefonou para a vitima ?")
    const resposta1 = input('Digite sua resposta: ')
    print("Esteve no lugar do crime ?")
    const resposta2 = input('Digite sua resposta: ')
    print("Mora perto da vitima ?")
    const resposta3 = input('Digite sua resposta: ')
    print("Devia para a vitima ?")
    const resposta4 = input('Digite sua resposta: ')
    print("Ja trabalhou com a vitima ?")
    const resposta5 = input('Digite sua resposta: ')
    
    lista.push(resposta1,resposta2,resposta3,resposta4,resposta5)

    const resultado = analise(lista) 

    if(resultado === 2){
        print('SUSPEITA')
    }
    else if(resultado === 3 || resultado === 4){
        print('CUMPLICE')
    }
    else if(resultado === 5)[
        print('ASSASINO')
    ]
    else{
        print('INOCENTE')
    }
}
main()

function analise(list){
    let contador = 0
    for(let respostas of list){
        if(respostas === "T"){
            contador++
        }
    }
    return contador
}