//Dicas

window.addEventListener('load', () => {
    const modalDicas = document.getElementById('modal-dicas');
    modalDicas.style.display = 'none';
    document.body.style.overflow = 'auto';
});


const dicas = [
    { img: '../assets/images/dicas/dica-01.png' },
    { img: '../assets/images/dicas/dica-02.png' },
    { img: '../assets/images/dicas/dica-03.png' },
    { img: '../assets/images/dicas/dica-04.png' },
    { img: '../assets/images/dicas/dica-05.png' },
    { img: '../assets/images/dicas/dica-06.png' },
];

const containerDicas = document.getElementById('dicas-container');
const modalDicas = document.getElementById('modal-dicas');
const modalImgDicas = document.getElementById('modal-dicas-img');
const fecharModalBtnDicas = document.getElementById('fechar-modal-dicas');


dicas.forEach(({ img }, i) => {

console.log('Adicionando dica:', img);

    const cardDicas = document.createElement('div');
    cardDicas.classList.add('card-dicas');
    cardDicas.innerHTML = `<img src="${img}" alt="Dica ${i + 1}" />`;

    cardDicas.addEventListener('click', () => {
        modalImgDicas.src = img;
        modalImgDicas.alt = `Dica ${i + 1}`;
        modalDicas.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    containerDicas.appendChild(cardDicas);
});

fecharModalBtnDicas.addEventListener('click', () => {
    modalDicas.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modalDicas.addEventListener('click', (e) => {
    if (e.target === modalDicas) {
        modalDicas.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalDicas.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});