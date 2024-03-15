// Chart.js
import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const Chart = ({ data }) => {
  const [chartType, setChartType] = useState('line');

  const handleChangeChartType = (type) => {
    setChartType(type);
  };

  const getChartComponent = () => {
    switch (chartType) {
      case 'line':
        return <Line data={chartData} />;
      case 'bar':
        return <Bar data={chartData} />;
      case 'pie':
        return <Pie data={chartData} />;
      default:
        return null;
    }
  };

  // Extrapolating prices for the years 2010 to 2014
  const extrapolatedData = [];
  for (let year = 2010; year <= 2015; year++) {
    const price = data.find(item => item.id === 5)?.price * (1 + (year - 2015) * 0.03) || 0; // Assuming 3% annual change
    extrapolatedData.push({ year, price });
  }

  const chartData = {
    labels: extrapolatedData.map(item => item.year),
    datasets: [
      {
        label: 'Price vs Year',
        data: extrapolatedData.map(item => item.price),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <Box>
      <ButtonGroup mb={4}>
        <Button onClick={() => handleChangeChartType('line')}>Line</Button>
        <Button onClick={() => handleChangeChartType('bar')}>Bar</Button>
        <Button onClick={() => handleChangeChartType('pie')}>Pie</Button>
      </ButtonGroup>
      {getChartComponent()}
    </Box>
  );
};

export default Chart;
