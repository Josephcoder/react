import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { z } from 'zod';
import useAuthStore from '../  state-management/auth/store';
import ColorModeSwitch from '../components/ColorModeSwitch';
import NavBar from '../components/NavBar';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters.' }),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters.' }),
});
export type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { user, login } = useAuthStore();

  const onSubmit = (data: FormData) => {
    login(data);
  };

  if (user) return <Navigate replace to="/dashboard" />;

  return (
    <>
      <NavBar />
      <Center>
        <Box>
          <Stack spacing="4">
            <VStack spacing="2" mt={10}>
              <Heading as="h1" fontSize="24px" fontWeight="300">
                CAMIS ADMIN
              </Heading>
              <Heading as="h2" fontSize="2xl">
                Sign in
              </Heading>
            </VStack>
            <Card w="400px" borderColor="#d8dee4" variant="outline">
              <CardBody>
                <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing="4">
                  <FormControl>
                    <FormControl>Username</FormControl>
                    <Input
                      {...register('username', {})}
                      name="username"
                      placeholder="Enter username..."
                    />
                    {errors.username && (
                      <Text color="red.500">{errors.username.message}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormControl>Password</FormControl>
                    <Input
                      {...register('password')}
                      name="password"
                      placeholder="Enter password..."
                    />
                    {errors.password && (
                      <Text color="red.500">{errors.password.message}</Text>
                    )}
                  </FormControl>
                  <Box>
                    <Button
                      disabled={!isValid}
                      type="submit"
                      color="#fff"
                      colorScheme="teal"
                      size="sm"
                      _hover={{ bg: '#2c974b' }}
                    >
                      Sign in
                    </Button>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default LoginPage;
