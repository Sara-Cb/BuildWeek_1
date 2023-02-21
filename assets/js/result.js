const divGrafico = document.getElementById('grafico');

const grafico = {
type: 'doughnut',
data: data,
};

const data = {
    labels: [
      'Correct',
      'Wrong',
    ],
    datasets: [{
      label: 'Your result',
      data: [300, 150],
      backgroundColor: [
        '#00fff',
        '#d20094',
      ],
      hoverOffset: 4
    }]
  };

  divGrafico.innerHTML += grafico;