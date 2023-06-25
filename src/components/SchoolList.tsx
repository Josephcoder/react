import {
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { School__Interface } from '../entities/School';
import useCamisQueryStore from '../store';
import useDistrictSchools from '../hooks/useDistrictSchools';

export function School({
  no,
  code,
  full_name,
  short_name,
  ownership_type,
}: School__Interface) {
  return (
    <Tr>
      <Td>{no}</Td>
      <Td>{code}</Td>
      <Td>{full_name}</Td>
      <Td>{short_name}</Td>
      <Td>{ownership_type}</Td>
    </Tr>
  );
}
const SchoolList = ({ title }: { title: string }) => {
  const selectedDistrictCode = useCamisQueryStore(
    (s) => s.camisQuery.districtCode
  );
  const { data, isLoading } = useDistrictSchools(selectedDistrictCode);
  console.log(data);

  return (
    <Stack divider={<StackDivider w="50%" />}>
      <Heading as="h4" fontWeight="300" fontSize="24px">
        {title}
      </Heading>
      <Card variant="outline" mt="2">
        <CardBody>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Code</Th>
                  <Th>Name</Th>
                  <Td>Short name</Td>
                  <Th>Ownership</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((school, index) => (
                  <School
                    no={index + 1}
                    key={school.code}
                    code={school.code}
                    full_name={school.full_name}
                    short_name={school.short_name}
                    ownership_type={school.ownership_type}
                  />
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>No</Th>
                  <Th>Code</Th>
                  <Th>Name</Th>
                  <Td>Short name</Td>
                  <Th>Ownership</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default SchoolList;
