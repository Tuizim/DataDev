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
    
    const copy = clone.getElementById('copy-btn');
    copy.id= 'copy-btn-'+name;
    
    document.getElementById('data-create-'+fatherTitle).appendChild(clone);
}

export function dataClear(){
    document.getElementById('data-create-Documentos').innerHTML="";
}

titleCreate({ 
    title: 'Documentos', 
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
    </svg>
    ` });
titleCreate({ 
    title: 'Telefone', 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
    ` })
