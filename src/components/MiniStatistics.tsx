import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdOutlineSchool } from 'react-icons/md';
import { OwnerShipCount__Interface } from '../entities/School';
interface Props {
  schoolData: OwnerShipCount__Interface;
}

const MiniStatistics = ({ schoolData }: Props) => {
  const iconTeal = useColorModeValue('teal.300', 'teal.300');
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Card>
      <CardBody>
        <Flex>
          <Stat>
            <StatLabel>
              {schoolData.ownership_type === 'GOVERNMENT_AIDED'
                ? 'GOV AIDED'
                : schoolData.ownership_type}
            </StatLabel>
            <Flex justifyContent="space-between">
              <Box>
                <StatNumber>{schoolData.total_school}</StatNumber>
                <StatHelpText>Schools</StatHelpText>
              </Box>

              <Box>
                <StatNumber>{schoolData.total_teachers}</StatNumber>
                <StatHelpText>Teachers</StatHelpText>
              </Box>
              <Box>
                <StatNumber>{schoolData.total_students}</StatNumber>
                <StatHelpText>Students</StatHelpText>
              </Box>
            </Flex>
          </Stat>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
