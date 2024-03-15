// Dashboard.js
import React, { useState } from 'react';
import { Box, Divider, Flex } from '@chakra-ui/react';
import Form from './Form';
import TableComponent from './Table';
import Chart from './Chart';
import { initialData } from './data';

const Dashboard = () => {
  const [tableData, setTableData] = useState(initialData);

  const handleFormSubmit = (formData) => {
    const newData = {
      id: tableData.length + 1,
      ...formData,
    };
    setTableData([...tableData, newData]);
  };

  return (
    <Flex direction="column" alignItems="center" mt={10}>
      <Box width="50%">
        <Form onSubmit={handleFormSubmit} />
        <Divider my={6} />
        <TableComponent data={tableData} />
      </Box>
      <Divider my={6} />
      <Chart data={tableData} />
    </Flex>
  );
};

export default Dashboard;