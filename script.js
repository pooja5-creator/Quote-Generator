
const p = document.querySelector('.parag');
const author = document.querySelector('.author');
const create = document.querySelector('.create');


const fetchQuote = () => {
     fetch('http://api.quotable.io/random')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            p.textContent = `"${data.content}"`;
            author.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            p.textContent = "Failed to fetch a quote.";
        });
};


window.addEventListener('load', fetchQuote);

create.addEventListener('click', fetchQuote);