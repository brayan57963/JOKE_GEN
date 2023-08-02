/* document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('jokeButton').addEventListener('click', function() {
        fetch('https://v2.jokeapi.dev/joke/Programming?lang=es')
          .then(response => response.json())
          .then(data => {
            console.log(data)
            const joketitle = data.setup;
            const joketext = data.delivery;
            const altjoke = data.joke;
            document.getElementById('jokeTitle').textContent = joketitle;
            document.getElementById('jokeText').textContent = joketext;
            document.getElementById('jokeText2').textContent = altjoke;
          })
          .catch(error => {
            console.log('Ha ocurrido un error:', error);
            document.getElementById('jokeText').textContent = 'Ocurrió un error al obtener la broma. Por favor, intenta de nuevo más tarde.';
          });
      });
});
*/

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('jokeButton').addEventListener('click', function() {
      fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          const joketitle = data.setup;
          const joketext = data.delivery;
          const altjoke = data.joke;
          document.getElementById('jokeTitle').textContent = joketitle;
          document.getElementById('jokeText').textContent = joketext;
          document.getElementById('jokeText2').textContent = altjoke;
        })
        .catch(error => {
          console.log('Ha ocurrido un error:', error);
          document.getElementById('jokeText').textContent = 'Ocurrió un error al obtener la broma. Por favor, intenta de nuevo más tarde.';
        });
    });
});