import { Box, Grid, GridItem, SimpleGrid, Stack } from '@chakra-ui/react';
import { DistrictList } from '../components/DistrictList';
import SchoolList from '../components/SchoolList';

const DistrictPage = () => {
  return (
    <Box bg="#fff" p="5">
      <Stack spacing="4">
        <Grid
          templateAreas={{
            base: `"main"`,
            lg: `"aside main"`,
          }}
          templateColumns={{
            base: '1fr',
            lg: '200px 1fr',
          }}
          gap="5"
        >
          <GridItem area="main">
            <SchoolList title="Schools" />
          </GridItem>
          <GridItem area="aside">
            <DistrictList title="Districts" />
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
};

export default DistrictPage;
