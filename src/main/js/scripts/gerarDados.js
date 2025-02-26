import { dataClear, dataCreate, telClear, enderecoClear } from "../functions/templates.js";
import { gerarCPF, gerarRG } from "../functions/gerarDocs.js"
import { gerarTelefone } from "../functions/gerarTel.js";
import { gerarEnderecoAleatorioBrasil } from "../functions/gerarEndereco.js";
import { maskedCep } from "../library/mask.js";

document.getElementById('update-info-Documentos').addEventListener('click', function () {
    const maskCheck = document.getElementById('mask-check').checked;
    dataClear()
    dataCreate({ name: 'CPF:', info: gerarCPF(maskCheck), fatherTitle: 'Documentos' })
    dataCreate({ name: 'RG:', info: gerarRG(maskCheck), fatherTitle: 'Documentos' })
});
document.getElementById('update-info-Telefone').addEventListener('click', function () {
    const maskCheck = document.getElementById('mask-check').checked;
    telClear()
    dataCreate({ name: 'Tel:', info: gerarTelefone(maskCheck), fatherTitle: 'Telefone' })
});
document.getElementById('update-info-Endereço').addEventListener('click', async function () {
    enderecoClear();
    const endereco = await gerarEnderecoAleatorioBrasil()
    const maskCheck = document.getElementById('mask-check').checked;
    if (endereco == null) {
        dataCreate({ name: 'Sistema:', info: "Não foi possível gerar o endereço", fatherTitle: 'Endereço' })
        return;
    }
    let cidade = endereco.cidade;
    let estado = endereco.estado;
    let rua = endereco.rua;
    let cep = endereco.cep;
    maskedCep.resolve(cep)
    dataCreate({ name: 'Cidade:', info: cidade, fatherTitle: 'Endereço' })
    dataCreate({ name: 'Estado:', info: estado, fatherTitle: 'Endereço' })
    dataCreate({ name: 'Rua:', info: rua, fatherTitle: 'Endereço' })
    dataCreate({ name: 'Cep:', info: maskCheck ? maskedCep.value : cep, fatherTitle: 'Endereço' })

    let teste = window.api.getNames();
    console.log(teste)
})