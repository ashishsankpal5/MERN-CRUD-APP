import {
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserDet, FetchUser } from '../req/api';

const InitialValues = {
  username: '',
  email: '',
  phone: Number,
};
const EditUser = ({ history }) => {
  const [user, SetUser] = useState(InitialValues);
  const { username, email, phone } = user;
  const { id } = useParams();

  useEffect(() => {
    UserInfo();
  }, []);

  const UserInfo = async () => {
    const res = await FetchUser(id);
    SetUser(res.data);
  };

  const changeHandler = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };

  const EditUserDetails = async () => {
    await UserDet(id, user);
    history.push('/alluser');
  };

  return (
    <>
      <Heading textAlign="center">Edit User</Heading>
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
            onChange={(e) => changeHandler(e)}
            name="phone"
            value={phone}
          />
        </FormControl>
        <Button colorScheme="blue" mt="6" onClick={() => EditUserDetails()}>
          SUBMIT
        </Button>
      </Box>
    </>
  );
};
export default EditUser;
