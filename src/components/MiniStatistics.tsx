import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdOutlineSchool } from 'react-icons/md';
import { SchoolData } from '../entities/School';
interface Props {
  schoolData: SchoolData;
}

const MiniStatistics = ({ schoolData }: Props) => {
  const iconTeal = useColorModeValue('teal.300', 'teal.300');
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Card>
      <CardBody>
        <HStack flexDirection="row" gap="10" justifyContent="space-around">
          <Flex>
            <Box>
              <Heading
                fontSize="md"
                color="gray.400"
                fontWeight="bold"
                pb=".1rem"
              >
                {schoolData.ownership_type === 'GOVERNMENT_AIDED'
                  ? 'GOV AIDED'
                  : schoolData.ownership_type}
              </Heading>
              <HStack mt="2">
                <Badge
                  as="span"
                  fontSize="md"
                  paddingX="1"
                  bg="teal"
                  color="#fff"
                >
                  {schoolData.total_school}
                </Badge>
                <Text>Schools</Text>
              </HStack>
              <HStack mt="2">
                <Badge
                  as="span"
                  fontSize="md"
                  paddingX="1"
                  bg="teal"
                  color="#fff"
                >
                  {schoolData.total_teachers}
                </Badge>
                <Text>Teachers</Text>
              </HStack>
              <HStack mt="2">
                <Badge
                  as="span"
                  fontSize="md"
                  paddingX="1"
                  bg="teal"
                  color="#fff"
                >
                  {schoolData.total_students}
                </Badge>
                <Text>Students</Text>
              </HStack>
            </Box>
          </Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'12px'}
          >
            <Icon
              as={MdOutlineSchool}
              h="45px"
              w="45px"
              bg={iconTeal}
              p="1"
              borderRadius="12px"
            />
          </Flex>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
