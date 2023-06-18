import { Box, Flex, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import useSchoolCount from '../hooks/useSchoolCounts';
import { filterSchoolsTotalByOwnerShip } from '../services/function';
import useCamisQueryStore from '../store';
import DashboardTable from './DashboardTable';
import MiniStatisticContainer from './MiniStatisticContainer';
import MiniStatistics from './MiniStatistics';
const RightSidePanel = () => {
  const selectedTermId = useCamisQueryStore((s) => s.camisQuery.termId);
  const { data, isLoading } = useSchoolCount(selectedTermId);

  return (
    <Flex direction="column" color="#41525d">
      <Stack spacing="4">
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
          {isLoading && <Spinner />}
          {filterSchoolsTotalByOwnerShip(data).map((school) => (
            <MiniStatisticContainer key={school.ownership_type}>
              <MiniStatistics key={school.ownership_type} schoolData={school} />
            </MiniStatisticContainer>
          ))}
        </SimpleGrid>
        <Box bg="#fff" p="5" borderRadius="md">
          <DashboardTable />
        </Box>
      </Stack>
    </Flex>
  );
};

export default RightSidePanel;
