// Chart.js
import React, { useState } from 'react';
import { Line, Bar, Pie, Scatter, Radar } from 'react-chartjs-2';
import { Button, ButtonGroup, Box, Text } from '@chakra-ui/react';

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
      case 'Radar':
        return <Radar data={chartData} />;
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
    <Box mt={10} >
    <Text fontSize="xl" fontWeight="bold" mb={4}>Chart Plotted</Text>
      <ButtonGroup mb={4}>
        <Button onClick={() => handleChangeChartType('line')}>Line</Button>
        <Button onClick={() => handleChangeChartType('bar')}>Bar</Button>
        <Button onClick={() => handleChangeChartType('Radar')}>Radar</Button>
      </ButtonGroup>
      <Box mt={10} h="200px"  display="flex" alignItems="center" justifyContent="space-between">
      {getChartComponent()}
      </Box>
    </Box>
  );
};

export default Chart;
