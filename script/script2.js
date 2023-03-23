let propietario, modelo, placa, tipo, fecha, hora, cantidad;

let formulario = document.getElementById('form')

formulario, addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    propietario = document.getElementById('propietario').value
    modelo = document.getElementById('modelo').value
    placa = document.querySelector('placa').value
    tipo = document.querySelector('tipo').value
    fecha = document.querySelector('fecha').value
    hora = document.querySelector('hora').value
    cantidad = document.querySelector('cantidad').value
    
    GuardarLocalStorage(propietario, modelo, placa, tipo, fecha, hora, cantidad)
}

function ValidarData(propietario, modelo, placa, tipo, fecha, hora, cantidad) {
    if (propietario.length == 0 || modelo.length == 0 || tipo.length == 0 || fecha.length == 0 || hora.length == 0 || cantidad == 0 ) {
        Swal.fire({
            title: 'Error',
            text: 'Do you want to continue',
            icon: 'error',
            confirmBurronText: 'cool',
            iconColor: 'pink',
        })
    }
    GuardarLocalStorage(propietario, modelo, placa, tipo, fecha, hora)
}

function GuardarLocalStorage(propietario, modelo, placa, tipo,fecha, hora, cantidad) {
    localStorage.setItem('Propietario del vehículo', propietario)
    localStorage.setItem('Modelo del vehículo', modelo)
    localStorage.setItem('Placa', placa)
    localStorage.setItem('Tipo', tipo)
    localStorage.setItem('Fecha', fecha)
    localStorage.setItem('Hora', fecha)
    localStorage.setItem('Cantidad', cantidad)
    ListarData()
}

function ListarData() {
    let propietarioUsu = localStorage.getItem('Propietario del vehículo')
    let modeloUsu = localStorage.getItem('Modelo del vehículo')
    let placaUsu = localStorage.getItem('Placa')
    let tipoeUsu = localStorage.getItem('Tipo')
    let fechaUsu = localStorage.getItem('Fecha')
    let horaUsu = localStorage.getItem('Hora')
    let cantidadUsu = localStorage.getItem('Cantidad')

}
