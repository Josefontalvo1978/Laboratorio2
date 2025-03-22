document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('miformulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript

        let nombre = document.getElementById("nombre").value;
        let motivo = document.getElementById("motivo").value;
        let email = document.getElementById("email").value;
        let regex= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/ ;
        

        // Validación de los campos
       if(nombre.trim()=== "" && motivo.trim() === "" && email.trim()=== ""){
            mensaje.innerText = 'Todos los campos son obligatorios (*).';
            return;
       }
       if (nombre.trim() === "") {
        //alert("Todos los campos son obligatorios.");
            mensaje.innerText = 'El campos nombre es obligatorio (*).';
            return;
        }
        //verificar que el campo contenga solo letras y caracteres especiales (tildes)
        if(regex.test(nombre)){
            mensaje.innerText = 'El campos nombre es valido';
            
        }else{
            mensaje.innerText = 'El campos nombre no es valido (solo textos).';
            return;
        }

        if (motivo.trim() === "") {
            //alert("Todos los campos son obligatorios.");
                mensaje.innerText = 'El campos motivo es obligatorio (*).';
                return;
        }

        if (email.trim() === "") {
            //alert("Todos los campos son obligatorios.");
                mensaje.innerText = 'El campos email es obligatorio (*).';
                return;
        }
        if (!validarEmail(email)) {
            mensaje.innerText = 'El formato del email no es válido.';
            return;
        }

        // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción
         mensaje.innerText = 'Datos guardados con Exitos';
       
       
    });
    //validar la estructura del correo
    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
     
});

