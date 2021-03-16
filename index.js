const toggle = document.getElementById("toggle");
const closed = document.getElementById("close");
const botonEn = document.getElementById("en-container");
const botonEs = document.getElementById("es-container");
const ulDesktop = document.getElementById("ul-desktop");
const ulMovil = document.getElementById("ul-mobile");
const enContainer = document.getElementById("en-container");
const esContainer = document.getElementById("es-container");
const bodyDesktop = document.getElementById("body");
const contenidoportfolio1 = document.getElementById('contenido-item-1');
const contenidoportfolio2 = document.getElementById('contenido-item-2');
const tituloprojects = document.getElementById('projects-1');
const contenidoContact = document.getElementById('contact');



//section
const aboutMe = document.getElementById("about-me");

// content about-me
const aboutMeContentEn = `<div class="titulo-about-me">
<div>CRISTIAN DANIEL HERRERA</div>
<div>Web Developer/Programmer</div>
</div>
<div class="curriculum">
<div class="cv1">
  <div class="cv1-container">
    <div class="h3-datospersonales"><h3>PERSONAL INFORMATION</h3></div>
    <div class="contenido-datospersonales">
      <div><strong>Name:</strong>Cristian Daniel Herrera</div>
      <div><strong>E-mail:</strong>cristian.daniel.herrera@hotmail.com</div>
      <div><strong>linkedin:</strong><a style="color: #fff;" href="https://ar.linkedin.com/in/cristian-daniel-herrera-7a2794a9">https://ar.linkedin.com/in/cristian-daniel-herrera-7a2794a9</a></div>
      <div><strong>GitHub:</strong><a style="color: #fff;" href="https://github.com/cristian-daniel88 ">https://github.com/cristian-daniel88 </a></div>
    </div>
    <div class="h3-perfil"><h3>PROFILE</h3></div>
    <div class="contenido-perfil">
      After working as a professional musician for several years, I am now looking to start a new career as a Programmer and Web Developer. I am an enthusiastic person who is motivated and willing to learn new skills and work as part of a dedicated team. I have recently completed an introductory Programming course and am in the process of completing an Advanced Javascript course. I'm seeking a role where I can apply these newfound skills in a dynamic, practical way.  
     
    </div>
    <div class="h3-lenguajes"><h3>LANGUAGES & FRAMEWORKS <em style="font-size: 15px;">(currently studying ...)</em></h3></div>
    <div class="contenido-lenguajes">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>NodeJS</li>
        <li>Git/GitHub</li>
        <li>Linux</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
    </div>
    

  </div>
</div>
<div class="cv2">
  <div class="cv2-container">
    
    <div class="h3-educacion"><h3>EDUCATION</h3></div>
    <div class="contenido-educacion">
      <ul>
        <li>
          Advanced Web Development (with Javascript and relative frameworks)
             <p>August 2020 – Present, NucBA</p>
        </li>
        <li>
           Web Development for Beginners (Layout and Starter Javascript course) 
          <p>Mayo 2020 - Agosto 2020, UTN</p>
        </li>
        <li>
          Bachelor's Degree in Musictherapy 
          <p>March 2011 – Present, UBA, Facultad de Psicología</p>
        </li>
        <li>
          SADEM (School of Contemporary Music)
          <p>March 2008 - December 2012, Escuela de Música Popular</p>
        </li>
        <li>
          CENS 57 (High School)
          <p>March 2008 - December 2010</p>
        </li>
      </ul>
    </div>
    <div class="h3-educacion"><h3>SPOKEN LANGUAGES</h3></div>
    <div class="contenido-idioma">
      <ul>
        <li>Spanish | Native (oral/written)</li>
        <li>English | Pre-Intermediate (oral/written)</li>
      </ul>
    </div>
    
  </div>
</div>
</div>`;

const aboutMeContentEs = `<div class="titulo-about-me">
<div>CRISTIAN DANIEL HERRERA</div>
<div>Desarrollador/Programador</div>
</div>
<div class="curriculum">
<div class="cv1">
  <div class="cv1-container">
    <div class="h3-datospersonales"><h3>DATOS PERSONALES</h3></div>
    <div class="contenido-datospersonales">
      <div><strong>Nombre Completo:</strong>Cristian Daniel Herrera</div>
      <div><strong>E-mail:</strong>cristian.daniel.herrera@hotmail.com</div>
      <div><strong>linkedin:</strong><a style="color: #fff;" href="https://ar.linkedin.com/in/cristian-daniel-herrera-7a2794a9">https://ar.linkedin.com/in/cristian-daniel-herrera-7a2794a9</a></div>
      <div><strong>GitHub:</strong><a style="color: #fff;" href="https://github.com/cristian-daniel88 ">https://github.com/cristian-daniel88 </a></div>
    </div>
    <div class="h3-perfil"><h3>PERFIL</h3></div>
    <div class="contenido-perfil">
      Después de trabajar como músico profesional durante varios años,
      ahora estoy buscando comenzar una nueva carrera en Programación
      y Desarrollo Web. Soy una persona entusiasta y motivada que está
      dispuesta a aprender nuevas habilidades y trabajar como parte de
      un equipo. Recientemente completé un curso introductorio de
      Programación. Ahora estoy haciendo un nuevo curso en Javascript
      Avanzado y buscando trabajo en este campo para aplicar este
      nuevo conocimiento de una manera práctica.
    </div>
    <div class="h3-lenguajes"><h3>LENGUAJES & FRAMEWORKS <em style="font-size: 15px;">(estudiando actualmente ...)</em></h3></div>
    <div class="contenido-lenguajes">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>NodeJS</li>
        <li>Git/GitHub</li>
        <li>Linux</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
    </div>
    

  </div>
</div>
<div class="cv2">
  <div class="cv2-container">
    
    <div class="h3-educacion"><h3>EDUCACION</h3></div>
    <div class="contenido-educacion">
      <ul>
        <li>
           Desarrollador de Web Avanzado (con Javascript y sus Frameworks)  
          <p>Agosto 2020 – Actualmente, NucBA</p>
        </li>
        <li>
           Desarrollador de Web Inicial (maquetación y curso de Javascript desde cero) 
          <p>Mayo 2020 - Agosto 2020, UTN</p>
        </li>
        <li>
          Licenciatura en Musicoterapia 
          <p>Marzo 2011 – Actualmente, UBA, Facultad de Psicología</p>
        </li>
        <li>
          SADEM (Escuela de Musica Popular)
          <p>Marzo 2008-Diciembre 2012, Escuela de Música Popular</p>
        </li>
        <li>
          CENS 57 (Secundario)
          <p>Marzo 2008 - Diciembre 2010</p>
        </li>
      </ul>
    </div>
    <div class="h3-educacion"><h3>IDIOMAS</h3></div>
    <div class="contenido-idioma">
      <ul>
        <li>Español | Nativo (oral/escrito)</li>
        <li>Ingles | Pre-Intermedio (oral/escrito)</li>
      </ul>
    </div>
    
  </div>
</div>
</div>`;

const portfolio1Es = `<div style="padding-left: 20px; padding-right: 20px; margin-top: 20px; margin-bottom: 10px;"><strong>Proyecto: HOMEBANKING</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Estado: Completo</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Languaje: Español</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Tecnologias: HTML5, CSS3 y JavaScript</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Descripción: <p>Es una página web bancaria donde el usuario puede depositar y recibir dinero, como tambien transferir dinero a terceros con solo indicando el CBU, ademas puede afectuar pagos de servicios que se descuentan de su saldo. Se puede a acceder a esta aplicacion creando un usuario e ir probando sus servicios.</p></strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Link: <a style="text-decoration: none; color: #fff;" href="https://home-banking-cristian-dh-errera-git-master-cristian-daniel88.vercel.app/">https://home-banking-cristian-dh-errera-git-master-cristian-daniel88.vercel.app/</a></strong></div>`;

const portfolio2Es = `  <div style="padding-left: 20px; padding-right: 20px; margin-top: 20px; margin-bottom: 10px;"><strong>Proyecto: PedimonYa!</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Estado: Completo</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Languaje: Español</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Tecnologias: HTML5, CSS3, JavaScript and Bootstrap</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Descripción: <p>Es una página web para comprar y vender tarjetas Pokemon.  Tiene un carrito de compras.</p></strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Link: <a style="text-decoration: none; color: #fff;" href="https://pedimon-ya-il03vkvgz.vercel.app/">https://pedimon-ya-il03vkvgz.vercel.app/</a></strong></div>`;

const portfolio1En = `<div style="padding-left: 20px; padding-right: 20px; margin-top: 20px; margin-bottom: 10px;"><strong>Project: HOMEBANKING</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Status: Complete </strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Language: Spanish</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Technology: HTML5, CSS3 y JavaScript</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Description: <p>It's a Home Banking website where a user can deposit and receive money from another user, as well as tranfer money to 3rd parties using only their unique identifying code, additionally users can pay for services. Users can use this website by creating an account.</p></strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Link: <a style="text-decoration: none; color: #fff;" href="https://home-banking-cristian-dh-errera-git-master-cristian-daniel88.vercel.app/">https://home-banking-cristian-dh-errera-git-master-cristian-daniel88.vercel.app/</a></strong></div>`

const portfolio2En = `<div style="padding-left: 20px; padding-right: 20px; margin-top: 20px; margin-bottom: 10px;"><strong>Project: PedimonYa!</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Status: Complete</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Language: Spanish</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Technology: HTML5, CSS3, JavaScript and Bootstrap</strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Description: <p>This is a website where users can buy and sell Pokemon cards. The page includes a shopping cart.</p></strong></div>
<div style="padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"><strong>Link: <a style="text-decoration: none; color: #fff;" href="https://pedimon-ya-il03vkvgz.vercel.app/">https://pedimon-ya-il03vkvgz.vercel.app/</a></strong></div>`

const contactEs = ` <div style="margin-right: 20px;">Contacto</div> 
<div class="contact-container">
  <a  href="https://api.whatsapp.com/send?phone=+5491158371123&text=Hola!%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20tus%20servicios%20como%20desarrollador/programador%20Web."style="text-decoration: none;"> <span class="icon-whatsapp">+54 9 11 5837 1123</span></a>
</div>`;

const contactEn = `<div style="margin-right: 20px;">Contact</div> 
<div class="contact-container">
  <a  href="https://api.whatsapp.com/send?phone=+5491158371123&text=Hello! I would like more information about your services as a Developer/Web Programmer"style="text-decoration: none;"> <span class="icon-whatsapp">+54 9 11 5837 1123</span></a>
</div>`




//const menuResponsive = document.getElementById('menuResponsive')

toggle.addEventListener("click", menu);
closed.addEventListener("click", menu);

botonEs.addEventListener("click", cambioIdioma);
botonEn.addEventListener("click", cambioIdioma);

const navigatorContainerEn = ` 
<li><a href="#about-me">About me</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>
        
 `;

const navigatorContainerEs = `
<li><a href="#about-me">Acerca de mi</a></li>
<li><a href="#projects">Proyectos</a></li>
<li><a href="#contact">Contacto</a></li>

 `;

const navigatorParaCelEn = `
 <li><a href="#about-me">About me</a></li>
 <li><a href="#projects">Projects</a></li>
 <li><a href="#contact">Contact</a></li>
 <li id="language">
   <div id="configuration"><span class="icon-cog"></span></div>
   Language
 </li>
 <div class="idioma-container" id="idioma-container_responsive">
   <div class="en-container" id="en-container" >
     <div class="abreviacion-en">
      
     </div>
     <div class="bandera-en" id="bandera-en" data-character="en"></div>
   </div>
   <div class="es-container" id="es-container" >
     <div class="abreviacion-es">
      
     </div>
     <div class="bandera-es" id="bandera-es" data-character="es"></div>
   </div>
 </div>`;

const navigatorParaCelEs = `
 <li><a href="#about-me">Acerca de mi</a></li>
 <li><a href="#projects">Proyectos</a></li>
 <li><a href="#contact">Contacto</a></li>
 <li id="language">
   <div id="configuration"><span class="icon-cog"></span></div>
   Lenguaje
 </li>
 <div class="idioma-container" id="idioma-container_responsive">
   <div class="en-container" id="en-container" >
     <div class="abreviacion-en">
      
     </div>
     <div class="bandera-en" data-character="en"></div>
   </div>
   <div class="es-container" id="es-container">
     <div class="abreviacion-es">
      
     </div>
     <div class="bandera-es" data-character="es"></div>
   </div>
 </div>`;

function cambioIdioma(e) {
  if (this.dataset.character === "en") {
    ulDesktop.innerHTML = navigatorContainerEn;
    ulMovil.innerHTML = navigatorParaCelEn;
    aboutMe.innerHTML = aboutMeContentEn;
    contenidoportfolio1.innerHTML= portfolio1En;
    contenidoportfolio2.innerHTML= portfolio2En;
    tituloprojects.innerHTML = 'PROJECTS';
    contenidoContact.innerHTML = contactEn;
    

    enContainer.classList.add("border-idioma");
    return esContainer.classList.remove("border-idioma");
  } else {
    //falta rellenar navegador en español y show

    ulDesktop.innerHTML = navigatorContainerEs;
    ulMovil.innerHTML = navigatorParaCelEs;
    aboutMe.innerHTML = aboutMeContentEs;
    contenidoportfolio1.innerHTML= portfolio1Es;
    contenidoportfolio2.innerHTML= portfolio2Es;
    contenidoContact.innerHTML = contactEs;
    tituloprojects.innerHTML = 'PROYECTOS';

    enContainer.classList.remove("border-idioma");
    return esContainer.classList.add("border-idioma");
  }
}

document.addEventListener("click", (e) => {
  if (e.target.dataset.character === "es") {
    console.log("es");
    aboutMe.innerHTML = aboutMeContentEs;
    contenidoportfolio1.innerHTML= portfolio1Es;
    contenidoportfolio2.innerHTML= portfolio2Es;
    tituloprojects.innerHTML = 'PROYECTOS';
    contenidoContact.innerHTML = contactEs;
    return (ulMovil.innerHTML = navigatorParaCelEs);
  }
});
document.addEventListener("click", (e) => {
  if (e.target.dataset.character === "en") {
    console.log("en");
    aboutMe.innerHTML = aboutMeContentEn;
    contenidoportfolio1.innerHTML= portfolio1En;
    contenidoportfolio2.innerHTML= portfolio2En;
    tituloprojects.innerHTML = 'PROJECTS';
    contenidoContact.innerHTML = contactEn;
    return (ulMovil.innerHTML = navigatorParaCelEn);
  }
});

// document.addEventListener('click', ())

function idiomaDefault(params) {
  ulDesktop.innerHTML = navigatorContainerEn;
  ulMovil.innerHTML = navigatorParaCelEn;
  enContainer.classList.add("border-idioma");
  contenidoportfolio1.innerHTML= portfolio1En;
  contenidoportfolio2.innerHTML= portfolio2En;
  tituloprojects.innerHTML = 'PROJECTS';
  contenidoContact.innerHTML = contactEn;
  return (aboutMe.innerHTML = aboutMeContentEn);
}

idiomaDefault();

function menu() {
  menuResponsive.classList.toggle("show");
}

/*slide*/
const back = document.getElementById("back-1");
const next = document.getElementById("next-1");

// imagenes: creamos el array vacio donde se alojara despues las imagenes
let imagenes = [];

// pusheamos imagenes el array vacio creado
imagenes[0] = "./assets/homebankingfoto1.jpg";
imagenes[1] = "./assets/homebankingfoto2.jpg";
imagenes[2] = "./assets/homebankingfoto3.jpg";
//indice
let indiceImagen = 0;

// ball : obtenemos el array de ball
const bolas = document.getElementsByClassName("ball-1");
//indice
let indiceBall = 0;

// creamos elemento para que vaya andentro del el ball
let tilde = document.createElement("div");
tilde.id = "tilde-1";

//eventos
window.addEventListener("load", cambiarImagenAutomatico);

back.addEventListener("click", cambiarImagenManual);
next.addEventListener("click", cambiarImagenManual);

//funcion para cambiar imagen con load
function cambiarImagenAutomatico() {
  document.slider.src = imagenes[indiceImagen];
  bolas[indiceBall].appendChild(tilde);

  if (indiceImagen < 2) {
    indiceImagen++;
    indiceBall++;
  } else {
    indiceImagen = 0;
    indiceBall = 0;
  }
}

let intervalo = setInterval(cambiarImagenAutomatico, 3000);
intervalo;

//funcion para cambiar imagen con click
function cambiarImagenManual() {
  document.slider.src = imagenes[indiceImagen];
  bolas[indiceBall].appendChild(tilde);

  if (indiceImagen < 2) {
    indiceImagen++;
    indiceBall++;
  } else {
    indiceImagen = 0;
    indiceBall = 0;
  }
  clearInterval(intervalo);
}

const back2 = document.getElementById("back-2");
const next2 = document.getElementById("next-2");

let imagenes2 = [];

imagenes2[0] = "./assets/pedimonya2.jpg";
imagenes2[1] = "./assets/pedimonya3.jpg";
imagenes2[2] = "./assets/pedimonya1.jpg";

//indice
let indiceImagen2 = 0;

// ball : obtenemos el array de ball
const bolas2 = document.getElementsByClassName("ball-2");
//indice
let indiceBall2 = 0;

let tilde2 = document.createElement("div");
tilde2.id = "tilde-2";

//eventos

back2.addEventListener("click", cambiarImagenManual2);
next2.addEventListener("click", cambiarImagenManual2);

//funcion para cambiar imagen con click
function cambiarImagenManual2() {
  document.slider2.src = imagenes2[indiceImagen2];
  bolas2[indiceBall2].appendChild(tilde2);

  if (indiceImagen2 < 2) {
    indiceImagen2++;
    indiceBall2++;
  } else {
    indiceImagen2 = 0;
    indiceBall2 = 0;
  }
}
/**/
