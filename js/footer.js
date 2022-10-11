class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="pie-de-pagina">
            <div class="parte-logo">
                <img id="logo" src="Imagenes/logo_footer.png">
                <p class="copyright">&copy Copyright Planeta Mascotas - 2022</p>
            </div>
            <div class="dias-horarios">
                <p> Dias y horarios de atención: </p>
                <p> Lunes a Sábados de 9 a 21 hs </p>
                <p> Domingos de 10 a 20 hs </p><br>

                <p> Atención telefónica: </p>
                <p> 0800 - mascota </p>
            </div>
            <div class="parte-enlaces">
                <p><a href="desarrolladoras.html"> Desarrolladoras </a></p>
            </div>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)