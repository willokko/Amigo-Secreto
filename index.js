const mainButton = document.getElementById('mainButton');
const sortearButton = document.getElementById('sortearButton');
const esvaziarButton = document.getElementById('esvaziarButton'); // Adicione esse elemento no HTML

mainButton.addEventListener("click", function() {
    window.location.href = "creation.html";
});

sortearButton.addEventListener("click", function() {
    window.location.href = "sorteio.html";
});

esvaziarButton.addEventListener("click", function() {
    localStorage.removeItem("usuarios"); // Remove a lista de nomes
    window.location.reload(); // Recarrega a página para mostrar a lista vazia
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("nomeContainer");
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    for (const email in usuarios) {
        const nome = usuarios[email];
        const nomeBox = document.createElement("div");
        nomeBox.classList.add("nome-box");
        nomeBox.textContent = nome;
        container.appendChild(nomeBox);
    }

    if (Object.keys(usuarios).length > 2) {
        sortearButton.style.display = "block";
    }

    // Mostra o botão "Esvaziar" somente se houver nomes na lista
    if (Object.keys(usuarios).length > 0) {
        esvaziarButton.style.display = "block";
    }
});
