import React from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Box, useColorModeValue } from '@chakra-ui/react';

const StatBox = ({ data }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Calculate sales for the current year and last year
  const currentYearSales = data.find(item => new Date(item.date).getFullYear() === new Date().getFullYear())?.sales || 0;
  const lastYearSales = data.find(item => new Date(item.date).getFullYear() === new Date().getFullYear() - 1)?.sales || 0;

  // Calculate the difference in sales between the current year and last year
  const salesDifference = currentYearSales - lastYearSales;

  return (
    <Box
      mt={{ base: 4, md: 10 }}
      p={4}
      bgColor={bgColor}
      width={{ base: '100%', md: '300px' }}
      height="200px" // Set a fixed height
      border="2px solid"
      borderColor={borderColor}
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
        <StatLabel fontSize={{ base: '14px', md: '20px' }} color="gray">Sales</StatLabel>
        <StatNumber fontSize={{ base: '24px', md: '30px' }} color="teal">{currentYearSales}</StatNumber>
        <StatHelpText fontSize={{ base: '12px', md: '15px' }} color="gray">
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
