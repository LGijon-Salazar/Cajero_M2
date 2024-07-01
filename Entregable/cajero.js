
//Extrae el nombre almacenado en el localstorage y lo muestra en la parte superior derecha de la pagina
let nombre = localStorage.getItem("nombre");
const nombre_persona = document.querySelector(".usuario");
nombre_persona.textContent = "Usuario: " + nombre;
//pone a la clase saldo de la etiqueta h1 en una variable para utilizarce mas adelante
let balance = document.querySelector(".saldo");
//se crean las variables usuario y num_usrario en null
let usuario = null;
let num_usuario = null;

// dependiendo del nombre que este guardado en la variable se seleccionara al usuario y sus atributos
switch(nombre){
    case "Juan":
        usuario = JSON.parse(localStorage.getItem("usuario1"));//se extra la matriz del local estorage
        num_usuario = "usuario1"//Se asigna el nombre de la clave a la varible
        break;
    case "Pedro":
        usuario = JSON.parse(localStorage.getItem("usuario2"));
        num_usuario = "usuario2"
        break;
    case "Maria":
        usuario = JSON.parse(localStorage.getItem("usuario3"));
        num_usuario = "usuario3"
        break;
}

//Se asignana los botones por medio de su ID a las variables
const boton_consulta = document.querySelector("#boton_consulta");
const boton_ingreso = document.querySelector("#boton_ingreso");
const boton_retiro = document.querySelector("#boton_retiro"); 
//se crea la variable total y nuevo_monto en 0, fuera de las funciones para que sirva en todas las que se requieran
let total = 0;
let nuevo_monto = 0;
//se cachan los eventos click para cada boton
boton_consulta.addEventListener("click", () => {
    balance.textContent = "$ " + parseFloat(usuario.balance);//muestra el moton total del usuario
    const transaccion = document.querySelector(".ingreso_egreso")
    transaccion.textContent = "$ 0.00";
}
); 
boton_ingreso.addEventListener("click", () => {
    //muestra un prompt que cacha el valor ingresado por el usuario
    nuevo_monto = parseFloat(prompt("Ingresa el nuevo monto \n" +  "Recuerda que el saldo total no debe superar los $ 990 pesos."));
    total = nuevo_monto + parseFloat(usuario.balance) //suma el valor actual con le valor ingresado
    //no debe de tener más de $990 
    if(total<= 990){

        //se asigna el resultado al input text
        balance.textContent = "$ " + total;
        // se asigna el resultado a el array
        usuario.balance=total
        //se asigna el resultado al localStorage
        localStorage.setItem(num_usuario,JSON.stringify(usuario));
        //se muestra el valor de la transacción
        const transaccion = document.querySelector(".ingreso_egreso")
        transaccion.textContent = "+ $ " + nuevo_monto;
      
    }else{
        alert("Transaccion no realizada!!! \n" + "Estas excediendo el maximo permitido.");
    }
}   
); 

boton_retiro.addEventListener("click", () => {
    //muestra un prompt que cacha el valor ingresado por el usuario
    nuevo_monto = parseFloat(prompt("Ingresa el monto a retirar \n" +  "Recuerda que el minimo permitido en tu cuenta es de $ 10 pesos."));
    //Se resta el valor ingresado del total
    total = parseFloat(usuario.balance) - nuevo_monto 
    //no debe de tener  menos de $10. 
    if(total >= 10){
        //se asigna el resultado al input text
        balance.textContent = "$ " + total;
        // se asigna el resultado a el array
        usuario.balance=total
        //se asigna el resultado al localStorage
        localStorage.setItem(num_usuario,JSON.stringify(usuario));
        //se muestra el valor de la transacción
        const transaccion = document.querySelector(".ingreso_egreso")
        transaccion.textContent = "- $ " + nuevo_monto;
    
    }else{
        //si no cumple con el requisito del maximo aceptado mostra una alerta
        alert("Transaccion no realizada!!! \n" + "Estas excediendo el minimo permitido.");
        
    }
}
); 

