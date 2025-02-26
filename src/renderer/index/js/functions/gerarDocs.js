import {maskedCPF,maskedRG} from "../library/mask.js"

export function gerarCPF(formated) {
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    function calcularDigito(cpfParcial) {
        let soma = 0;
        for (let i = 0; i < cpfParcial.length; i++) {
            soma += cpfParcial[i] * (cpfParcial.length + 1 - i);
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }
    let cpf = Array.from({ length: 9 }, () => random(10));
    cpf.push(calcularDigito(cpf));
    cpf.push(calcularDigito(cpf));
    cpf = cpf.join('');
    maskedCPF.resolve(cpf)
    return formated? maskedCPF.value : cpf;
}
export function gerarRG(formated) {
    let numeros = [];
    for (let i = 0; i < 8; i++) {
        numeros.push(Math.floor(Math.random() * 10));
    }
    let pesos = [2, 3, 4, 5, 6, 7, 8, 9];
    let soma = 0;
    for (let i = 0; i < 8; i++) {
        soma += numeros[i] * pesos[i];
    }
    let resto = soma % 11;
    let digitoVerificador = resto < 2 ? 0 : 11 - resto;
    let rg = numeros.join('')+digitoVerificador;
    maskedRG.resolve(rg)
    return formated?maskedRG.value:rg ;
}