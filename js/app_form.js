window.addEventListener("load", () => {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      const FD = new FormData(form);
  
      XHR.open("POST", "http://127.0.0.1:5000");
  
      XHR.send(FD);
    }
  
    const form = document.getElementById("formProducto");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      sendData();
    });
  });


  /*  async function guardar() {
    var data = {
        "nombre": document.getElementById('nombre').value,
        "cantidad": document.getElementById('cantidad').value,
        "precio": document.getElementById('precio').value,
        "imagen": document.getElementById('imagen').value,
    }
    console.log(data)
    var url = BACKEND_URL + 'productos'
    await fetch(url, {
      "method": 'POST',
      "body": JSON.stringify(data),
      "headers": {
        "Content-Type": 'application/json'
      }
    })
    /*window.location.reload();
}*/

/*const formProducto = document.querySelector('#formProducto')

formProducto.addEventListener('submit', async e => {
  e.preventDefault()
  
  const nombre = formProducto['nombre'].value
  const cantidad = formProducto['cantidad'].value
  const precio = formProducto['precio'].value
  const imagen = formProducto['imagen'].value.replace("C:\\fakepath\\", "")

const response = await fetch (BACKEND_URL, {
    "method": 'POST',
    "body": JSON.stringify({nombre, 
        cantidad,
        precio,
        imagen}),
    "headers": {
      "Content-Type": 'application/json'
    }
  })*/
/*  console.log(response)
  formProducto.reset()
});*/