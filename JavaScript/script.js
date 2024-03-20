const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle('open');
  const isOpen = dropdownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

  if (isOpen) {
    dropdownMenu.style.height = dropdownMenu.scrollHeight + 'px';
    dropdownMenu.style.transition = "200ms"
  } else {
    dropdownMenu.style.transition = "200ms"
    dropdownMenu.style.height = '0';
  }
})
  


/*barra colores*/
document.addEventListener('DOMContentLoaded', function () {
  const pixelBar = document.querySelector('.pixel-bar');
  const pixels = [];

  // crear los pixeles
  for (let i = 0; i < screen.width / 10; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixels.push(pixel);
    pixelBar.appendChild(pixel);
  }

  // Cambiar colores cada 3 segundos
  setInterval(function () {
    pixels.forEach(function (pixel) {
      const red = Math.floor(Math.random() * 206) + 50;
      const green = Math.floor(Math.random() * 206) + 50;
      const blue = Math.floor(Math.random() * 206) + 50;
      const color = `rgb(${red},${green},${blue})`;
      pixel.style.backgroundColor = color;
    });
  }, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
  const pixelBar2 = document.querySelector('.pixel-bar2');
  const pixels2 = [];

  // Crear 20 píxeles
  for (let i = 0; i < screen.width / 10; i++) {
    const pixel2 = document.createElement('div');
    pixel2.classList.add('pixel2');
    pixels2.push(pixel2);
    pixelBar2.appendChild(pixel2);
  }

  // Cambiar colores cada 3 segundos
  setInterval(function () {
    pixels2.forEach(function (pixel2) {
      const red = Math.floor(Math.random() * 206) + 50;
      const green = Math.floor(Math.random() * 206) + 50;
      const blue = Math.floor(Math.random() * 206) + 50;
      const color = `rgb(${red},${green},${blue})`;
      pixel2.style.backgroundColor = color;
    });
  }, 3000);
});



//popup login

const open = document.getElementById('actionBtn');
const popup = document.getElementById('login');
const close = document.getElementById('close');

open.addEventListener('click', () => {
popup.classList.add('show');  
});

close.addEventListener('click', () => {
  popup.classList.remove('show');
});

//


const open2 = document.getElementById('actionBtn2');
const popup2 = document.getElementById('login');
const close2 = document.getElementById('close');

open2.addEventListener('click', () => {
popup.classList.add('show');  
});

close2.addEventListener('click', () => {
  popup.classList.remove('show');
});


//cookies
document.addEventListener("DOMContentLoaded", function () {
  var cookiePopup = document.getElementById("cookie-popup");
  var acceptCookiesButton = document.getElementById("accept-cookies");

  // Muestra el popup después de 1 segundos de carga de la página
  setTimeout(function () {
      cookiePopup.style.display = "block";
  }, 1000);

  // Manejador de eventos para el botón de aceptar cookies
  acceptCookiesButton.addEventListener("click", function () {
      // Oculta el popup
      cookiePopup.style.display = "none";
  });
});

emailText = document.getElementById("email").value;
lineaContrasena = document.getElementById("correctContrasena")
botonContrasena = document.getElementById("btnContrasena");

botonContrasena.addEventListener("click", function(){
  
lineaContrasena.style.visibility = "visible";

})

document.addEventListener("DOMContentLoaded", function() {
  let botonDescargar = document.getElementById('installRep');
  botonDescargar.addEventListener('click', function() {
      let url = "../media/reproductor.rar";
      
      let enlace = document.createElement('a');
      enlace.href = url;
      enlace.download = 'reproductor.rar';
      
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
  });
});



