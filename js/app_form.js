const formProducto = document.querySelector('#formProducto')

formProducto.addEventListener('submit', e => {
  e.preventDefault()

  const data = {
    nombre: document.getElementById('nombre').value,
    cantidad: document.getElementById('cantidad').value,
    precio: document.getElementById('precio').value,
    imagen: document.getElementById('imagen').value.replace("C:\\fakepath\\", ""),
  };

  const options = {method: 'POST', url: 'http://127.0.0.1:5000/productos', data: data};

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  formProducto.reset()
});