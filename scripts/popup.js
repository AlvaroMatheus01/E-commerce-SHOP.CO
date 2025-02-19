document.addEventListener("DOMContentLoaded", function () {
    
  function showPopup() {
      document.getElementById('popup').style.display = 'block';
  }

  function closePopup() {
      document.getElementById('popup').style.display = 'none';
  }

  function toggleMenu() {
      document.getElementById('menu').classList.toggle('active');
  }

  // Mostrar pop-up ao carregar a página
  showPopup();

  // Evento de fechar o pop-up
  document.getElementById('closePopup').addEventListener('click', closePopup);

  // Evento do menu hambúrguer
  document.getElementById('hamburger').addEventListener('click', toggleMenu);
});
