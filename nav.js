document.addEventListener("DOMContentLoaded", function () {
    const navElement = document.querySelector('nav');

    if (navElement) {
        navElement.innerHTML = `

            <div class="nav cl">
                <div class="nav-content rw">

                <div class="nav-left rw">

                    <img src="arquivos/imagens/logo.png" alt="logo" class="nav-logo">
                    <div class="nav-options rw">
                    <span class="icon users"></span>
                    <span class="icon file-text"></span>
                    <span class="icon square-pencil"></span>
                    </div>

                </div>

                <div class="nav-perfil rw">
                    <div class="cl">
                    <p class="name">Teste Nome</p>
                    <p class="email">emailteste@teste.com</p>
                    </div>
                    <img src="arquivos/imagens/ft-perfil.png" alt="foto de perfil" class="foto-perfil">
                </div>

                </div>
            </div>
        
        `;
    } 
    
    else {
        console.log('A tag <nav> NÃO foi encontrada no documento.');
    }

})