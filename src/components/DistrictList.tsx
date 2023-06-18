import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import useDistrictsTotalSchools from '../hooks/useDistrictsTotalSchools';
import { findDistrictNameToCode } from '../services/function';
import useCamisQueryStore from '../store';

export function DistrictList({ title }: { title: string }) {
  const { data } = useDistrictsTotalSchools();
  const setSelectedDistrictCode = useCamisQueryStore((s) => s.setDistrictCode);

  return (
    <Box>
      <Stack divider={<StackDivider w="50%" />}>
        <Heading as="h4" fontWeight="300" fontSize="24px">
          {title}
        </Heading>
        <Card overflow="auto" variant="outline" mt="2">
          <CardBody>
            <Box h="50vh">
              <List>
                {findDistrictNameToCode(data).map((districtTotalSchool) => (
                  <ListItem
                    key={districtTotalSchool.code}
                    onClick={() =>
                      setSelectedDistrictCode(districtTotalSchool.code)
                    }
                    _hover={{
                      cursor: 'pointer',
                      backgroundColor: '#f5f6f6',
                      px: '3',
                    }}
                    py="3"
                  >
                    <Box flex="1" pr="4">
                      <Flex justify="space-between" align="baseline">
                        <Text fontWeight="medium">
                          {districtTotalSchool.name}
                        </Text>
                        <Badge fontSize="xs" colorScheme="teal">
                          {districtTotalSchool.total_schools}
                        </Badge>
                      </Flex>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
}
