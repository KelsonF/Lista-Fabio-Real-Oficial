import { input,print } from "../io_utils.js";

function calcularDuracao(horaInicio, minutoInicio, horaFinal, minutoFinal) {
    let difHora
    let difMinuto
                          
    if (horaFinal < horaInicio) difHora = (24 - horaInicio) + horaFinal
    else difHora = horaInicio - horaFinal

   
    if (minutoFinal < minutoInicio) {
        difMinuto = minutoInicio - minutoFinal
        difHora--;
    } else difMinuto = minutoFinal - minutoInicio

    return {
        horas: difHora,
        minutos: difMinuto
    }

}