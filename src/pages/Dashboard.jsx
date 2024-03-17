import React, { useState } from 'react';
import { Box, useColorModeValue, Flex, Stack } from '@chakra-ui/react';
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
import EmailForm from '../components/Forms & Tables/EmailForm';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [tableData, setTableData] = useState(initialData);
  const bgColor = useColorModeValue('#E0F4FF', 'gray.700');

  const handleFormSubmit = (formData) => {
    const newData = {
      id: tableData.length + 1,
      ...formData,
    };
    setTableData([...tableData, newData]);
  };

  return (
    <Box bgColor={bgColor}>
    <Navbar /> 
      <Flex alignItems="center" justifyContent="space-evenly" direction="row" mb={10} flexWrap="wrap">
        <StatBox data={tableData} />
        <NewCustomersStatBox data={tableData} />
        <MostSoldStatBox data={tableData} />
      </Flex>

      <Flex alignItems="center" justifyContent="space-evenly" direction="row" mb={10} flexWrap="wrap">
          <BarChart data={tableData} />

          <LineChart data={tableData} />
      </Flex>

      <Stack direction={{ base: 'column', md: 'row' }} spacing="4"  m={4} justifyContent="center">
        <Form onSubmit={handleFormSubmit} />
        <TableComponent data={tableData} />
      </Stack>

      

      <Flex alignItems="center" justifyContent="space-evenly" mb={10} flexWrap="wrap">
        <PolarChart data={tableData} />
        <EmailForm />
      </Flex>  
      
      <Footer />
    </Box>
  );
};

export default Dashboard;
