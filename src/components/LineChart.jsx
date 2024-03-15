import React from 'react';
import {} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  // Extracting years and new customers from the data
  const years = data.map(item => new Date(item.date).getFullYear());
  const newCustomers = data.map(item => item.newCustomers);

  // Chart data configuration
  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'New Customers',
        data: newCustomers,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 4,
      },
    ],
  };

  // Chart options configuration
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
