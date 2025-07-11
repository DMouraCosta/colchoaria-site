let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let isTransitioning = false;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(newIndex, direction = 'next') {
  if (isTransitioning || newIndex === slideIndex) return;

  isTransitioning = true;
  prevButton.disabled = true;
  nextButton.disabled = true;

  const currentSlide = slides[slideIndex];
  const incomingSlide = slides[newIndex];

  // Limpa todas as classes de transição
  slides.forEach(slide => {
    slide.classList.remove(
      'active',
      'exit-left',
      'exit-right',
      'enter-from-left',
      'enter-from-right'
    );
  });

  // Prepara o slide novo fora da tela
  if (direction === 'prev') {
    incomingSlide.classList.add('enter-from-right');
  } else {
    incomingSlide.classList.add('enter-from-left');
  }

  // Força reflow
  void incomingSlide.offsetWidth;

  // Ativa o novo e anima o atual
  incomingSlide.classList.add('active');

  if (direction === 'prev') {
    currentSlide.classList.add('exit-left');
    incomingSlide.classList.remove('enter-from-right');
  } else {
    currentSlide.classList.add('exit-right');
    incomingSlide.classList.remove('enter-from-left');
  }

  slideIndex = newIndex;

  setTimeout(() => {
    isTransitioning = false;
    prevButton.disabled = false;
    nextButton.disabled = false;

    currentSlide.classList.remove('active', 'exit-left', 'exit-right');
    incomingSlide.classList.remove('enter-from-left', 'enter-from-right');
  }, 500);
}

function nextSlide() {
  const nextIndex = (slideIndex + 1) % slides.length;
  showSlide(nextIndex, 'next');
}

function prevSlide() {
  const prevIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex, 'prev');
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

nextButton.addEventListener('click', () => {
  nextSlide();
  resetSlideInterval();
});

prevButton.addEventListener('click', () => {
  prevSlide();
  resetSlideInterval();
});

// Primeira ativação
slides[slideIndex].classList.add('active');
