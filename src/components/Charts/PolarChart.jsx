import React from 'react';
import {} from 'chart.js/auto';
import { PolarArea } from 'react-chartjs-2';
import { Box, useColorModeValue } from '@chakra-ui/react';

const PolarChart = ({ data }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'gray.200');
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

  return (
  <Box p={4} boxShadow="lg" border="2px solid" bgColor={bgColor} borderColor={borderColor} textColor={textColor} borderRadius="lg" transition="box-shadow 0.3s ease" _hover={{ boxShadow: "lg" }}>
  <PolarArea data={chartData} />
  </Box>
  );
};

export default PolarChart;
