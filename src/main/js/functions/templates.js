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
titleCreate({ 
    title: 'Endereço', 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 395.71 395.71" xml:space="preserve">
<g>
	<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
</g>
</svg>
    ` })