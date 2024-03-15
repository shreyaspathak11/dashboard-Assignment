import React from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Box } from '@chakra-ui/react';

const NewCustomersStatBox = ({ data }) => {
  // Get new customers for the latest year
  const currentYearNewCustomers = data.find(
    item => new Date(item.date).getFullYear() === new Date().getFullYear()
  )?.newCustomers || 0;

  // Get new customers for the previous year
  const lastYearNewCustomers = data.find(
    item => new Date(item.date).getFullYear() === new Date().getFullYear() - 1
  )?.newCustomers || 0;

  // Calculate the difference in new customers between the current year and last year
  const newCustomersDifference = currentYearNewCustomers - lastYearNewCustomers;

  return (
    <Box
      mt={10}
      p={4}
      bgColor="gray.50"
      width="300px" // Set a fixed width
      height="200px" // Set a fixed height
      border="2px solid"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="lg"
      transition="all 0.2s"
      _hover={{
        boxShadow: 'lg',
      }}
      display="flex" // Use Flexbox
      alignItems="center" // Center vertically
      justifyContent="center" // Center horizontally
    >
      <Stat>
        <StatLabel fontSize={"20px"} color="gray">Customers Joined</StatLabel>
        <StatNumber fontSize={"30px"} color={"teal"}>{currentYearNewCustomers}</StatNumber>
        <StatHelpText fontSize={"15px"} color="gray">
          <StatArrow
            type={newCustomersDifference > 0 ? 'increase' : 'decrease'}
            color={newCustomersDifference > 0 ? 'green.400' : 'red.400'}
          />
          {Math.abs(newCustomersDifference)} from last year
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default NewCustomersStatBox;
