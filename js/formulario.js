const email = document.querySelector('#exampleInputEmail1');
const boton = document.querySelector('#boton');
const mensaje = document.querySelector('#exampleInputMensaje1');
const nombre =document.querySelector('#exampleInputNombre1')
const FormularioEmail = document.querySelector('#formularioEmail');
const FormularioMensaje = document.querySelector('#formularioMensaje');
const FormularioNombre=document.querySelector('#formularioNombre')
const InputCheck = document.querySelector('#inputCheck');
const Checkbox = document.querySelector('#exampleCheck1');
const formulario = document.querySelector('#formulario');
console.log(Checkbox.checked)

console.log(email.value)

let EmailCorrecto = false;
let MensajeCorrecto=false;
let checkMarcado=false;
let comprobarNombre=false;


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    corregirNombre(nombre);
    corregirCorreo(email);
    corregirMensaje(mensaje);
    console.log(EmailCorrecto)
    Checkbox.addEventListener('change', comprobarCheckbox(Checkbox));

    if (EmailCorrecto == true && MensajeCorrecto==true && checkMarcado==true && comprobarNombre==true) {
        enviar();


        
      
     /*  if (this.submit()) {
            alert("enviado")
            let div = document.createElement('div');
            div.className = "alert alert-light alert-dismissible fade show border shadow col-3 mt-3";
            div.role = "alert";
            div.textContent = "Formulario Procesado !";
            formulario.appendChild(div);


        }*/


    }
    

})


function corregirNombre(name){

let nombre=name.value;
let expresionRegular = new RegExp("^[a-zA-Z]+$");

let contenedor = document.createElement('div');
if(expresionRegular.test(nombre)){



    contenedor.classList = "valid-feedback";
    contenedor.id = "nombreCorrecto";
    contenedor.textContent = 'nombre valido';
    contenedor.style.display = "block";
    FormularioNombre.appendChild(contenedor);

    setTimeout(() => {
        contenedor.remove();
    }, 3000);
    EmailCorrecto = true;


}else{


    contenedor.classList = "invalid-feedback";
    contenedor.textContent = 'nombre incorrecto';
    contenedor.style.display = "block";
    FormularioNombre.appendChild(contenedor);

    setTimeout(() => {
        contenedor.remove();
    }, 3000)
    EmailCorrecto = false;

}


}





function corregirCorreo(email) {

    let correo = email.value;
    let expresionRegular = new RegExp("^[^@\s]+@[^@\s]+\.[^@\s]+$");

    let contenedor = document.createElement('div');
    if (expresionRegular.test(correo)) {

        contenedor.classList = "valid-feedback";
        contenedor.id = "correoValido";
        contenedor.textContent = 'correo electronico valido';
        contenedor.style.display = "block";
        FormularioEmail.appendChild(contenedor);

        setTimeout(() => {
            contenedor.remove();
        }, 3000);
        EmailCorrecto = true;

    } else {
        contenedor.classList = "invalid-feedback";
        contenedor.textContent = 'correo electronico invalido';
        contenedor.style.display = "block";
        FormularioEmail.appendChild(contenedor);

        setTimeout(() => {
            contenedor.remove();
        }, 3000)
        EmailCorrecto = false;
    }
}

function corregirMensaje(mensaje) {

    let message = mensaje.value;
    let expresionRegular = new RegExp("^^[a-zA-Z0-9]{5,}$");

    let contenedor = document.createElement('div');
    if (expresionRegular.test(message)) {

        contenedor.classList = "valid-feedback";
        contenedor.textContent = 'Mensaje correcto';
        contenedor.style.display = "block";
        FormularioMensaje.appendChild(contenedor);

        setTimeout(() => {
            contenedor.remove();
        }, 3000)

        MensajeCorrecto=true;

    } else {

        contenedor.classList = "invalid-feedback";
        contenedor.textContent = 'El mensaje debe de contener al menos ,5 caracteres y no puede tener espacios ';
        contenedor.style.display = "block";
        FormularioMensaje.appendChild(contenedor);

        setTimeout(() => {
            contenedor.remove();
        }, 3000)
        MensajeCorrecto=false;
    }
}

function comprobarCheckbox(check) {

    if (check.checked == false) {
        let contenedor = document.createElement('div');
        contenedor.classList = "invalid-feedback";
        contenedor.textContent = 'debes aceptar los terminos y condiciones';
        contenedor.style.display = "block";
        InputCheck.appendChild(contenedor);


        setTimeout(() => {
            contenedor.remove();
        }, 3000)

  

       checkMarcado = false;

    } else {

        checkMarcado = true;

    }
}

function enviar() {
    let x = document.getElementById("boton");
    if (x.className === "btn btn-primary") {
        x.textContent = "";
        x.className = "btn btn-secondary ";
        let d = document.createElement('div');
        d.className = "spinner-border spinner-border-sm";
        d.role = "status";
        let s = document.createElement('span');
        s.className = "";
        s.textContent = 'Redirigiendo';
        x.appendChild(d);
        x.appendChild(s);


    } else {
        x.className = "btn btn-primary";
        x.textContent = "submit";
    }
}
/*
    <div class="spinner-border spinner-border-sm" role="status" >
            <span class="visually-hidden">Loading...</span>
          </div>
  
  */