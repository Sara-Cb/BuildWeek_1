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

const Grafico = document.getElementById('grafico');
var ctx = Grafico.getContext('2d');

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
      borderColor: ['#00ffff', '#d20094'],
      hoverOffset: 10
    }
  ]
};


const myChart = new Chart(Grafico, {
  type: 'doughnut',
  data: chartData,
  options: options,
  plugins: [{
    afterDraw: function(chart) {
      ctx.font = '14px Arial';
ctx.fillStyle = '#000';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = 'bold 24px sans-serif';
ctx.fillStyle = '#ffffff'; // CON QUESTO SI COLORA DI BIANCO

ctx.fillText(giudizio(), Grafico.width / 2, Grafico.height / 2);
    }
  }]
});

var giudizio = function() {
  if (correctA > 5 ) {
    return "Congratulazioni! \n Hai superato l'esame!"
  } else {
    return "Non hai superato l'esame"
  }
}