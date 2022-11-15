const contenedorProductos = document.querySelector('.contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementsByClassName('cantidadTotal')
const BACKEND_URL = 'http://127.0.0.1:5000';


let carrito = []

const getStock = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/productos`);
  
      const stock = response.data;
      return stock;
    } 
    catch (errors) {
      console.error(errors);
    }
};

const updateStockItems = stock => {
    const productos = stock

    productos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img class="producto_imagen" src="/Imagenes/${producto.imagen}" alt= "alimento">
        <h3>${producto.nombre}</h3>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton"><i class="fa-solid fa-cart-plus"></i> Agregar</button>
        `
        contenedorProductos.appendChild(div)
    
        const boton = document.getElementById(`agregar${producto.id}`)
    
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    })

    const agregarAlCarrito = (prodId) => {
        const existe = carrito.some (prod => prod.id === prodId)
        if (existe){
            const prod = carrito.map (prod => {
                if (prod.id === prodId){
                    prod.cantidad++
                }
            })
        } else {
            const item = stock.find((prod) => prod.id === prodId)
            carrito.push(item)
        }
        actualizarCarrito()
    }
}


const main = async () => {
    updateStockItems(await getStock());
};
  
main();

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        `
        contenedorCarrito.appendChild(div)
            
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}