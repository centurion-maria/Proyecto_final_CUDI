/* Footer */
class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="pie-de-pagina">
            <div class="parte-logo">
                <img id="logo" src="Imagenes/logo.jpg">
                <p class="copyright">&copy Copyright Planeta Mascotas - 2022</p>
            </div>
            <div class="parte-enlaces">
                <p><a href="desarrolladoras.html"> Desarrolladoras </a></p>
            </div>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)

