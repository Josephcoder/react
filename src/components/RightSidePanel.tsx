import { Box, Flex, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import useDistrictsTotalSchools from '../hooks/useDistrictsTotalSchools';
import useSchoolCount from '../hooks/useSchoolCounts';
import {
  filterSchoolsTotalByOwnerShip,
  findDistrictNameToCode,
} from '../services/function';
import useCamisQueryStore from '../store';
import { Chart } from './Chart';
import MiniStatisticContainer from './MiniStatisticContainer';
import MiniStatistics from './MiniStatistics';
const RightSidePanel = () => {
  const selectedTermId = useCamisQueryStore((s) => s.camisQuery.termId);
  const { data: count, isLoading } = useSchoolCount(selectedTermId);

  const { data: districtsTotalSchools } = useDistrictsTotalSchools();
  const districtTotalSchools = findDistrictNameToCode(districtsTotalSchools);

  return (
    <Flex direction="column" color="#41525d">
      <Stack spacing="4">
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing="24px">
          {isLoading && <Spinner />}
          {filterSchoolsTotalByOwnerShip(count).map((school) => (
            <MiniStatisticContainer key={school.ownership_type}>
              <MiniStatistics key={school.ownership_type} schoolData={school} />
            </MiniStatisticContainer>
          ))}
        </SimpleGrid>
        <Box bg="#fff" p="5" borderRadius="md">
          <Chart
            categories={districtTotalSchools.map((school) => school.name)}
            series={[
              {
                name: 'Schools',
                data: districtTotalSchools.map(
                  (school) => +school.total_schools
                ),
              },
            ]}
            type="bar"
            title="District total school "
            width="100%"
          />
        </Box>
      </Stack>
    </Flex>
  );
};

export default RightSidePanel;
