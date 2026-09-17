const dados = [];

const foto = document.getElementById("foto");
const mensagem = document.getElementById("mensagem");
const cor = document.getElementById("cor");
const paragrafo = document.getElementById("paragrafo");
const cadastro = document.getElementById("cadastro");
const botaoCadastro = document.getElementById("botaoCadastro");

function cadastrar() {
    cadastro.classList.remove('dados');
    botaoCadastro.classList.add('escondido');    
}

function clicou() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var data = document.getElementById("data").value;

    var infos = {
        nome,
        senha,
        data,
    }

    dados.push(infos);

    if (nome && senha && data) {
        document.getElementById("nome").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("data").value = "";

        cadastro.classList.add('escondido');
        cor.classList.remove('escondido');
        mensagem.classList.remove('escondido');
        foto.classList.remove('escondido');
        paragrafo.classList.remove('escondido');

        alert("Olá " + nome + "!\n" +
            "Senha: " + senha + "\n" +
            "Data: " + data + "\n" +
            "Seus dados foram salvos com sucesso.");
    } else {
        alert("Por favor, preencha todos os campos antes de enviar!");
    }

}

var seletorCor = document.getElementById("cor");
seletorCor.addEventListener("input", function () {
    document.body.style.backgroundColor = seletorCor.value;
})