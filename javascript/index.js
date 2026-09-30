const dados = [];

const main = document.getElementById("profile");
const menuInicial = document.getElementById("divMenuInicial");
const cadastro = document.getElementById("modalCadastro");
const login = document.getElementById("modalLogin");

function cadastrar() {
    cadastro.classList.remove("escondido");
}

function entrar() {
    login.classList.remove("escondido");
}

function cadastrou() {
    var nome = document.getElementById("inNomeCadastro").value;
    var senha = document.getElementById("inSenhaCadastro").value;

    var infos = {
        nome,
        senha,
    }

    dados.push(infos);

    if (nome && senha) {
        document.getElementById("inNomeCadastro").value = "";
        document.getElementById("inSenhaCadastro").value = "";

        cadastro.classList.add('escondido');
        main.classList.remove('escondido');

        alert("Olá " + nome + "!\n" +
            "Senha: " + senha + "\n" +
            "Seus dados foram salvos com sucesso.");
    } else {
        alert("Por favor, preencha todos os campos antes de enviar!");
    }
}

function entrou() {
    var nome = document.getElementById("inNomeLogin").value;
    var senha = document.getElementById("inSenhaLogin").value;

    var entrou = false;
    dados.forEach((conta) => {
        if (nome == conta.nome && senha == conta.senha) {
            document.getElementById("inNomeLogin").value = "";
            document.getElementById("inSenhaLogin").value = "";

            login.classList.add('escondido');
            main.classList.remove('escondido');

            entrou = true;

            alert("Olá " + nome + "!\n" +
                "Login realizado com sucesso.");
            return;
        }
    })
    if (entrou == false) {
        document.getElementById("inNomeLogin").value = "";
        document.getElementById("inSenhaLogin").value = "";
        alert("Dados incorretos.");
    }
}

function voltou() {
    menuInicial.classList.remove("escondido");
    cadastro.classList.add("escondido");
    login.classList.add("escondido");
    main.classList.add("escondido");

    document.getElementById("inNomeCadastro").value = "";
    document.getElementById("inSenhaCadastro").value = "";

    document.getElementById("inNomeLogin").value = "";
    document.getElementById("inSenhaLogin").value = "";
}

var seletorCor = document.getElementById("inCor");
seletorCor.addEventListener("input", function () {
    document.body.style.backgroundColor = seletorCor.value;
});