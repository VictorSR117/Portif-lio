document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.stopPropagation();
    });
});

document.querySelector('.card').addEventListener('click', function () {
    document.querySelector('.card-front').classList.toggle('card-flip');
    document.querySelector('.card-back').classList.toggle('card-flip');
});

// Adicionando um listener para o estado "card-flip" para desvirar quando clicado novamente
document.querySelector('.card.card-flip').addEventListener('click', function () {
    document.querySelector('.card-front').classList.toggle('card-flip');
    document.querySelector('.card-back').classList.toggle('card-flip');
});