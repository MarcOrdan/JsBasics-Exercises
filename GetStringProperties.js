const movie = {
  title: 'The avengers: end game',
  releaseYear: 2018,
  rating: 4.5,
  director: 'Michael Bay'
};

showProperties(movie)

function showProperties(obj){
  for (let key in obj){
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);
  }
}