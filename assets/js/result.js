<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Blue', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19],
      borderWidth: 1,
      backgroundColor:[
        'rgb(0,0,255)', 'orange'
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
