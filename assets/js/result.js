var correctA = 0;
var wrongA = 0;

if (localStorage.getItem('score')){
  correctA = localStorage.getItem('score');
  wrongA = 10-correctA;
}

const correctPercentage = (correctA / 10) * 100;
const wrongPercentage = (wrongA / 10) * 100;

const percentualeGiuste = document.getElementById('percentualeGiuste');
const domandeCorrette = document.getElementById('domandeCorrette');
percentualeGiuste.textContent = `${correctPercentage}`;
domandeCorrette.textContent =  `${correctA} -`;

const percentualeSbagliate = document.getElementById('percentualeSbagliate');
const domandeSbagliate = document.getElementById('domandeSbagliate');
percentualeSbagliate.textContent = `${wrongPercentage}`;
domandeSbagliate.textContent =  `${wrongA} -`;

const Grafico = document.getElementById('grafico');
const risultato1 = document.getElementById('risultato');

function result() {
    if (correctPercentage>wrongPercentage) {
       risultato1.innerHTML = "Hai superato l'esame"
    } else {
        risultato1.innerHTML = "Non hai superato l'esame"
    } 
  }

  result();


  new Chart(Grafico, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        label: 'Your result',
        borderWidth: 1,
        cutout: 100,
        data: [correctA, wrongA],
      backgroundColor: [
        '#00ffff',
        '#d20094',
      ],
      hoverOffset: 4
      }]
    },
    options: {
      elements: {
        center: {
          text: 'Red is 2/3 the total numbers',
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20, // Default is 20 (as a percentage)
          minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
          lineHeight: 25 // Default is 25 (in px), used for when text wraps
        }
      }
    }
  });
  