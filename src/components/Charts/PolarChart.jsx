import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = ({ data }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const productNames = data.map(item => item.productName);
  const sales = data.map(item => item.sales);

  const backgroundColors = Array.from({ length: productNames.length }, () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`);

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
    <Box w={{ base: '80%', md: '45%' }}
    p={4} m={4} boxShadow="lg" border="2px solid" bgColor={bgColor} borderColor={borderColor} borderRadius="lg" transition="box-shadow 0.3s ease" _hover={{ boxShadow: "lg" }}>
      <PolarArea data={chartData} />
      <Text fontSize="l" fontWeight="bold" textAlign="center" fontFamily={"Roboto Condensed"} mt={4}>
        Sales VS Product
      </Text>
    </Box>
  );
};

export default PolarChart;
