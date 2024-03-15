// Dashboard.js
import React, { useState } from 'react';
import { Box, Divider, Grid } from '@chakra-ui/react';
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

  return (<>
    <Grid templateColumns="1fr 1fr" gap={6} justifyItems="center" alignItems="start" mt={10}>
      <Box>
        <Form onSubmit={handleFormSubmit} />
      </Box>
      <Box>
        <TableComponent data={tableData} />
      </Box>
    </Grid>
    <Chart data={tableData} />
  </>
  );
};

export default Dashboard;