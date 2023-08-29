document.addEventListener("DOMContentLoaded", function() {
    const duplasContainer = document.getElementById("duplasContainer");
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    const nomes = Object.values(usuarios);

    shuffleArray(nomes); // Embaralhar a lista de nomes

    for (let i = 0; i < nomes.length; i++) {
        const pessoaDaEsquerda = nomes[i];
        const pessoaDaDireita = nomes[(i + 1) % nomes.length]; // Circula de volta ao primeiro nome após o último

        const dupla = document.createElement("div");
        dupla.classList.add("dupla-box");
        dupla.textContent = `${pessoaDaEsquerda} --> ${pessoaDaDireita}`;
        duplasContainer.appendChild(dupla);
    }
});

// Função para embaralhar um array usando o algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
