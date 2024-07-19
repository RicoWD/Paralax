// script.js
document.querySelector('.card-container').addEventListener('mousemove', function(e) {
    const card = document.querySelector('.card');
    const halfWidth = card.offsetWidth / 2;
    const halfHeight = card.offsetHeight / 2;
    const mouseX = e.clientX - card.getBoundingClientRect().left - halfWidth;
    const mouseY = e.clientY - card.getBoundingClientRect().top - halfHeight;
  
    card.style.transform = `rotateY(${mouseX / 20}deg) rotateX(${-mouseY / 20}deg)`;
  });
  
  document.querySelector('.card-container').addEventListener('mouseleave', function() {
    const card = document.querySelector('.card');
    card.style.transform = 'rotateY(0) rotateX(0)';
  });
  