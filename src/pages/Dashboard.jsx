// Dashboard.js
import React, { useState } from 'react';
import { Box, Grid, useColorModeValue, Flex } from '@chakra-ui/react';
import Form from '../components/Forms & Tables/Form';
import TableComponent from '../components/Forms & Tables/Table';
import { initialData } from '../assets/data';
import Footer from '../components/Footer';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PolarChart from '../components/Charts/PolarChart';
import StatBox from '../components/StatusBox/StatBox';
import NewCustomersStatBox from '../components/StatusBox/NewCustomerStatBox';
import MostSoldStatBox from '../components/StatusBox/MostSoldStatBox';

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
    <Flex  alignItems="center" justifyContent={"space-evenly"} direction={"row"} mb={"10"}>
        <StatBox data={tableData} />
        <NewCustomersStatBox data={tableData} />
        <MostSoldStatBox data={tableData} />
      </Flex>

      <Flex direction="column" alignItems="center">
        <BarChart data={tableData} />
        <LineChart data={tableData} />
        <PolarChart data={tableData} />
      </Flex>

      <Box mt={10} p={4} boxShadow="md" borderRadius="md" transition="box-shadow 0.3s ease" _hover={{ boxShadow: "lg" }}>
        <Grid templateColumns="1fr" gap={6} justifyItems="center" alignItems="" mt={10}>
          <Box display="flex" justifyContent="center" >
            <Form onSubmit={handleFormSubmit} />
          </Box>
          <Box>
            <TableComponent data={tableData} />
          </Box>
        </Grid>
      </Box>
      
      
      

      <Footer />
    </>
  );
};

export default Dashboard;
