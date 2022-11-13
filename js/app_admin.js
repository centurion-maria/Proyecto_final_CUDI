const contenedorProductos = document.querySelector('.contenedor-productos')
const BACKEND_URL = 'http://127.0.0.1:5000';

const obtenerCatalogo = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/productos`);
  
      const stock = response.data;
      console.log(stock)
      return stock;
    } 
    catch (errors) {
      console.error(errors);
    }
};

const itemsCatalogo = stock => {
  const items = stock

  items.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img class="producto_imagen" src="/Imagenes/${producto.imagen}" alt= "alimento">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="eliminar ${producto.id}" class="boton-agregar">Eliminar <i class="fa-solid fa-trash-can"></i></button>
    `
    contenedorProductos.appendChild(div)
    
    const boton = document.getElementById(`eliminar ${producto.id}`)
    
    boton.addEventListener('click', () => {
      if (window.confirm('Estas seguro de querer eliminar el producto?')) {
        eliminarDelCatalogo(producto.id)
      }
      })
  })

  const eliminarDelCatalogo = (prodId) => {
    const options = {method: 'DELETE', url: `http://127.0.0.1:5000/productos/${prodId}`};

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    window.location.reload();
  }
}

const main = async () => {
    itemsCatalogo(await obtenerCatalogo());
};
  
main();