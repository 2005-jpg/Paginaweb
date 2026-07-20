let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// =======================
// AGREGAR PRODUCTO
// =======================

function agregar(nombre, precio){

    let producto = carrito.find(p => p.nombre === nombre);


    if(producto){

        producto.cantidad++;

    }else{

        carrito.push({

            nombre: nombre,

            precio: Number(precio),

            cantidad: 1

        });

    }


    guardarCarrito();

    mostrarCarrito();

}



// =======================
// GUARDAR CARRITO
// =======================

function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}



// =======================
// MOSTRAR CARRITO
// =======================

function mostrarCarrito(){


    let lista = document.getElementById("lista-carrito");

    let totalHTML = document.getElementById("total");

    let contador = document.getElementById("contador");


    // Si estamos en una página sin carrito
    if(!lista) return;


    lista.innerHTML = "";


    let suma = 0;

    let cantidadTotal = 0;



    if(carrito.length === 0){

        lista.innerHTML = `
        <p>
        El carrito está vacío 🛒
        </p>
        `;

    }



    carrito.forEach((p,index)=>{


        let subtotal = p.precio * p.cantidad;


        suma += subtotal;

        cantidadTotal += p.cantidad;



        lista.innerHTML += `

        <div class="producto-carrito">


        <h4>
        ${p.nombre}
        </h4>


        <p>
        $${p.precio.toFixed(2)}
        x ${p.cantidad}
        </p>


        <button onclick="eliminar(${index})">

        ❌

        </button>


        </div>

        `;


    });



    if(totalHTML){

        totalHTML.innerHTML = suma.toFixed(2);

    }


    if(contador){

        contador.innerHTML = cantidadTotal;

    }


}



// =======================
// ELIMINAR PRODUCTO
// =======================

function eliminar(index){


    carrito.splice(index,1);


    guardarCarrito();


    mostrarCarrito();

}



// =======================
// ABRIR CARRITO
// =======================

function abrirCarrito(){

    let panel = document.getElementById("panelCarrito");


    if(panel){

        panel.classList.add("activo");

    }

}



// =======================
// CERRAR CARRITO
// =======================

function cerrarCarrito(){

    let panel = document.getElementById("panelCarrito");


    if(panel){

        panel.classList.remove("activo");

    }

}



// =======================
// ENVIAR PEDIDO WHATSAPP
// =======================

function enviarPedido(){


    if(carrito.length === 0){

        alert("El carrito está vacío 🛒");

        return;

    }



    let mensaje =
    "Hola, deseo realizar este pedido:%0A%0A";


    let total = 0;



    carrito.forEach(p=>{


        let subtotal =
        p.precio * p.cantidad;


        total += subtotal;


        mensaje +=
        `${p.nombre} x ${p.cantidad} - $${subtotal.toFixed(2)}%0A`;

    });



    mensaje +=
    `%0ATotal: $${total.toFixed(2)}`;



    let numero =
    "593991582124";



    window.open(

    "https://wa.me/" +
    numero +
    "?text=" +
    mensaje,

    "_blank"

    );


}



// =======================
// CARGAR
// =======================

document.addEventListener(
"DOMContentLoaded",
()=>{

    mostrarCarrito();

});