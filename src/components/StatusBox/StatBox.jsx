import React from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Box } from '@chakra-ui/react';

const StatBox = ({ data }) => {
  // Calculate sales for the current year and last year
  const currentYearSales = data.find(item => new Date(item.date).getFullYear() === new Date().getFullYear())?.sales || 0;
  const lastYearSales = data.find(item => new Date(item.date).getFullYear() === new Date().getFullYear() - 1)?.sales || 0;

  // Calculate the difference in sales between the current year and last year
  const salesDifference = currentYearSales - lastYearSales;

  return (
    <Box
    mt={10}
    p={4}
    bgColor="gray.50"
    width="300px" 
    height="200px"
    border="2px solid"
    borderColor="gray.200"
    borderRadius="lg"
    boxShadow="lg"
    transition="all 0.2s"
    _hover={{
      boxShadow: 'lg',
    }}
    display="flex" 
    alignItems="center" 
    justifyContent="center" 
  >
      <Stat>
        <StatLabel fontSize={"20px"} color="gray"> Sales</StatLabel>
        <StatNumber fontSize={"30px"} color={"teal"}>{currentYearSales}</StatNumber>
        <StatHelpText fontSize={"15px"} color="gray">
          <StatArrow
            type={salesDifference > 0 ? 'increase' : 'decrease'}
            color={salesDifference > 0 ? 'green.400' : 'red.400'}
          />
          {Math.abs(salesDifference)} from last year
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default StatBox;
