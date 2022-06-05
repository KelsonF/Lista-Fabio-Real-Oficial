import { input,print } from "../io_utils.js";

function main(){
    let [matricula,nota1,nota2,nota3] = input("Dados Alunos: ").split(" ").map(Number);
    let media_final = 0;
    let aprovados = 0;
    let reprovados = 0;
    
    while(matricula !== 0){
        media_final = (nota1 * 2 + nota2 * 3 +nota3 * 5) / 10;
        print(`Matricula: ${matricula}`);
        print(`Media do aluno: ${media_final}`);

        if(media_final > 7){;
            aprovados++;
        }
        else{
            reprovados++;
        }

        [matricula,nota1,nota2,nota3] = input("Dados Alunos: ").split(' ').map(Number);
    }

    print(`APROVADOS: ${aprovados}`)
    print(`REPROVADOS: ${reprovados}`)
}
main()