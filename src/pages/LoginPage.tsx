import {
  Button,
  FormControl,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import useAuthStore from '../  state-management/auth/store';
import { Navigate } from 'react-router-dom';

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
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      mx="auto"
      w={{ base: '90%', md: 500 }}
      h="100vh"
      justifyContent="center"
    >
      <Heading>Sign up</Heading>
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
      <Button
        disabled={!isValid}
        type="submit"
        variant="outline"
        colorScheme="teal"
      >
        Create acc
      </Button>
    </VStack>
  );
};

export default LoginPage;
