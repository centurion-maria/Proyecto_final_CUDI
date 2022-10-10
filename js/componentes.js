/* Barra de navegación */

class MyHeader extends HTMLElement{
  connectedCallback() {
    this.innerHTML =`
    <div class="header">
        <div class="navbar">
          <div class="navbar__wrapper">
            <nav class="navbar__menu">
                <a href="index.html" class="brand">
                    <img src="Imagenes/logo_nav.png" alt="logo" width="40" height="35" class="d-inline-block align-text-top"> Planeta Mascotas 
                </a>
              <div id="nav-icon3"><span></span><span></span><span></span><span></span></div>
              <ul class="navbar__nav">
                <li class="navbar__link after-transform"><a class="menu_link" href="productos.html">Productos</a></li>
                <li class="navbar__link after-transform"><a class="menu_link" href="login.html">Login</a></li>
                <li class="navbar__link after-transform"><a class="menu_link" href="acerca-de-nosotros.html">Acerca de Nosotros</a></li>
                <li class="navbar__link after-transform"><a class="menu_link" href="servicios.html">Servicios</a></li>
                <li class="navbar__link after-transform"><a class="menu_link" href="#">
                    <img src="Imagenes/carrito_compras.png" alt="logo" width="35"></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="navbar-responsive">
          <ul class="navbar-responsive__nav">
            <li class="navbar-responsive__link after-transform"><a href="productos.html">Productos</a></li>
            <li class="navbar-responsive__link after-transform"><a href="login.html">Login</a></li>
            <li class="navbar-responsive__link after-transform"><a href="acerca-de-nosotros.html">Acerca de nosotros</a></li>
            <li class="navbar-responsive__link after-transform"><a href="servicios.html">Servicios</a></li>
            <li class="navbar-responsive__link after-transform"><a href="#">Carrito</a></li>
          </ul>
        </div>
      </div>
    ` 
  }
}
customElements.define('my-header', MyHeader)


/* Footer */
class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="pie-pagina">
                <img id="logo" src="Imagenes/logo.jpg">
                <p class="copyright">&copy Copyright Planeta Mascotas - 2022</p>
            </div>
            <div class="side-pie-pagina">
                <p><a href="desarrolladoras.html"> Desarrolladoras </a></p>
            </div>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)


/* Responsive de la pagina*/
$(document).ready(function(){
    var state = false,
        links = $('.navbar-responsive__link')
      $('#nav-icon3').click(function(){
          $(this).toggleClass('open');
      if(!state) {
        $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
        state = true
      } else {
        $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
        state = false
      }
      
      })
    $.each(links, function(index,value){
      value.addEventListener("click",function(){
        if(!state) {
          $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
          state = true
        } else {
          $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
          state = false
        }
        $('#nav-icon3').removeClass('open')
      })
    })
  })