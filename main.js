/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
function convert() {
    const binary = document.getElementById('b-input').value;
    if (binary === '') return alert('Por favor, insira um número binário');
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Por favor, insira um número binário');
    });
    const decimal = parseInt(binary, 2);
    document.getElementById('d-input').value = decimal;
    return true;
}
