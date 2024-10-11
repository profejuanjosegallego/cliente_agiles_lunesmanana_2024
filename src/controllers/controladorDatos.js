
//Traer los datos de la memoria y convertilos a JSON nuevamente
let gastos=JSON.parse(sessionStorage.getItem("datos"))
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

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid")
    
    if(gasto.categoria=="transporte"){
        imagen.src="../../assets/img/transporte.png"
    }else if(gasto.categoria=="comida"){
        imagen.src="../../assets/img/food-restaurant.png"
    }else if(gasto.categoria=="entretenimiento"){
        imagen.src="../../assets/img/mascaradas.png"
    }
    
    //3. Creando las jerarquias del modelo traversing
    //se arranca de lo mas interno hacia lo mas externo
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(montoGasto)
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})