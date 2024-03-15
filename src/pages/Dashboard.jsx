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
      <Flex alignItems="center" justifyContent="space-evenly" direction="row" mb="10">
        <StatBox data={tableData} />
        <NewCustomersStatBox data={tableData} />
        <MostSoldStatBox data={tableData} />
      </Flex>

      <Flex alignItems="center" justifyContent="space-evenly" mb="10">
          <Box display="flex" justifyContent="center" >
            <Form onSubmit={handleFormSubmit} />
          </Box>
          <Box>
            <TableComponent data={tableData} />
          </Box>
          </Flex>

        
      <Flex alignItems="center" justifyContent="space-evenly" mb="10">
        <BarChart data={tableData} />
        <LineChart data={tableData} />
      </Flex>
      <Box display="flex" justifyContent="center" mb="10">
        <PolarChart data={tableData} />
      </Box>
      
      <Footer />
    </>
  );
};

export default Dashboard;
