document.addEventListener('DOMContentLoaded', () => {

    const movies = [
        {
            title: "Um filme Minecraft",
            year: 2025,
            director: "Jared Hess",
            plot: "Um portal misterioso atrai quatro desajustados para o Overworld, uma terra das maravilhas bizarras e cúbicas que prospera com a imaginação. Para voltar para casa, eles têm que dominar o terreno enquanto embarcam em uma missão mágica com um construtor inesperado chamado Steve.",
            poster: "img/mine.jpeg"
        },
        {
            title: "A Noiva Cadáver",
            year: 2005,
            director: "Tim Burton e Mike Johnson",
            plot: "As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.",
            poster: "img/noivacadaver.jpg"
        },
        {
            title: "Supergirl",
            year: 2015,
            director: "Greg Berlanti e outros",
            plot: "A série Supergirl, ambientada no Arrowverso, foca na história de Kara Zor-El, prima do Superman, que após anos escondendo seus poderes, decide se tornar a heroína Supergirl. A série explora sua jornada para abraçar suas habilidades e lutar contra ameaças em National City, enquanto equilibra sua vida pessoal como Kara Danvers. ",
            poster: "img/supergirl.jpg"
        },
        {
            title: "O Pescador de Sonhos",
            year: 2021,
            director: "João Victor Santos",
            plot: "Um homem com a rara habilidade de 'pescar' sonhos de outras pessoas precisa enfrentar uma criatura sombria que se alimenta de pesadelos.",
            poster: "img/pescador_sonhos.jpg"
        },
        {
            title: "Espelhos do Silêncio",
            year: 2023,
            director: "Lúcia Martins",
            plot: "Em uma pequena vila onde todos perderam a voz, uma jovem surda-muda utiliza uma linguagem de sinais ancestral para desvendar um segredo guardado por gerações.",
            poster: "img/espelhos_silencio.jpg"
        }
    ];

    const movieCatalog = document.getElementById('movie-catalog');
    const modalContainer = document.getElementById('modal-container');
    const modalDetails = document.getElementById('modal-details');
    const closeBtn = document.querySelector('.close-btn');

    // Função para criar o cartão de filme
    const createMovieCard = (movie) => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${movie.poster}" alt="Pôster do filme ${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p>${movie.year}</p>
            </div>
        `;
        card.addEventListener('click', () => showMovieDetails(movie));
        return card;
    };

    // Função para exibir os detalhes do filme no modal
    const showMovieDetails = (movie) => {
        modalDetails.innerHTML = `
            <div class="modal-details-flex">
                <img src="${movie.poster}" alt="Pôster do filme ${movie.title}">
                <div>
                    <h2>${movie.title}</h2>
                    <p><strong>Ano:</strong> ${movie.year}</p>
                    <p><strong>Direção:</strong> ${movie.director}</p>
                    <p><strong>Sinopse:</strong> ${movie.plot}</p>
                </div>
            </div>
        `;
        modalContainer.classList.add('show');
    };

    // Função para fechar o modal
    const closeModal = () => {
        modalContainer.classList.remove('show');
    };

    // Adicionar os filmes ao catálogo
    movies.forEach(movie => {
        movieCatalog.appendChild(createMovieCard(movie));
    });

    // Event listeners para fechar o modal
    closeBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

});
