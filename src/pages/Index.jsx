import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="xl" mb={4}>Featured Product</Heading>
        <Image src="/images/featured-product.jpg" alt="Featured Product" boxSize="300px" mx="auto" mb={4} />
        <Text fontSize="lg" mb={4}>Check out our latest and greatest electronic gadgets!</Text>
        <Button colorScheme="blue">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Our Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={4}>
                <Text fontWeight="bold">Product 1</Text>
                <Text>$199.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={4}>
                <Text fontWeight="bold">Product 2</Text>
                <Text>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={4}>
                <Text fontWeight="bold">Product 3</Text>
                <Text>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product4.jpg" alt="Product 4" />
              <Box p={4}>
                <Text fontWeight="bold">Product 4</Text>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <Flex gap={4}>
            <Link href="#"><FaFacebook size="24" /></Link>
            <Link href="#"><FaTwitter size="24" /></Link>
            <Link href="#"><FaInstagram size="24" /></Link>
          </Flex>
          <Text>Contact us: info@electroshop.com</Text>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Link href="#">Terms of Service</Link>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;