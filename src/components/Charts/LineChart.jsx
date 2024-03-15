import React from 'react';
import {} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

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

  return (
  <Box w="500px" p={4} boxShadow="lg" border="1px solid"  borderColor="gray.200" borderRadius="lg" transition="box-shadow 0.3s ease" _hover={{ boxShadow: "lg" }}>
    <Line data={chartData} options={chartOptions} />
  </Box>
    );
};

export default LineChart;
