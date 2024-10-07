//1. Crear una variable para enlazar cada caja del formulario

let descripcionInput=document.getElementById("descripcion")
let montoInput=document.getElementById("monto")
let categoriaInput=document.getElementById("categoria")
let fechaInput=document.getElementById("fecha")
let botonRegistroGasto=document.getElementById("botonRegistro")

//2. Desenmcadenar la logica del formulario
//2A LO PRIMERO ES DETECTAR QUE AL FORMULARIO le hicieron clic en enviar
botonRegistroGasto.addEventListener("click",function(evento){
    evento.preventDefault()
    let gasto={
        id:5,
        descripcion:descripcionInput.value,
        monto:montoInput.value,
        categoria:categoriaInput.value,
        fecha:fechaInput.value
    }

    console.log(gasto)
    Swal.fire({
        title: "Gasto registrado con exito",
        text: "Estamos para servirte",
        icon: "success"
    });

})