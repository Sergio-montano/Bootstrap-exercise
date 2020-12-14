// ASYNC AWAIT REVIEW
// Async & Await are keywords that when used together allow for asynchrous code to be run synchrously inside of a function

// Example 1
async function asyncAwait(){
  console.log(`Before`);
  const response = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
  console.log(response);
  console.log(response.data.setup);
  console.log(`After`);
}
asyncAwait();
