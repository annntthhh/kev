const btn = document.getElementById('btnCorazon');
const extra = document.getElementById('extra');
const titulo = document.getElementById('titulo');

btn.addEventListener('click', () => {
    extra.classList.remove('hidden');
    titulo.innerText = "Te extraño";
    btn.style.display = 'none';
});
