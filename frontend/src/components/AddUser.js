import {
  Heading,
  // Link,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { SingleUser } from '../req/api';

const InitialValues = {
  username: '',
  email: '',
  phone: Number,
};
const AddUser = ({ history }) => {
  const [user, SetUser] = useState(InitialValues);
  const { username, email, phone } = user;

  const changeHandler = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = async () => {
    await SingleUser(user);
    history.push('/alluser');
  };

  return (
    <>
      <Heading textAlign="center">Add a user</Heading>
      <Box
        borderRadius="xl"
        p="6"
        mt="20"
        ml="40"
        mr="40"
        mb="20"
        boxShadow="2xl"
      >
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="Enter username"
            name="username"
            onChange={(e) => changeHandler(e)}
            value={username}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel m="2">Email address</FormLabel>
          <Input
            type="email"
            onChange={(e) => changeHandler(e)}
            name="email"
            value={email}
          />
          <FormHelperText>feel safe to share your email.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel m="2">Phone</FormLabel>
          <Input
            placeholder="Enter phone"
            onChange={(e) => changeHandler(e)}
            name="phone"
            value={phone}
          />
        </FormControl>
        <Button colorScheme="blue" mt="6" onClick={() => AddUserDetails()}>
          SUBMIT
        </Button>
      </Box>
    </>
  );
};
export default AddUser;
