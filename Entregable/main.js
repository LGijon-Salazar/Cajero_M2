function usuarios(mail, password) {
    
    //se aprovecha el ingreso del usuario para cargar los datos de todos los usuarios, simulando la carga de la base de datos
    const persona1 =
        {
            correo: "juan@gmail.com",
            nombre: "Juan",
            contrasena: "J123",
            balance: 990
        }
    const persona2 =
        {  
            correo: "pedro@gmail.com",
            nombre: "Pedro",
            contrasena: "P123",
            balance: 10
        }
    const persona3 =
        {  
            correo: "maria@gmail.com",
            nombre: "Maria",
            contrasena: "M123",
            balance: 90
        }
// se condiciona para que se actualicen lo datos en el storage, solo si este esta vacio para no afectar
//alguna actualizacion que se requiera hacer mas a delante
    if(localStorage.length <3){
        localStorage.setItem("usuario1",JSON.stringify(persona1));
        localStorage.setItem("usuario2",JSON.stringify(persona2));
        localStorage.setItem("usuario3",JSON.stringify(persona3));
    }

    //valida si el password y el correo ingresado son correctos
    let flagmail = false;
    let flagpassword = false;
    let usuario = null;
    //valida por persona en el localStorage si el correo y el password coninciden 
    for(let i = 1;i <localStorage.length;i++) {
        usuario = JSON.parse(localStorage.getItem("usuario"+i)); 
        if(usuario.correo===mail) {
        flagmail = true;
        }
        if(usuario.contrasena===password) {
        flagpassword = true;
        }
    }

/* Si no existe la cuenta o la contrasena se notifica */
if(flagmail!==true) {
    window.alert("La cuenta de correo no existe. \n" + "Favor de validar");
}else if(flagpassword!==true){
    window.alert("El password no es correcto. \n" + "Favor de validar");
}else{
    //se guarda el nombre del usuario en el localstorage con la clave nombre
    localStorage.setItem("nombre",usuario.nombre)
    window.location="cajero.html"; //cambia a la pagina cajero.html
}
}
/* Aquien quiero asociar un listener? */
 /* Agregar un listener */
 /* Definir el evento que quiero cachar */
 /* Definir la funcion que se ejecutara cuando el evento ocurra */
const boton_inicio = document.querySelector("#boton_inicio");
//extrae el mail y el password ingresado por el ususario
boton_inicio.addEventListener("click", () => {
    const mail = document.querySelector("#exampleInputEmail1");
    const contrasena = document.querySelector("#exampleInputPassword1");
    return usuarios(mail.value, contrasena.value);
}); 
    
        






