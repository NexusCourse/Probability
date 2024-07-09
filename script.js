function scrollToElement(elementSelector, instance = 0) {
   
    const elements = document.querySelectorAll(elementSelector);
    
    if (elements.length > instance) {
    
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

function abrirCu1() {
    window.location.href = "cursos/curso1/cu1.html";
  }
  function abrirCu2() {
    window.location.href = "cursos/curso2/cu2.html";
  }

  function abrirCu3() {
    window.location.href = "cursos/curso3/cu3.html";
  }
  function abrirCu4() {
    window.location.href = "cursos/curso4/cu4.html";
  }

  function irAContenido() {
    // Obtiene la URL de la referencia dentro del elemento <li>
    var urlContenido = document.getElementById('link2').querySelector('a').getAttribute('href');
    
    // Redirige a la URL obtenida
    window.location.href = urlContenido;
  }