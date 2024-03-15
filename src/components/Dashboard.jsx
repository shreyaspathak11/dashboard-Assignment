// Dashboard.js
import React, { useState } from 'react';
import { Box, Divider, Grid, useColorModeValue } from '@chakra-ui/react';
import Form from './Form';
import TableComponent from './Table';
import Chart from './Chart';
import { initialData } from './data';
import Footer from './Footer';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PolarChart from './PolarChart';

const Dashboard = () => {
  const [tableData, setTableData] = useState(initialData);
  const bgColor = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  
  const handleFormSubmit = (formData) => {
    const newData = {
      id: tableData.length + 1,
      ...formData,
    };
    setTableData([...tableData, newData]);
  };

  return (
    <>
      <Grid templateColumns="1fr 1fr" gap={6} justifyItems="center" alignItems="start" mt={10}>
        <Box display="flex" justifyContent="center" > 
          <Form onSubmit={handleFormSubmit} />
        </Box>
        <Box>
          <TableComponent data={tableData} />
        </Box>
      </Grid>
      {/* <Chart data={tableData} /> */}
      <BarChart data={tableData} />
      <LineChart data={tableData} />
      <PolarChart data={tableData} />
      <Footer />
    </>
  );
};

export default Dashboard;
