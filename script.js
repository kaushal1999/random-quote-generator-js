const options = {
    method: "GET",
    
//   url: "https://andruxnet-random-famous-quotes.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "6bf3cfed4amshafb31367b1ad446p100b97jsn780e248656cc",
    "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
  },
};

let fetchRes = fetch("https://rapidapi.com", options);

fetchRes.then((response) => {
    console.log(response.status);
})
