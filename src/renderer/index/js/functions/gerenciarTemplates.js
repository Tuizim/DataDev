export function titleCreate({ title, svg }) {
    const template = document.getElementById('title-template');
    const clone = template.content.cloneNode(true);

    const titleElement = clone.querySelector('.name-title')
    titleElement.textContent = title;

    if (svg != null && svg != '') {
        const svgElement = clone.querySelector('.svg-title')
        svgElement.innerHTML  = svg;
    }
    const dataCreate = clone.getElementById('data-create');
    dataCreate.id= 'data-create-'+title;

    const genBtn = clone.getElementById('update-info');
    genBtn.id= 'update-info-'+title;

    document.getElementById('titles').appendChild(clone);
}
export function dataCreate({name,info,fatherTitle}){
    const template = document.getElementById('data-tamplate');
    const clone = template.content.cloneNode(true);

    const nameElement = clone.querySelector('.name-data')
    nameElement.textContent = name;

    const infoElement = clone.querySelector('.info-data')
    infoElement.textContent = info;
    infoElement.id=infoElement.id+'-'+name
    
    const copy = clone.getElementById('copy-btn');
    copy.id= 'copy-btn-'+name;
    
    document.getElementById('data-create-'+fatherTitle).appendChild(clone);
}
export function dataClear(){
    document.getElementById('data-create-Documentos').innerHTML="";
}
export function telClear(){
    document.getElementById('data-create-Telefone').innerHTML="";
}
export function enderecoClear(){
    document.getElementById('data-create-Endereço').innerHTML="";
}
