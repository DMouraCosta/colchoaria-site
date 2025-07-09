const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Carrossel

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    slideIndex = index; // garante que slideIndex está sincronizado
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}


let slideInterval = setInterval(nextSlide, 5000); 

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}


showSlide(slideIndex);


// Produtos


const produtos = [
    { 
        img: 'assets/images/produtos/cama-01.png', 
        desc: 'Colchão Forest Simmons, espuma de Visco elastico, espuma Látex, e Visco Dry Gel, Molas ensacadas' },
    { 
        img: 'assets/images/produtos/cama-02.png', 
        desc: 'Colchão Marbella Simmons, Tecido malha bamboo, espumas de alta performance, molas ensacadas, Visco' },
    { 
        img: 'assets/images/produtos/cama-03.png', 
        desc: 'Espumas com densidde progressiva, molas ensacadas, tecido malha fria' },
    { 
        img: 'assets/images/produtos/cama-04.png', 
        desc: 'Tecido em malha, molas ensacadas, espumas com densidades' },
    { 
        img: 'assets/images/produtos/cama-05.png', 
        desc: 'Molas ensacadas, conforto intermediario, tecido em malha' },
    { 
        img: 'assets/images/produtos/cama-06.png', 
        desc: 'Tecido malha fria, molas ensacadas, conforto intermediário' },
    { 
        img: 'assets/images/produtos/cama-07.png', 
        desc: 'Caixa ortopédica de madeira, espuma D28 selada' },
    { 
        img: 'assets/images/produtos/cama-08.png', 
        desc: 'Tecido em malha , conforto intermediário' }
];

const container = document.getElementById('produtos-container');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const fecharModalBtn = document.getElementById('fechar-modal');


window.addEventListener('load', () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

produtos.forEach(({ img, desc }, i) => {
    const card = document.createElement('div');
    card.classList.add('card-produto');
    card.innerHTML = `<img src="${img}" alt="Produto ${i + 1}" />`;

    card.addEventListener('click', () => {
        modalImg.src = img;
        modalImg.alt = `Produto ${i + 1}`;
        modalDesc.textContent = desc;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });

    container.appendChild(card);
});

fecharModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
