const elSiteThemeToggler = document.querySelector('.dark-mode-button');

elSiteThemeToggler.addEventListener('click', function () {

  document.body.classList.toggle('dark-mode');

});