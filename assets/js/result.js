import { yourResult } from "./modules/benchmark";

console.log(yourResult.correctAnswers + ' e ' + yourResult.wrongAnswers);

var correctA = yourResult.correctAnswers;
var wrongA = yourResult.wrongAnswers;

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
        '#00fff',
        '#d20094',
      ],
      hoverOffset: 4
      }]
    },
  });