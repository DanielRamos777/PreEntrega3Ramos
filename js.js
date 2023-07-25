let carrito = [];
let total = 0;

window.addEventListener('DOMContentLoaded', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    const totalGuardado = localStorage.getItem('total');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
    
    if (totalGuardado) {
        total = parseFloat(totalGuardado);
    }
    
    mostrarCarrito();
});


function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    guardarCarrito();
    mostrarCarrito();
}


function mostrarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";
    carrito.forEach((producto, index) => {
        let itemCarrito = document.createElement("li");
        itemCarrito.textContent = producto.nombre + " - $" + producto.precio;
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.setAttribute("onclick", `eliminarDelCarrito(${index})`);
        itemCarrito.appendChild(botonEliminar);
        listaCarrito.appendChild(itemCarrito);
    });
    let totalCarrito = document.getElementById("total-carrito");
    totalCarrito.textContent = "Total: $" + total;
}

function eliminarDelCarrito(index) {
    let producto = carrito[index];
    total -= producto.precio;
    carrito.splice(index, 1);
    guardarCarrito();
    mostrarCarrito();
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('total', total.toString());
}

console.log(total-carrito);
console.log(totalGuardado)