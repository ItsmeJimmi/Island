function toggleHamburger() {
  var navLinks = document.querySelector('.nav-links');
  var hamburgerBtn = document.getElementById('hamburger-btn');

  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
    hamburgerBtn.innerHTML = '&#9776;';
  } else {
    navLinks.style.display = 'block';
    hamburgerBtn.innerHTML = '&times;';
  }
}
