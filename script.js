inverteLetras = () => {

    const text = document.getElementById('i_txt');
    const lowerText = text.value.toLowerCase();

    // Dividir a frase em palavras
    const palavras = lowerText.split(' ');

    // Iterar sobre cada palavra e inverter a ordem das letras
    const palavrasInvertidas = palavras.map(palavra => palavra.split('').reverse().join(''));

    // Juntar as palavras invertidas novamente em uma única string
    return palavrasInvertidas.join(' ');
};
executar = () => {
    const respost = document.getElementById('i_response');
    const input = document.getElementById('i_txt');
    const textoInvertido = inverteLetras();
    respost.innerHTML = (`${textoInvertido}!`);
    input.value = "";
}