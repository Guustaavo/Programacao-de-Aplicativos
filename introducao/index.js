function clicou() {
    var nome = document.getElementById("nome").value;
    alert(nome);
}

var seletorCor = document.getElementById("cor");
seletorCor.addEventListener("input", function() {
    document.body.style.backgroundColor = seletorCor.value
})