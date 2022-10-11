function main() {

  const $body = document.body;
  const $navToggler = document.getElementById('menu-icon')
  const $header = document.getElementsByTagName('header')[0];
  const $navMenu = document.getElementsByClassName('nav-menu')[0];

  const $mainContainer = document.getElementById('main-container');
  const $landingPage = document.getElementById('landing-page');

  const $menuNavLinks = document.getElementsByClassName('nav-link');

  $navToggler.addEventListener('click', (event) => {
    if($mainContainer.scrollTop < $landingPage.getBoundingClientRect().bottom)
      $header.classList.toggle('header-bg-on');
    $navMenu.classList.toggle('open-menu');
    $body.classList.toggle('no-scroll');
  });

  $mainContainer.onscroll = () => {
    $mainContainer.scrollTop > $landingPage.getBoundingClientRect().bottom 
    ? $header.classList.add('header-bg-on')
    : $header.classList.remove('header-bg-on');
  }

  for(let i = 0; i < $menuNavLinks.length; i++) {
    $menuNavLinks[i].addEventListener('click', (event) => {
      $header.classList.toggle('header-bg-on');
      $navMenu.classList.toggle('open-menu');
      $body.classList.toggle('no-scroll');
    });
  };
}

window.addEventListener('DOMContentLoaded', main);