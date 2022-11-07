function main() {

  const $body = document.body;
  const $navToggler = document.getElementsByClassName('menu-icon')[0];
  const $header = document.getElementsByTagName('header')[0];
  const $navMenu = document.getElementsByClassName('nav-menu')[0];
  const $navIconLines = document.getElementsByClassName('menu-icon__line');

  const $mainContainer = document.getElementById('main-container');
  const $landingPage = document.getElementById('landing-page');

  const $menuNavLinks = document.getElementsByClassName('nav-menu__link');

  $navToggler.addEventListener('click', (event) => {
    if($mainContainer.scrollTop < $landingPage.getBoundingClientRect().bottom)
      $header.classList.toggle('bg-dark');
    $navMenu.classList.toggle('nav-menu--open');
    $body.classList.toggle('no-scroll');
    $navIconLines[1].classList.toggle('move-and-hide');
    $navIconLines[0].classList.toggle('rotate45-right');
    $navIconLines[2].classList.toggle('rotate45-left');
  });

  const mobileMediaQuery = window.matchMedia('(max-width: 80em)');

  if(mobileMediaQuery.matches)
    $mainContainer.onscroll = () => {
      $mainContainer.scrollTop > $landingPage.getBoundingClientRect().bottom 
      ? $header.classList.add('bg-dark')
      : $header.classList.remove('bg-dark');
    }

  for(let i = 0; i < $menuNavLinks.length; i++) {
    $menuNavLinks[i].addEventListener('click', (event) => {
      $header.classList.toggle('bg-dark');
      $navMenu.classList.toggle('nav-menu--open');
      $body.classList.toggle('no-scroll');
    });
  };
}

window.addEventListener('DOMContentLoaded', main);