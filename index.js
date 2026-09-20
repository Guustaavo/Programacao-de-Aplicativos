const dados = [];

const main = document.getElementById("divMain")
const menuInicial = document.getElementById("divMenuInicial");
const cadastro = document.getElementById("divCadastro");
const login = document.getElementById("divLogin");

function cadastrar() {
    cadastro.classList.remove("escondido");
    menuInicial.classList.add("escondido");
}

function entrar() {
    login.classList.remove("escondido");
    menuInicial.classList.add("escondido");
}

function cadastrou() {
    var nome = document.getElementById("inNomeCadastro").value;
    var senha = document.getElementById("inSenhaCadastro").value;
    var data = document.getElementById("inData").value;

    var infos = {
        nome,
        senha,
        data,
    }

    dados.push(infos);

    if (nome && senha && data) {
        document.getElementById("inNomeCadastro").value = "";
        document.getElementById("inSenhaCadastro").value = "";
        document.getElementById("inData").value = "";

        cadastro.classList.add('escondido');
        main.classList.remove('escondido');

        alert("Olá " + nome + "!\n" +
            "Senha: " + senha + "\n" +
            "Data: " + data + "\n" +
            "Seus dados foram salvos com sucesso.");
    } else {
        alert("Por favor, preencha todos os campos antes de enviar!");
    }
}

function entrou() {
    var nome = document.getElementById("inNomeLogin").value;
    var senha = document.getElementById("inSenhaLogin").value;

    dados.forEach((conta) => {
        if (nome == conta.nome && senha == conta.senha) {
            document.getElementById("inNomeLogin").value = "";
            document.getElementById("inSenhaLogin").value = "";

            login.classList.add('escondido');
            main.classList.remove('escondido');

            alert("Olá " + nome + "!\n" +
                "Senha: " + senha + "\n" +
                "Data do cadastro: " + conta.data + "\n" +
                "Log in realizado com sucesso.");
                return;
        }
    })
    return;
    alert("Dados incorretos.");
}

function voltou() {
    menuInicial.classList.remove("escondido");
    cadastro.classList.add("escondido");
    login.classList.add("escondido");
    main.classList.add("escondido");

    document.getElementById("inNomeCadastro").value = "";
    document.getElementById("inSenhaCadastro").value = "";
    document.getElementById("inData").value = "";

    document.getElementById("inNomeLogin").value = "";
    document.getElementById("inSenhaLogin").value = "";
}

var seletorCor = document.getElementById("inCor");
seletorCor.addEventListener("input", function () {
    document.body.style.backgroundColor = seletorCor.value;
});