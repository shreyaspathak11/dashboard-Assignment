import React from 'react';
import {} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Box, useColorModeValue } from '@chakra-ui/react';

const BarChart = ({ data }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
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

  return (
  <Box w="500px" p={4} boxShadow="lg" border="1px solid" bgColor={bgColor}  borderColor={borderColor} borderRadius="lg" transition="box-shadow 0.3s ease" _hover={{ boxShadow: "lg" }}>
    <Bar data={chartData} options={chartOptions} />
  </Box>
  );
};

export default BarChart;