class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML =`
            
        <header class="header" id="header">
      <section class="wrapper container">
        <a href="index.html" class="brand">
          <img src="Imagenes/logo_nav.png" alt="logo" width="40" height="35" class="d-inline-block align-text-top"> Planeta Mascotas 
        </a>
        <div class="burger" id="burger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </div>
        <span class="overlay"></span>
        <nav class="navbar" id="navbar">
            <ul class="menu" id="menu">
                <li class="menu-item menu-dropdown">
                    <span class="menu-link" data-toggle="submenu"> Productos <i class="bx bx-chevron-down"></i></span>
                    <ul class="submenu">
                    <li class="submenu-item"><a href="#" class="submenu-link"> Gatos </a></li>
                    <li class="submenu-item"><a href="#" class="submenu-link"> Perros </a></li>
                    </ul>
                </li>
                <li class="menu-item"><a href="login.html" class="menu-link"> Login </a></li>
                <li class="menu-item"><a href="acerca-de-nosotros.html" class="menu-link"> Acerca de nosotros </a></li>
                <li class="menu-item"><a href="servicios.html" class="menu-link"> Servicios </a></li>
                <li class="menu-item"><a href="carrito.html" class="menu-link"> Carrito </a></li>
                <li class="menu-item"><a href="desarrolladoras.html" class="menu-link"> Desarrolladoras </a></li>
            </ul>
        </nav>
    </section>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
             <footer>
      <img id="logo" src="Imagenes/logo.jpg">
      <p class="copyright">&copy Copyright Planeta Mascotas - 2022</p>
    </footer>
    `
    }
} 

customElements.define('my-footer', MyFooter)