const botonAbrirMenu = document.querySelector('.header-menu')
const headerNavegacion = document.querySelector('.header-navegacion')
const botonCerrarMenu = document.querySelector('.cerrar-menu')


botonAbrirMenu.addEventListener('click', function(){
  headerNavegacion.classList.toggle('menu')
})

botonCerrarMenu.addEventListener('click', function(){
  headerNavegacion.classList.toggle('menu')
})

// EFECTO DE TIPEO
const elementoEfectoTipeo = document.querySelector('.efectoTipeo')

let text = 'Haz que tu interior sea mas minimalista y moderno'
//console.log(text.length); //cantidad de caracteres que hay en la variable text


let indice = 0

function tipea(){
  if(indice<text.length){
    elementoEfectoTipeo.textContent = elementoEfectoTipeo.textContent + text.charAt(indice)
    // elementoEfectoTipeo.textContent += text.charAt(indice)
    
    indice++

    setTimeout(tipea, 80);

  }
}


tipea()

//CARRUSEL
const imagenes = [
  "imagenes/image-experiencias.webp",
  "https://i5.walmartimages.com/seo/Velvet-Living-Room-Couch-Comfy-3-Seater-Sofa-with-4-Metal-Legs-Button-Tufted-Backrest-Upholstered-Sofa-Couch-for-Bedroom-Office-Apartment-Black_6e18fd3d-add7-4bd9-9f02-0381debfbaa7.96920e4554666fa8239f0737b267bf5b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  "https://m.media-amazon.com/images/I/91HdTKCs8-L._AC_UF894,1000_QL80_.jpg"
]

const botonSiguiente = document.querySelector('.boton-siguiente')
const botonAnterior = document.querySelector('.boton-anterior')
const imagen = document.querySelector('.imagen-carrusel')

let imagenActual = 0

botonAnterior.addEventListener('click', function() {

  imagenActual = imagenActual - 1

  if (imagenActual <= -1) {
    imagenActual = imagenes.length - 1
  }

  imagen.src = imagenes[imagenActual]

})

botonSiguiente.addEventListener('click', function() {

  imagenActual = imagenActual + 1

  if (imagenActual > imagenes.length - 1) {
    imagenActual = 0
  }

  imagen.src = imagenes[imagenActual]

})


// FORMULARIO
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactanos');


  const name = document.getElementById('contact-name');
  const errorName = document.getElementById('error-name')

  const email = document.getElementById('contact-email')
  const errorEmail = document.getElementById('error-email')
  
  
  
  function esCorreoInvalido(email) {
        return email.indexOf('@') === -1 || email.indexOf('.') === -1;
  }


  form.addEventListener('submit', function(e){
    let valid = true;

    //Name validation
    if(!name.value.trim()){
      errorName.textContent = 'El nombre es requerido'
      valid = false
    } else if (name.value.trim().length<3){
      errorName.textContent = 'El nombre debe tener al menos 3 caracteres'
      valid = false
    } else if (name.value.trim().length>50) {
      errorName.textContent = 'El nombre no debe exceder de 50 caracteres'
      valid = false
   } else {
    errorName.textContent = ''
   }

   //Email validation
   if(!email.value.trim()){
      errorEmail.textContent = 'El correo es requerido'
      valid = false;
    }else if(esCorreoInvalido(email.value)){
      errorEmail.textContent = 'Ingresa un correo valido'
      valid = false;
    } else {
      errorEmail.textContent = '';
    }




    if(!valid){
    e.preventDefault()
    }
  })


})
