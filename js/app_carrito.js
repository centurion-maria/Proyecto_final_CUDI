const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
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

await axios.get('http://127.0.0.1:5000/productos')
.then(response => {
    const stockProductos = response.data;
    console.log(stockProductos)
    JSON.stringify(stockProductos)
    console.log(stockProductos)
})
.catch(e => {
    console.log(e);
})

const updateStockItems = stock => {
    console.log(stock)


    const productos = stock

    console.log(stock)

    productos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img class="producto_imagen" src="/imagenes/${producto.imagen}" alt= "alimento">
        <h3>${producto.nombre}</h3>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
    
        const boton = document.getElementById(`agregar${producto.id}`)
    
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
            //
        })
    })
    console.log(productos)
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




const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito() 
    console.log(carrito)
}