//Marcar boton correspondiente a la seccion a medida que scrolleo
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

//Agregar clase scrolled al nav cuando se scrollea
window.addEventListener('scroll', function() {
    //Detecta automaticamente el id
    //const nav = document.getElementById('nav');
    if (window.scrollY > 1) {
        nav.classList.add('scrolled');
        nav.classList.remove('bg-[#020402]');
    }
    else {
        nav.classList.remove('scrolled');
        nav.classList.add('bg-[#020402]');
    }
});

//Scroll de secciones
let sections = document.querySelectorAll('section');
let navBtn = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        let threshold = 100; // Umbral adicional para activar el botón antes de alcanzar la sección

        if (top >= offset - threshold && top < offset + height - threshold) {
            navBtn.forEach(btn => {
                btn.classList.remove('active');
                document.querySelector('nav a[id="nav-' + id + '"]').classList.add('active');
            });
        }
    });
}
