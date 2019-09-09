document.getElementById("titulo").innerHTML = "Hello World";

alert(2 + 2);

var form = document.getElementById("formNome")
var nome = document.getElementById("nomeCompleto");
var caracter = document.getElementById("nomeCompleto").value;
var quantidadeCaracter = caracter.length;

form.addEventListener("submit", function (e) {
    // alerta o valor do campo
    alert("O Nome Completo é: " + nome.value);
    alert("Qtd. de Caracteres do nome: " + quantidadeCaracter)
    // impede o envio do form
    e.preventDefault();
});
