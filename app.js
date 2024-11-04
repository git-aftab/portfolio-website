document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  // Event listener to toggle 'bx-x' and 'active' classes on click
  menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  };

  // Event listener to remove 'bx-x' and 'active' classes on scroll
  window.onscroll = () => {
      menu.classList.remove('bx-x');
      navbar.classList.remove('active');
  };

  const header = document.querySelector("header");
  
  // Event listener to toggle 'sticky' class on scroll
  window.addEventListener("scroll", function() {
      header.classList.toggle("sticky", window.scrollY > 0);
  });
});
