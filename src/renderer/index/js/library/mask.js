import "../../../../assets/js/IMask.js";

const maskCPF = {
    mask: '000.000.000-00'
};
const maskRG = {
    mask:'00.000.000-0'
}
const tel = {
    mask:'(00)00000-000'
}
const cep = {
    mask:'00000-000'
}
export const maskedCPF = IMask.createMask(maskCPF);
export const maskedRG = IMask.createMask(maskRG);
export const maskedTel = IMask.createMask(tel);
export const maskedCep = IMask.createMask(cep);
//mascara.resolve
//mascara.val
