// DOM
const headerElement = document.querySelector('.header');
// Function
// Navigation
function insertNav() {
    let htmls = `
    <nav class="nav display-flex justify-content-between align-items-center">
        <div class="logo">
            <img src="./assets/image/nav-logo.png" alt="">
        </div>
        <ul class="menu display-flex justify-content-evenly">
            <a href="./index.html" class="default-text">home</a>
            <a href="./about.html" class="default-text">about us</a>
            <a href="" class="default-text">forum</a>
            <a href="" class="default-text"></a>

        </ul>
        <div class="account-menu">
            <a href="" class="default-text">Sign in</a>
            <p class="display-inline">/</p>
            <a href="" class="default-text">Sign up</a>
        </div>
    </nav>
    `;
    headerElement.innerHTML = htmls;
    headerElement.classList.add("position-fixed");
    headerElement.style.backgroundImage = 'url(./assets/image/background.jpg)';
    
}
// Main script
insertNav();