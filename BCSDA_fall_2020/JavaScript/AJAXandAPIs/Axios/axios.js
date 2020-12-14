// AXIOS
// Axios is JavaScript library used to make HTTP requests
// Axios changes format from JSON to JavaScript

// Request using Axios with Promises
axios.get(`https://official-joke-api.appspot.com/random_joke`)
  .then(res => console.log(res))
  // .then(res => console.log(res.data.setup))
  .catch(err => console.log(err))

// Request using Axios with Async/Await
async function randomJoke(){
  try {
    const joke = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
    console.log(joke);
  } catch (err) {
    console.log(`Failed See Error: ${err}`);
  }
}
randomJoke();

// Request with queries/parameters


const baseURL = `http://api.tvmazes.com`;
const id = `38963`;
const season = `1`;
const number = `8`;
// const episodeSearchURL = `/shows/:id/episodebynumber?season=:season&number=:number`;
const episodeSearchURL = `/shows/${id}/episodebynumber?season=${season}&number=${number}`;
const fullURL = baseURL + episodeSearchURL;
// const fullURL = `${baseURL}${episodeSearchURL}`;

axios.get(fullURL)
  .then(res => console.log(res))
  .catch(err => console.log(err))


  