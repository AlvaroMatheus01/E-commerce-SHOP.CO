document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('#customer-carousel', {
    type: 'loop',   // LOOP INFINITO
    perPage: 3,     // Mostra 3 comentários principais
    perMove: 3,     // Move 3 por vez
    gap: '20px',    // Espaço entre os cards
    arrows: true,    // Ativa botões de navegação
    pagination: false, // Oculta as bolinhas de navegação
    focus: 'center', // Mantém o comentário principal ao centro
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 }
    }
  });

  splide.mount();

  function updateVisibility() {
    const slides = document.querySelectorAll('.splide__slide');
    slides.forEach(slide => slide.classList.remove('is-visible'));
    
    let activeSlides = document.querySelectorAll('.splide__slide.is-active, .splide__slide.is-prev, .splide__slide.is-next');
    activeSlides.forEach(slide => slide.classList.add('is-visible'));
  }

  splide.on('moved', updateVisibility);
  updateVisibility(); 
});



/*VALIDAÇÃO DO EMAIL*/

function validateEmail() {
  var email = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Regex para validar email
  if (email.match(pattern)) {
      alert("Email válido! Você se inscreveu com sucesso.");
      return true;
  } else {
      alert("Por favor, insira um email válido.");
      return false;
  }
}