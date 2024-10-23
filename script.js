const buttons = document.querySelectorAll('.button');
const menus = document.querySelectorAll('.menu');

function handleClick(e) {
  e.preventDefault();

  // Remove 'is-active' from all buttons and add it to the clicked one
  buttons.forEach(button => button.classList.remove('is-active'));
  this.classList.add('is-active');  // Add is-active class

  // Show the menu associated with the clicked button
  const targetMenu = document.querySelector(`#${this.dataset.target}`);
  menus.forEach(menu => menu.classList.remove('menu--is-visible'));
  targetMenu.classList.add('menu--is-visible');
}

// Add event listeners to all buttons
buttons.forEach(button => button.addEventListener('click', handleClick));
