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
  });

  