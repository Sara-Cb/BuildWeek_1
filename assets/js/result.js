var correctA = 0;
var wrongA = 0;

if (localStorage.getItem('score')){
  correctA = localStorage.getItem('score');
  wrongA = 10-correctA;
}

const Grafico = document.getElementById('grafico');

  new Chart(Grafico, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        label: 'Your result',
        borderWidth: 1,
        data: [correctA, wrongA],
      backgroundColor: [
        '#00ffff',
        '#d20094',
      ],
      hoverOffset: 4
      }]
    },
  });