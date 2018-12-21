const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
// All api calls go to the this link
const apiBaseUrl = 'http://api.themoviedb.org/3';
// All images use this link
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

const searchBaseUrl = "/search/movie"


const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
$.getJSON(nowPlayingUrl,(movieData)=>{
    console.log(movieData)
    // let newHTML = ''
    movieData.results.forEach((movie)=>{
        const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`
        const newHTML = `
        <div class="col-4 movie-box my-1 p-1">
            <img src="${posterUrl}" />
            <p>${movie.title}</p>
            <p>${movie.overview}</p>
        </div>
        `
        $('#movie-grid').append(newHTML)
    })
})

$('#movie-form').submit((e)=>{

    e.preventDefault();
    const movieSearch = $('#search-input').val()
    //store the movie for later
    localStorage.setItem('movieSearch', movieSearch)
    $('#search-input').val('')

    const searchUrl = `${apiBaseUrl}${searchBaseUrl}?api_key=${apiKey}&query=${movieSearch}`
    console.log(searchUrl)
    $.getJSON(searchUrl,(movieData)=>{
        // console.log(movieData)
        let newHTML = '';
        movieData.results.forEach((movie)=>{
            const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`
            newHTML += `
            <div class="col-4 movie-box my-1 p-1">
                <img src="${posterUrl}" />
                <p>${movie.overview}</p>
            </div>`
            $('#movie-grid').html(newHTML)
        })
    })

})

// $.getJSON(nowPlayingUrl, (movieData)=>{
//     console.log(movieData);
 
//     for(let i =0; i < 6; i++){
//         let movieInfo = movieData.results[i];
//         const posterUrl = `${imageBaseUrl}w300${movieInfo.poster_path}`;
//         let newHTML = `
//         <div class="posters movie-poster-${i} col-4">
//             <img src="${posterUrl}"/>
//             <div class="movie-text">
//                 <div class="title">${movieInfo.title}</div>
//                 <div class="title">Release Date: ${movieInfo.release_date}</div>
//                 <div class="title">Popularity: ${movieInfo.popularity}</div>
//                 <div class="title">Vote Count: ${movieInfo.vote_count}</div>
//                 <div class="title">Vote Average: ${movieInfo.vote_average}</div>
//             </div>
//         </div>
//         `
//         if(i<3){
//             $(".top-three").append(newHTML);
//         } else{
//             $(".bottom-three").append(newHTML);
//         }
//     }
//  });