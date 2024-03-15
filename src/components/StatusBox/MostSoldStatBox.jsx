import React from 'react';
import { Stat, StatLabel, StatNumber, Box } from '@chakra-ui/react';

const MostSoldStatBox = ({ data }) => {
  // Find the product with the highest sales this year
  const mostSoldProduct = data.reduce((prevProduct, currentProduct) => {
    return currentProduct.sales > prevProduct.sales ? currentProduct : prevProduct;
  }, data[0]);

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
        <StatLabel textColor="gray" fontSize={"20px"}>Most Sold Product</StatLabel>
        <StatNumber textColor="teal" fontSize={"30px"}>{mostSoldProduct.productName}</StatNumber>
      </Stat>
    </Box>
  );
};

export default MostSoldStatBox;
