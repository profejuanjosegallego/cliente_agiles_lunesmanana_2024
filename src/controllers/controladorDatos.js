import { gastos } from "./simuladorBD.js";


//filtros aqui


//DOM
let fila=document.getElementById("fila")

//TRAVERSING
//1. Debemos recorrer un arreglo de datos
gastos.forEach(function(gasto){
    

    //2. Creamos etiquetas necesarias para mostrar la info

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow","p-5")

    let descripcion=document.createElement("h3")
    descripcion.classList.add("text-center", "fw-bold")
    //propiedad para modificar el texto de una etiqueta desde JS
    descripcion.textContent=gasto.descripcion


    let montoGasto=document.createElement("h2")
    montoGasto.classList.add("text-center","text-success")
    montoGasto.textContent="$ "+gasto.monto


    //3. Creando las jerarquias del modelo traversing
    //se arranca de lo mas interno hacia lo mas externo
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(montoGasto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})