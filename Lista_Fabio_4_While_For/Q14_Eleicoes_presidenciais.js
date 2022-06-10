//· uma mensagem indicando a possibilidade ou não de haver 2o turno.

import { input,print } from "../io_utils.js";

function main(){
    let opiniao_eleitor = Number(input("Voto: "));

    let numero_eleitores = 0;
    let votos_Serra = 0;
    let votos_Dilma = 0;
    let votos_Ciro = 0;
    let votos_indeciso = 0;
    let votos_outros = 0;
    let votos_brancos = 0;

    while(opiniao_eleitor !== -1){
        numero_eleitores++;

        if(opiniao_eleitor === 45){
            votos_Serra++;
        }
        else if(opiniao_eleitor === 13){
            votos_Dilma++;
        }
        else if(opiniao_eleitor === 23){
            votos_Ciro++;
        }
        else if(opiniao_eleitor === 99){
            votos_indeciso++;
        }
        else if(opiniao_eleitor === 98){
            votos_outros++;
        }
        else if(opiniao_eleitor === 0){
            votos_brancos++;
        }


        opiniao_eleitor = Number(input("Voto: "));
    }

    const percentual_serra = (votos_Serra * 100) / numero_eleitores
    const percentual_dilma = (votos_Dilma * 100) / numero_eleitores 
    const percentual_ciro = (votos_Ciro * 100) / numero_eleitores
    const percentual_outros = (votos_outros * 100) / numero_eleitores
    const percentual_indeciso = (votos_indeciso * 100) / numero_eleitores
    const percentual_branco = (votos_brancos * 100) / numero_eleitores

    console.log(`TOTAL ELEITORES: ${numero_eleitores}`)
    console.log(`Serra: ${percentual_serra}`)
    console.log(`Dilma: ${percentual_dilma}`)
    console.log(`Ciro: ${percentual_ciro}`)
    console.log(`Outros: ${percentual_outros}`)
    console.log(`Indeciso: ${percentual_indeciso}`)
    console.log(`Brancos: ${percentual_branco}`)

    if(segundo_turno(votos_Serra, votos_Dilma , votos_Ciro)){
        console.log(`Teremos Segundo Turno`)
    }
    else{
        console.log(`Nao Teremos Segundo Turno`)
    }
    
}
main()

function segundo_turno(serra, dilma, ciro){
    if(serra === ciro || serra === dilma || ciro === ciro){
        return true
    }
    else{
        return false
    }
}