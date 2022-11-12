/*  async function guardar() {
    var data = {
        "nombre": document.getElementById('nombre').value,
        "cantidad": document.getElementById('cantidad').value,
        "precio": document.getElementById('precio').value,
        "imagen": document.getElementById('imagen').value.replace("C:\\fakepath\\", ""),
    }
    console.log(data)
    var url = url + '/productos'
    await fetch(url, {
      "method": 'POST',
      "body": JSON.stringify(data),
      "headers": {
        "Content-Type": 'application/json'
      }
    });

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      guardar();
    })
}*/

/*axios.post("http://127.0.0.1:5000/productos", data, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});*/

/*const formProducto = document.querySelector('#formProducto')

formProducto.addEventListener('submit', e => {
  e.preventDefault()

  const nombre = formProducto['nombre'].value
  const cantidad = formProducto['cantidad'].value
  const precio = formProducto['precio'].value
  const imagen = formProducto['imagen'].value.replace("C:\\fakepath\\", "")

  fetch ('http://127.0.0.1:5000/productos', {
    method: 'POST',
    headers: {
      "Content-Type": 'multipart/json'
    },
    body: JSON.stringify({
      nombre,
      cantidad,
      precio,
      imagen
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  })
  formProducto.reset()
})*/


const formProducto = document.querySelector('#formProducto')

formProducto.addEventListener('submit', e => {
  e.preventDefault()

  const data = {
    nombre: document.getElementById('nombre').value,
    cantidad: document.getElementById('cantidad').value,
    precio: document.getElementById('precio').value,
    imagen: document.getElementById('imagen').value.replace("C:\\fakepath\\", ""),
  };

  console.log(data)

  const options = {method: 'POST', url: 'http://127.0.0.1:5000/productos', data: data};

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

});