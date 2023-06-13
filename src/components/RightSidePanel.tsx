import {
  AbsoluteCenter,
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';

const RightSidePanel = () => {
  return (
    <Flex direction="column" bg="#f0f2f5" position="relative" w="80%">
      <Box p="5" overflow="auto">
        <Center>
          <Flex h="200vh" direction="column" textAlign="center" color="#41525d">
            <Box>
              <Heading>Main content</Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid doloremque consequuntur inventore ipsa officia provident
                rerum ea aspernatur maiores velit, laudantium natus est,
                architecto voluptatibus expedita cum culpa animi repellendus?
              </Text>
            </Box>
          </Flex>
        </Center>
      </Box>
      <AbsoluteCenter axis="horizontal" bottom="10" flex="1" mt="10">
        <HStack justifyItems="baseline" color="#8696a0">
          <Text fontSize="sm" fontWeight="medium">
            @copy Xcoder
          </Text>
        </HStack>
      </AbsoluteCenter>
    </Flex>
  );
};

export default RightSidePanel;
