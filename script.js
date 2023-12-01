// Função para criar a seção "Institucional", "Menu" e "Endereço" em um elemento "article"
function criarArticle() {
    var article = document.createElement('article');

    var institucional = document.createElement('section');
    institucional.id = "institucional";
    institucional.innerHTML = `
        <h2 class="textcolor">Institucional</h2>
        <ul>
            <li><a href="privacidade.html">Política de privacidade</a></li>
        </ul>
    `;
    article.appendChild(institucional);

    var menu = document.createElement('section');
    menu.id = "menu";
    menu.innerHTML = `
        <h2 class="textcolor">Menu</h2>
        <ul>
            <li><a href="sobre.html">Sobre nós</a></li>
            <li><a href="contato.html">Fale conosco</a></li>
        </ul>
    `;
    article.appendChild(menu);

    var endereco = document.createElement('section');
    endereco.id = "escritorio";
    endereco.innerHTML = `
        <h2 class="textcolor">Endereço</h2>
        <address>
            Rua Vereador Haroldo Luiz Dandoline, 195 - São Cristóvão, Turvo - SC, 88930-000
            <br>
            (48) 3525-0518
        </address>
    `;
    article.appendChild(endereco);

    return article;
}

// Função para criar o menu de navegação
function criarMenu() {
    var menu = document.createElement('nav');
    menu.className = "nav-home";
    menu.innerHTML = `
        <ul>
            <li><a href="index.html" onclick="redirecionarPagina('Home')" class="nav-link">Home</a></li>
            <li><a href="sobre.html" onclick="redirecionarPagina('A Empresa')" class="nav-link">A Empresa</a></li>
            <li><a href="contato.html" onclick="redirecionarPagina('Contato')" class="nav-link">Contato</a></li>
        </ul> 
    `;
    return menu;
}

// Função para criar o rodapé
function criarRodape() {
    var rodape = document.createElement('footer');
    rodape.innerHTML = "<p>© Bigotur Transporte e Turismo LTDA</p>";
    return rodape;
}

// Evento DOMContentLoaded para garantir que o DOM está pronto antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel-img");
    let currentImage = 0;

    // Função para trocar a imagem no carrossel
    function changeImage(direction) {
        images[currentImage].classList.remove("active");

        currentImage += direction;
        if (currentImage < 0) {
            currentImage = images.length - 1;
        } else if (currentImage >= images.length) {
            currentImage = 0;
        }

        images[currentImage].classList.add("active");
    }

    // Função para avançar automaticamente as imagens a cada 4,5 segundos
    function auto() {
        changeImage(1);
    }

    // Configura um intervalo para a função auto()
    setInterval(auto, 4500);
});