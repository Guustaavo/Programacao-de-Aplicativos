const produtos = [
    { id: 1, nome: "Headset Gamer", preco: 150, estoque: 5, emoji: "🎧" },
    { id: 2, nome: "Teclado Mecânico", preco: 250, estoque: 3, emoji: "⌨️" },
    { id: 3, nome: "Mouse Gamer", preco: 100, estoque: 10, emoji: "🖱️" },
    { id: 4, nome: "Controle Gamer", preco: 200, estoque: 0, emoji: "🎮" },
    { id: 5, nome: "Monitor Gamer", preco: 1200, estoque: 2, emoji: "🖥️" },
    { id: 6, nome: "Notebook", preco: 3500, estoque: 4, emoji: "💻" }
];

let carrinho = [];

function exibirProdutos() {
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";

    produtos.forEach(produto => {
        lista.innerHTML += `
            <div class="card-produto">
                <div class="produto-imagem">${produto.emoji}</div>
                <h3>${produto.nome}</h3>
                <p class="preco">${formatarPreco(produto.preco)}</p>
                <p class="estoque">Estoque: ${produto.estoque} unidades</p>
                <button class="btn-adicionar" onclick="adicionarItemCarrinho(${produto.id})" ${produto.estoque === 0 ? "disabled" : ""}>
                    ${produto.estoque === 0 ? "ESGOTADO" : "ADICIONAR"}
                </button>
            </div>
        `;
    })
}

function formatarPreco(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function adicionarItemCarrinho(id) {
    const produto = produtos.filter(produto => produto.id === id)[0];
    if (produto === null) return;

    // VALIDAÇÕES
    carrinho.push({ id: produto.id, quantidade: 1 })
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = `
            <div class="carrinho-vazio">
                <p></p>
                <p>Seu carrinho está vazio!</p>
            </div>
        `;
    }
}

exibirProdutos();
atualizarCarrinho();