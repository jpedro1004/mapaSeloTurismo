function openModalMapa() {
    var modal = document.getElementById("modalMapa");
    modal.style.display = "block";
    
    // Certifique-se de que o mapa foi inicializado
    if (map) {
        setTimeout(function() {
            map.invalidateSize(); // Recalcula o tamanho do mapa
        }, 200); // Pequeno atraso para garantir que o modal esteja completamente aberto
    }
}

function closeModalMapa() {
    var modal = document.getElementById("modalMapa");
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    var modal = document.getElementById("modalMapa");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}