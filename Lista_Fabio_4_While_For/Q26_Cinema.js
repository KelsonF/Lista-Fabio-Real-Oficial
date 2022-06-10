import {input} from "../io_utils.js"

function main(){
    let quantidade_pessoas = 0;
    let otimo = 0
    let bom = 0
    let regular = 0
    let pessimo = 0
    let soma_idade = 0

    let idade, opinião;

    while(idade > 0){
        [idade,opinião] = input("Valores: ").split(" ").map(Number)

        quantidade_pessoas++

        soma_idade += idade

        if(opinião === 1){
            otimo++
        }
        else if(opinião === 2){
            bom++
        }
        else if(opinião === 3){
            regular++
        }
        else if(opinião === 4){
            pessimo++
        }
    }
    
    const media_idade = soma_idade / quantidade_pessoas
    const percentual = (bom * 100) / quantidade_pessoas

    console.log(`MEDIA: ${media_idade}`)
    console.log(`QUANTIDADE: ${otimo}`)
    console.log(`QUANTIDADE: ${regular}`)
    console.log(`PERCENTUAL: ${percentual}`)
}

main()