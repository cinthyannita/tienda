var desplegarMenu= document.getElementById("desplegar");
var contraerMenu= document.getElementById("contraer");
var mouseSobreDesplegable = document.getElementById("desplegable");



desplegarMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top=
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegar").style.display="none";
    document.getElementById("contraer").style.display="block";
});
contraerMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-6em";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegar").style.display="block";
    document.getElementById("contraer").style.display="none";
});

document.addEventListener('DOMContentLoaded', ()=> {
    const desplegarIcono = document.getElementById('desplegar');
    const contraerIcono = document.getElementById('contraer');
    const menuDesplegable = document.querySelector('.menuDesplegable');
  
    desplegarIcono.addEventListener('click', ()=> {
      menuDesplegable.style.display = 'block';
    });
  
    contraerIcono.addEventListener('click', ()=> {
      menuDesplegable.style.display = 'none';
    });
  });
 
  
  
  
  
  
  
  