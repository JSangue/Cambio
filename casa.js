document.addEventListener("DOMContentLoaded", function() {
    let dinheiro = document.getElementById("valor");
    const dolar = 70;
    const resultado = document.getElementById("resultado");

    dinheiro.addEventListener("input", function() {
        const trocado = parseFloat(dinheiro.value);
        const result = trocado * dolar;
        resultado.value = result;
    });
});