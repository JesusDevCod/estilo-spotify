const topBar = document.querySelector('.topbar');

// Cambiar opacidad de scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        topBar.classList.add('transparent');
    }
    else {
        topBar.classList.remove('transparent');
    }
});

//Nueba variable para lamacenar altura del TopBar
let topbarHeight = topBar.offsetHeight;
//Añadimos un paddingTop basado en la altura al main-content o el contenido principal
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;

/*************************** */
/*       BOTON PALY          */
const containerConcentracion = document.querySelectorAll('.card-concentracion');
const containerSpotifyPlayList = document.querySelectorAll('.card-spotify-playlist');
// Funcion que se va a repetir
const createButtom = card => {
    //Crear el botón
   const buttom = document.createElement('buttom');
   buttom.innerHTML = '<i class="fa-solid fa-play"></i>';
   
   //Agregar el botón al elemnento hijo
   card.appendChild(buttom);
   
   //Ocultar el botón incialmente
   buttom.style.display = 'none';
   buttom.classList.add('btn-play');
   
   // Agregar un evento de hover o  este elemento
   //Se necesita cuando el mouse entra y cuando sale 
   card.addEventListener('mouseover', () => {
       buttom.style.display = 'block';
   
   });
   
   card.addEventListener('mouseout', () => {
       buttom.style.display = 'none';
   });

};

//usamos la funcion en las dos filas de contenedores
containerConcentracion.forEach(card => {
    createButtom(card);
});

containerSpotifyPlayList.forEach(card => {
    createButtom(card);
});