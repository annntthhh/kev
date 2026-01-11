document.addEventListener('DOMContentLoaded', () => {
    // 1. Contador de días (Desde el 27 de Marzo de 2024)
    const fechaInicio = new Date('2024-03-27'); 
    const hoy = new Date();
    const diferenciaMilisegundos = hoy - fechaInicio;
    const diasTranscurridos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    document.getElementById('dias-count').innerText = diasTranscurridos;

    // 2. Botón de mensaje extra
    const btn = document.getElementById('btnCorazon');
    const extra = document.getElementById('extra');
    btn.addEventListener('click', () => {
        extra.classList.remove('hidden');
        btn.style.display = 'none';
    });

    // 3. Generador de corazones flotantes 💗
    function crearCorazon() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💗'; // Aquí está tu corazón pulsante
        
        // Posición horizontal aleatoria
        heart.style.left = Math.random() * 100 + "vw";
        
        // Tamaño aleatorio
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        
        // Velocidad aleatoria (entre 4 y 8 segundos)
        heart.style.animationDuration = Math.random() * 4 + 4 + "s";
        
        document.body.appendChild(heart);

        // Borrar el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    // Crear un corazón cada 500ms
    setInterval(crearCorazon, 500);
});
