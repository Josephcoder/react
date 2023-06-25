import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BsImage } from 'react-icons/bs';

const MarksPages = () => {
  return (
    <Box bg="#fff" p="5">
      <Stack spacing="4">
        <Heading>Upload marks</Heading>
        <Text as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi
          labore quidem distinctio qui! Esse velit aspernatur nisi totam
          numquam, adipisci dolorem ex eligendi sapiente suscipit voluptas
          veniam. Blanditiis, cum?
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} gap="5">
          <Card variant="outline">
            <CardBody>
              <FormControl isRequired>
                <FormLabel htmlFor="writeUpFile">Upload</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={BsImage} />}
                  />
                  <input type="file" style={{ display: 'none' }}></input>
                  <Input placeholder={'Your file ...'} />
                </InputGroup>
              </FormControl>
            </CardBody>
          </Card>
          <Card variant="outline">
            <CardBody>
              <FormControl isRequired>
                <FormLabel htmlFor="writeUpFile">Upload</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={BsImage} />}
                  />
                  <input type="file" style={{ display: 'none' }}></input>
                  <Input placeholder={'Your file ...'} />
                </InputGroup>
              </FormControl>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default MarksPages;
