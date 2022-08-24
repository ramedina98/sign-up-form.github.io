const formulario = document.getElementById("form")
const inputs = document.querySelectorAll('#form input')

//expreciones regulares
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{0,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) =>{
      
      switch (e.target.name){

            case "Name": 
                  if(expresiones.nombre.test (e.target.value)){

                        document.getElementById('name').classList.remove('formulario__grupo-incorrecto');
                        document.getElementById('name').classList.add('formulario__grupo-correcto');
                        document.getElementById('n').style.display = "none"
                        


                  }else{

                        document.getElementById('name').classList.add('formulario__grupo-incorrecto');
                        document.getElementById('n').style.display = "block"
                  }
            break;

            case "last": 
                  if(expresiones.nombre.test (e.target.value)){

                        document.getElementById('Last').classList.remove('formulario__grupo-incorrecto');
                        document.getElementById('Last').classList.add('formulario__grupo-correcto');
                        document.getElementById('l').style.display = "none"
                        


                  }else{

                        document.getElementById('Last').classList.add('formulario__grupo-incorrecto');
                        document.getElementById('l').style.display = "block"
                  }
            break;

            case "email": 
                  if(expresiones.correo.test (e.target.value)){

                        document.getElementById('email').classList.remove('formulario__grupo-incorrecto');
                        document.getElementById('email').classList.add('formulario__grupo-correcto');
                        document.getElementById('e').style.display = "none"
                        


                  }else{

                        document.getElementById('email').classList.add('formulario__grupo-incorrecto');
                        document.getElementById('e').style.display = "block"
                  }
            break;

            case "Password": 
                  if(expresiones.password.test (e.target.value)){

                        document.getElementById('password').classList.remove('formulario__grupo-incorrecto');
                        document.getElementById('password').classList.add('formulario__grupo-correcto');
                        document.getElementById('p2').style.display = "none"
                        


                  }else{

                        document.getElementById('password').classList.add('formulario__grupo-incorrecto');
                        document.getElementById('p2').style.display = "block"
                  }
            break;
      } 
}

inputs.forEach((input) => {

      input.addEventListener('submit', validarFormulario);
      input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {

      e.preventDefault();
});