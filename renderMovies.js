
function renderMovies(movies) {
    function renderMoviesHtml (movies) {
        let ratingString = movies.rottenTomatoesRating.toString();
        let ratingPercentage = ratingString * 100;
        return `
            <div class="card mx-auto" style="width: 550px; display: flex; flex-direction: row; padding: 15px; margin-bottom: 25px; background-color: #ecedf1;">
                <div style="flex: 1;">
                    <img id="poster" style="padding-right: 15px; object-fit: contain;" src="${movies.poster}">
                </div>
                <div style="flex: 2; padding: 20px; background-color: white;">
                    <div>
                        <h2>${movies.title}</h2>
                    </div>
                    <div>
                        <p>${movies.year}</p>
                    </div>
                    <div>
                        <p>IMDB:<br>
                        ${movies.imdbRating}/10</p>
                    </div>
                    <div>
                        <p>Rotten Tomatoes:<br>
                        ${ratingPercentage}%</p>
                    </div>
                </div>
            </div>
        `
    }
    let finalArr = movies.map(renderMoviesHtml).join('')
    return finalArr;
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}