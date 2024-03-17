import React from 'react';
import {} from 'chart.js/auto';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  // Extracting product names and sales from the data
  const products = data.map(item => item.productName);
  const sales = data.map(item => item.sales);
  const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;

  // Chart data configuration
  const chartData = {
    labels: products,
    datasets: [
      {
        label: 'Sales',
        data: sales,
        backgroundColor: randomColor,
        borderColor: randomColor,
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
    <Box
      w={{ base: '100%', md: '40%' }}
      p={4}
      m={4}
      boxShadow="lg"
      border="1px solid"
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius="lg"
      transition="box-shadow 0.3s ease"
      _hover={{ boxShadow: "lg" }}
    >
      <Bar data={chartData} options={chartOptions} />
      <Text fontSize="l" fontWeight="bold" textAlign="center" fontFamily={"Roboto Condensed"} mt={4}>
        Sales VS Product
      </Text>
    </Box>
  );
};

export default BarChart;

