export function gerarCPF(formatado = true) {
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
    return formatado 
        ? `${cpf.slice(0, 3).join('')}.${cpf.slice(3, 6).join('')}.${cpf.slice(6, 9).join('')}-${cpf.slice(9, 11).join('')}`
        : cpf.join('');
}

let teste =gerarCPF()