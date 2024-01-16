// DOM
const headerElement = document.querySelector('.header');
// Function
// Navigation
function insertNav() {
    let htmls = `
    <nav class="nav display-flex justify-content-between align-items-center">
        <div class="logo"></div>
        <ul class="menu display-flex justify-content-evenly">
            <a href="" class="default-text">home</a>
            <a href="" class="default-text">about us</a>
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
}
// Main script
insertNav();