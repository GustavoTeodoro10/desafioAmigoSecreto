let amigos = [];

function adicionarAmigo() {
    let adicionar = document.getElementById('amigo');
    let nome = adicionar.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;}

    amigos.push(nome);
    atualizarLista();
    adicionar.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let nome of amigos) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos === '') {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `Amigo Secreto: ${sorteado} !`;
}