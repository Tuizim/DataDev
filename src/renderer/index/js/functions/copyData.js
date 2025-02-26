import "../library/toast.js"
export function copiarDados(id){
    const input = document.getElementById(id);
    window.api.copyText(input.innerText)
    toastr.success("Copiado para a área de transferencia!","Copiado!")
}