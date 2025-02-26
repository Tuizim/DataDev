export function copiarDados(id){
    const input = document.getElementById(id);
    window.api.copyText(input.innerText)
}