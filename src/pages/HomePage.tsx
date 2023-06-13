import { Box, Button, Grid, GridItem, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" "footer"`,
        lg: `"main" "footer"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '1fr',
      }}
    >
      <GridItem area="main">
        <Box paddingLeft={2} height="100vh">
          <VStack>
            <Heading fontSize="6xl" fontWeight="extrabold" padding={10}>
              Welcome to CAMIS Website
            </Heading>
            <Link to="/login">
              <Button colorScheme="green" variant="outline">
                Login
              </Button>
            </Link>
          </VStack>
        </Box>
      </GridItem>
      <GridItem area="footer">@2029</GridItem>
    </Grid>
  );
};

export default HomePage;
