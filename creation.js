const cadastrarButton = document.getElementById('cadastrarButton');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cadastrardnv = document.getElementById('cadastrardnv')

cadastrarButton.addEventListener("click", function() { 
    if (nome.value === "" || email.value === "")  {
        alert("Por favor, preencha os dados");
    } 
    else {
        const novoNome = nome.value;
        const novoEmail = email.value;

        // Obter os dados do armazenamento local (se existirem)
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

        // Verificar se o email já está cadastrado
        if (usuarios[novoEmail]) {
            alert("Este email já está cadastrado.");
        } else {
            // Verificar se o nome já está cadastrado
            const nomesCadastrados = Object.values(usuarios);
            if (nomesCadastrados.includes(novoNome)) {
                alert("Este nome já está cadastrado.");
            } else {
                // Adicionar o novo usuário ao objeto
                usuarios[novoEmail] = novoNome;

                // Salvar os dados no armazenamento local
                localStorage.setItem("usuarios", JSON.stringify(usuarios));

                window.location.href = "index.html";
            }
        }
    }
});

cadastrardnv.addEventListener("click", function() { 
    if (nome.value === "" || email.value === "")  {
        alert("Por favor, preencha os dados");
    } 
    else {
        const novoNome = nome.value;
        const novoEmail = email.value;

        // Obter os dados do armazenamento local (se existirem)
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

        // Verificar se o email já está cadastrado
        if (usuarios[novoEmail]) {
            alert("Este email já está cadastrado.");
        } else {
            // Verificar se o nome já está cadastrado
            const nomesCadastrados = Object.values(usuarios);
            if (nomesCadastrados.includes(novoNome)) {
                alert("Este nome já está cadastrado.");
            } else {
                // Adicionar o novo usuário ao objeto
                usuarios[novoEmail] = novoNome;

                // Salvar os dados no armazenamento local
                localStorage.setItem("usuarios", JSON.stringify(usuarios));

                nome.value = ""
                email.value = ""
            }
        }
    }
});