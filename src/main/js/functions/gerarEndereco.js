
export async function gerarEnderecoAleatorioBrasil() {

    const url = `https://randomuser.me/api/?nat=br`;

    try {
        const response = await fetch(url);
        let data = await response.json();
        return data.results[0].location;
    } catch (error) {
        return null
    }
}
