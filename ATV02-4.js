class Carro {
    constructor(marca, modelo, ano, cor, kilometragem, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.kilometragem = kilometragem;
        this.valor = valor;
    }

    getValorFinal() {
        const anosUso = 2024 - this.ano;
        const kmMediaAnual = this.kilometragem / anosUso;

        if (kmMediaAnual <= 30000) {
            return this.valor * 1.1;
        } else if (kmMediaAnual <= 60000) {
            return this.valor * 1;
        } else {
            return this.valor * 0.9;
        }
    }
}

document.getElementById("Entrada").addEventListener("submit", function (event) {
    event.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const kilometragem = parseInt(document.getElementById("kilometragem").value);
    const valor = parseFloat(document.getElementById("valor").value);
    const carro = new Carro(marca, modelo, ano, cor, kilometragem, valor);
    const valorFinal = carro.getValorFinal();

    exibirCarro(carro, valorFinal);
});

function exibirCarro(carro, valorFinal) {
    const tabela = document.getElementById("dadoscarro");
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${carro.marca}</td>
      <td>${carro.modelo}</td>
      <td>${carro.ano}</td>
      <td>${carro.cor}</td>
      <td>${carro.kilometragem}</td>
      <td>${carro.valor}</td>
      <td>${2024 - carro.ano}</td>  
      <td>${carro.kilometragem / (2024 - carro.ano)}</td> 
      <td>${valorFinal}</td>
    `;

    tabela.appendChild(linha);
    document.getElementById("resultado").style.display = "block";
}
