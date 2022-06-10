import { print,input } from "../io_utils.js";

function main(){
    let canal;

    let audiencia_total = 0
    let audiencia_canal_2 = 0;
    let audiencia_canal_4 = 0;
    let audiencia_canal_5 = 0;
    let audiencia_canal_7 = 0;
    let audiencia_canal_10 = 0;

    while(canal != 0){

        canal = Number(input("Canal: "))
        
        if(canal === 2){
            audiencia_canal_2++;
        }
        else if(canal === 4){
            audiencia_canal_4++;
        }
        else if(canal === 5){
            audiencia_canal_5++;
        }
        else if(canal === 7){
            audiencia_canal_7++;
        }
        else if(canal === 10){
            audiencia_canal_10++;
        }

        audiencia_total++;
    }

    const percentual2 = calcular_percentual(audiencia_total,audiencia_canal_2);
    const percentual4 = calcular_percentual(audiencia_total,audiencia_canal_4);
    const percentual5 = calcular_percentual(audiencia_total,audiencia_canal_5);
    const percentual7 = calcular_percentual(audiencia_total,audiencia_canal_7);
    const percentual10 = calcular_percentual(audiencia_total,audiencia_canal_10);


    print(`TOTAL: ${audiencia_total - 1}`);
    print(`CANAL 2: ${percentual2.toFixed(2)} %`);
    print(`CANAL 4: ${percentual4.toFixed(2)} %`);
    print(`CANAL 5: ${percentual5.toFixed(2)} %`);
    print(`CANAL 7: ${percentual7.toFixed(2)} %`);
    print(`CANAL 10: ${percentual10.toFixed(2)} %`);
}
main()

function calcular_percentual(total, canal){
    return (canal * 100) / total;
}