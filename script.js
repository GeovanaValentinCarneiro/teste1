document.addEventListener('DOMContentLoaded', () => {

    const movies = [
        {
            title: "A Cinco Passos de Você",
            year: "2019",
            director: "Justin Baldoni",
            plot: "Stella passa muito tempo no hospital por causa de uma fibrose cística. Lá, ela conhece Will, que sofre da mesma doença. Eles são obrigados a manter distância, mas mesmo assim se apaixonam.",
            poster: "img/a-cinco-passos-de-voce.jpg"
        },
        {
            title: "Até o Ultimo Homem ",
            year: "2016",
            director: "Mel Gibson",
            plot: "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
            poster: "img/ate-o-ultimo-homem.jpg"
        },
        {
            title: "Ate que as cores acabem",
            year: "2019",
            director: "Takuya Kotani",
            plot: "Akito só tem mais um ano de vida, mas acaba encontrando um novo propósito ao se apaixonar por uma garota que também enfrenta uma doença terminal. ",
            poster: "img/ate-que-as-cores-acabem.jpg"
        },
        {
            title: "Como eu era antes de você",
            year: "2016",
            director: "Thea Sharrock",
            plot: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            poster: "img/como-eu-era-antes-de-voce.jpg"
        },
        {
            title: "Para todos os garotos que já amei",
            year: "2018",
            director: "Susan Johnson",
            plot: "Lara Jean Song Covey escreve cartas de amor secretas para todos os seus antigos paqueras. Um dia, as cartas são misteriosamente enviadas para os destinatários, virando sua vida de cabeça para baixo.",
            poster: "img/para-todos-os-garotos-que-ja-amei.jpg"
        },
        {
            title: "Quatro vidas de um cachorro",
            year: "2017",
            director: "Lasse Hallström",
            plot: "Um cachorro morre e reencarna várias vezes na Terra. Embora encontre novas pessoas e viva muitas aventuras, ele mantém o sonho de reencontrar Ethan, o seu primeiro dono, que sempre foi seu maior amigo.",
            poster: "img/quatro-vidas-de-um-cachorro.jpg"
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