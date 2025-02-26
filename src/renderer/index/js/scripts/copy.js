import { copiarDados } from '../functions/copyData.js'
document.addEventListener('click',(event)=>{
    const button = event.target.closest("button");
    if (button && button.id.startsWith("copy-btn-")){
        const id= button.id.replace("copy-btn-","")
        copiarDados("input-"+id);
    }
})