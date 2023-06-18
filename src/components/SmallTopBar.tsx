import { Card, CardBody, HStack, Heading } from '@chakra-ui/react';
import ChooseAcademic from './ChooseAcademic';
const SmallTopBar = () => {
  return (
    <Card mb="4">
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading fontSize="md">Summary</Heading>
          <ChooseAcademic />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default SmallTopBar;
