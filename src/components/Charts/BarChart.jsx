import React from 'react';
import {} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  // Extracting product names and sales from the data
  const products = data.map(item => item.productName);
  const sales = data.map(item => item.sales);

  // Chart data configuration
  const chartData = {
    labels: products,
    datasets: [
      {
        label: 'Sales',
        data: sales,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;
