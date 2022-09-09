// para leer el html desde JS, utilizaremos la funcion document.
//esto gracias al entorno donde se ejecuta JS que es el navegador
//lo mejor es crear variables que representen alos selectores de HTML
//seleccionamos las etiquetas de HTML con querySelector de una manera parecida a como lo hacemos con CSS


const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});



//modificando HTML desde JS

h1.innerHTML = "MODIFICADO CON HTML <br /> insertando etiquetas";
h1.innerText = "MODIFICADO CON solo texto";//con la propiedad innerText insertara solamente texto
console.log(h1.getAttribute('class')); //de esta manera podermos acceder a los atributos de las etiquetas (clases u otros)
h1.setAttribute('class', 'rojo');//con esto modificamos el codigo HTML que se muestra el navegador (de verde -> rojo)
h1.classList.add('verde');//le agregara una segunda clase a la etiqueta h1 que solo tenia rojo
h1.classList.remove('rojo');//quitara la clase rojo de la etiqueta h1

// ---- modificando el value de la etiqueta input

input.value = "789";

//crear un elemento desde 0

const img = document.createElement('img');
img.setAttribute('src', 'https://image.shutterstock.com/image-photo/back-school-supplies-books-blackboard-260nw-305292356.jpg');
console.log(img);

//para que se muestre la imagen lo introduciremos dentro la etiqueta p con el id (pid)

pid.appendChild(img);




//primero capturaremos los elementos de los cuales queremos que los usuarios interactuen

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn');
const pResult = document.querySelector('#result');

//una de las formas de escuchar eventos desde el HTML es el atributo onclick u onchange, que debe estar dentro la etiqueta html estos deben mencionar la funcion de JS que se lanzara
//pero es mucho mas limpio manejar todo directamente con JS utilizando la propiedad addEventListener

btn.addEventListener('click', btnOnClick); //este necesita 2 parametros el evento que se espera, en este caso el click y el segundo la funcion que se ejecutara una vez suceda el evento

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "El resultado es: " + sumaInputs;
}



// PARA TRABAJAR CON FORMULARIOS Y addEventListener


const form = document.querySelector('#form');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const btnForm = document.querySelector('#btnForm');
const pForm = document.querySelector('#pForm');

form.addEventListener('submit', sumarValoresForm);

function sumarValoresForm(event) {
    event.preventDefault();//con esto indicamos que no se ejecute por defecto la recargada de la pagina al enviar el submit del formulario
    const resultado = form1.value + form2.value;
    pForm.innerText = "El resultado es: " + resultado;
}