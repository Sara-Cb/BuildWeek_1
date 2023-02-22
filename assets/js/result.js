var correctA = 0;
var wrongA = 0;

if (localStorage.getItem('score')) {
  correctA = localStorage.getItem('score');
  wrongA = 10 - correctA;
}

const correctPercentage = (correctA / 10) * 100;
const wrongPercentage = (wrongA / 10) * 100;

const percentualeGiuste = document.getElementById('percentualeGiuste');
const domandeCorrette = document.getElementById('domandeCorrette');
percentualeGiuste.textContent = `${correctPercentage}`;
domandeCorrette.textContent = `${correctA}/10 `;

const percentualeSbagliate = document.getElementById('percentualeSbagliate');
const domandeSbagliate = document.getElementById('domandeSbagliate');
percentualeSbagliate.textContent = `${wrongPercentage}`;
domandeSbagliate.textContent = `${wrongA}/10 `;
/*
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
*/
/*
new Chart(Grafico, {
  type: 'doughnut',
  centerText: {
    display: true,
    text: 'My label',
    font: 'Arial',
    color: '#666666',

  },
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
*/
const Grafico = document.getElementById('grafico');
const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: 800,
  plugins: {
    legend: {
      display: false,
    }
  },
  cutout: '70%',
  centerText: {
    display: true,
    text: 'My label',
    font: '14px Arial',
    color: '#666666',
    sidePadding: 40
  }
};
const chartData = {
  labels: ['Correct', 'Wrong'],
  datasets: [
    {
      label: 'Your result',
      borderWidth: 1,
      data: [correctA, wrongA],
      backgroundColor: ['#00ffff', '#d20094'],
      hoverOffset: 4
    }
  ]
};
const myChart = new Chart(Grafico, {
  type: 'doughnut',
  data: chartData,
  options: options
});