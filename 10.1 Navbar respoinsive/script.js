document.getElementById('botonMenu').addEventListener('click', menuMovil);

function menuMovil() {
    console.log('funciona!');
    var ancla = document.getElementsByClassName('nav-enlace');
    for (let i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
    }
}