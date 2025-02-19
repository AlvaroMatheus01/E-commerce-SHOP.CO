document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.querySelector(".comments-container");
    const arrowLeft = document.querySelector(".previous");
    const arrowRight = document.querySelector(".next");
    let allComments = Array.from(document.querySelectorAll(".comment"));
    let isAutoScrolling = true;
    let scrollInterval;
  
    // DUPLICAR OS ITENS PARA CRIAR LOOP INFINITO
    allComments.forEach(comment => {
      let clone = comment.cloneNode(true);
      commentsContainer.appendChild(clone);
    });
  
    function isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    }
  
    function moveCarousel(direction) {
      if (isMobile()) return;
  
      const scrollAmount = allComments[0].offsetWidth + 24; // Considerando gap entre itens
      const newScrollPosition = direction === "right"
        ? commentsContainer.scrollLeft + scrollAmount
        : commentsContainer.scrollLeft - scrollAmount;
  
      commentsContainer.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  
      // LOOP INFINITO SUAVE
      setTimeout(() => {
        if (commentsContainer.scrollLeft >= commentsContainer.scrollWidth / 2) {
          commentsContainer.scrollLeft = 0;
        } else if (commentsContainer.scrollLeft <= 0) {
          commentsContainer.scrollLeft = commentsContainer.scrollWidth / 2;
        }
      }, 600);
    }
  
    arrowLeft.addEventListener("click", () => moveCarousel("left"));
    arrowRight.addEventListener("click", () => moveCarousel("right"));
  
    // SCROLL AUTOMÁTICO CONTÍNUO
    function startAutoScroll() {
      scrollInterval = setInterval(() => {
        if (isAutoScrolling) moveCarousel("right");
      }, 3000);
    }
  
    // PAUSAR QUANDO O USUÁRIO PASSAR O MOUSE
    commentsContainer.addEventListener("mouseenter", () => isAutoScrolling = false);
    commentsContainer.addEventListener("mouseleave", () => isAutoScrolling = true);
  
    startAutoScroll();
  });
  