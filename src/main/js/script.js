import "./dropdown.js";
import{dataClear, dataCreate,titleCreate} from "./templates.js";
import "./alert.js";
import{gerarCPF} from "./GerarDocs.js"

document.getElementById('update-info-Documentos').addEventListener('click',function(){
    dataClear();
    dataCreate({name:'CPF:',info:gerarCPF(),fatherTitle:'Documentos'})
});
