import React from 'react';
import {} from 'chart.js/auto';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = ({ data }) => {
  // Extracting product names and sales from the data
  const productNames = data.map(item => item.productName);
  const sales = data.map(item => item.sales);

  // Generating random colors for each product
  const backgroundColors = Array.from({ length: productNames.length }, () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`);

  // Chart data configuration
  const chartData = {
    labels: productNames,
    datasets: [
      {
        label: 'Sales vs Product',
        data: sales,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={chartData} />;
};

export default PolarChart;
