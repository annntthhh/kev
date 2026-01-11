// Espera a que cargue el contenido
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCorazon');
    const extra = document.getElementById('extra');

    if (btn) {
        btn.addEventListener('click', () => {
            // Muestra el mensaje oculto
            extra.classList.remove('hidden');
            // Oculta el botón suavemente
            btn.style.display = 'none';
        });
    }
});
