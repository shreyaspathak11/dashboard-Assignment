import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Generate random color for the line and points
  const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;

  const chartData = {
    labels: data.map(item => new Date(item.date).getFullYear()),
    datasets: [
      {
        label: 'New Customers',
        data: data.map(item => item.newCustomers),
        fill: false,
        borderColor: randomColor, // Use the random color for the line
        borderWidth: 2,
        pointBackgroundColor: randomColor, // Use the same random color for points
        pointRadius: 4,
      },
    ],
  };

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
      w={{ base: '99%' , md: '50%'}}
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
      <Line data={chartData} options={chartOptions} />
      <Text fontSize="l" fontWeight="bold" textAlign="center" fontFamily={"Roboto Condensed"} mt={4}>
        Customers VS Year
      </Text>
    </Box>
  );
};

export default LineChart;
