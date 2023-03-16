let nombre, correo, mensaje;
let formulario = document.getElementById('form')
formulario,addEventListener('submit',(e)=>{
    e.preventDefault()
    LeerDatos()
})
function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.querySelector('textarea').value
    ValidarData(nombre,correo,mensaje)
console.log(nombre)
function ValidarData(nommbre,correo,mensaje)
GuardarLocalStorage(nombre,correo,mensajes)
}

 {
    if(nombre,length==0 || correo.length==0 || mensaje.length==0){
     Swal.fire({
        title: 'Error',
        text: 'Do you want to continue',
        icon: 'Error',
        confirmBurronText:'cool',
        iconColor: 'purple',
     })
    }
}
function GuardarLocalStorage(nombre,correo,mensaje) {
localStorage.setItem('Nombre',nombre)
localStorage.setItem('Correo',correo)
localStorage.setItem('Mensaje',mensaje)
ListarData() 
}

function ListarData() {
    let nombreUsu = localStorage.getItem('Nombre')
    let correoUsu = localStorage.getItem('Coreo')
    let mensajeUsu = localStorage.getItem('Mnesaje')
}

