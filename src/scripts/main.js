function main() {

  const $body = document.body;
  const $navToggler = document.getElementById('menu-icon')
  const $header = document.getElementsByTagName('header')[0];
  const $navMenu = document.getElementsByClassName('nav-menu')[0];

  $navToggler.addEventListener('click', (event) => {
    $header.classList.toggle('header-bg-on');
    $navMenu.classList.toggle('open-menu');
    $body.classList.toggle('no-scroll');
  })
}

window.addEventListener('DOMContentLoaded', main);