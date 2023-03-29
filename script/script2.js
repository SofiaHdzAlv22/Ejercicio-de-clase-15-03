let propietario, modelo, placa, tipo, fecha, hora, cantidad;

let formulario = document.getElementById('form2')

formulario, addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
    
})

function LeerDatos(propietario, modelo, placa, tipo, fecha, hora, cantidad) {
    propietario = document.getElementById('propietario').value
    modelo = document.getElementById('modelo').value
    placa = document.getElementById('placa').value
    tipo = document.getElementById('tipo').value
    fecha = document.getElementById('fecha').value
    hora = document.getElementById('hora').value
    cantidad = document.getElementById('cantidad').value
    
    GuardarLocalStorage(propietario, modelo, placa, tipo, fecha, hora, cantidad)
}

function Validardata(propietario, modelo, placa, tipo, fecha, hora, cantidad){
    if (propietario.length == 0 || modelo.length == 0 || tipo.length == 0 || fecha.length == 0 || hora.length == 0 || cantidad == 0 ) {
        Swal.fire({
            title: 'Error',
            text: 'Do you want to continue',
            icon: 'error',
            confirmBurronText: 'cool',
            iconColor: 'pink',
        })
    }
    GuardarLocalStorage(propietario, modelo, placa, tipo, fecha, hora,cantidad)
}

function GuardarLocalStorage(propietario, modelo, placa, tipo,fecha, hora, cantidad) {
    localStorage.setItem('propietario', propietario)
    localStorage.setItem('modelo', modelo)
    localStorage.setItem('placa', placa)
    localStorage.setItem('tipo', tipo)
    localStorage.setItem('fecha', fecha)
    localStorage.setItem('hora', fecha)
    localStorage.setItem('Cantidad', cantidad)
    ListarData()
}

function ListarData() {
    let propietarioUsu = localStorage.getItem('propietario')
    let modeloUsu = localStorage.getItem('modelo')
    let placaUsu = localStorage.getItem('placa')
    let tipoeUsu = localStorage.getItem('tipo')
    let fechaUsu = localStorage.getItem('fecha')
    let horaUsu = localStorage.getItem('hora')
    let cantidadUsu = localStorage.getItem('cantidad')

}
