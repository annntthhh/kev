document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Contador ---
    // Ajusta el año si es necesario (ej: 2023 o 2024)
    const fechaInicio = new Date('2024-03-27'); 
    const hoy = new Date();
    
    const diferenciaMilisegundos = hoy - fechaInicio;
    const diasTranscurridos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    
    document.getElementById('dias-count').innerText = diasTranscurridos;

    // --- Lógica del Botón ---
    const btn = document.getElementById('btnCorazon');
    const extra = document.getElementById('extra');

    btn.addEventListener('click', () => {
        extra.classList.remove('hidden');
        btn.style.display = 'none';
    });
});
