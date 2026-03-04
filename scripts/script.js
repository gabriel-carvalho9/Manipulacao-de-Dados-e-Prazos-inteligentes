function gerarTicket() {
    const nomeRaw = document.getElementById("input-nome").value;
    const nomeLimpo = nomeRaw.toUpperCase().trim().split(" ");
    const urgenciaRaw = document.getElementById("urgencia").value;

    // Validação do nome
    if (nomeRaw.trim().length < 3) {
        alert("Erro: Digite um nome com pelo menos 3 caracteres!");
        return;
    }

    // Formatação
    const primeiroNome = nomeLimpo[0];
    const ultimoNome = nomeLimpo[nomeLimpo.length - 1];
    const nomeFormatado = primeiroNome + " " + ultimoNome;

    // Validação da urgência
    if (urgenciaRaw === "") {
        alert("Por favor, selecione um nível de urgência.");
        return;
    }

    // Datas
    const dataAtual = new Date();
    const dataPrazo = new Date();

    const diasAdicionais = parseInt(urgenciaRaw);
    dataPrazo.setDate(dataAtual.getDate() + diasAdicionais);

    // Inserindo na tela 
    document.getElementById("out-nome").innerText = nomeFormatado;
    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString('pt-BR');

    document.getElementById("ticket-resultado").style.display = "block";
}