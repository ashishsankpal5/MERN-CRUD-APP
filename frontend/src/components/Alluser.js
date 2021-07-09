import {
  Table,
  Box,
  Thead,
  Tbody,
  Tr,
  Icon,
  Th,
  Td,
  TableCaption,
  Flex,
  Link,
  Button,
} from '@chakra-ui/react';
import { IoPencilSharp, IoTrashBinSharp } from 'react-icons/io5';
import { FetchUser, deleteUser } from '../req/api';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Alluser = () => {
  const [user, SetUser] = useState([]);

  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    const res = await FetchUser();

    SetUser(res.data);
  };
  const deleteHandler = async (id) => {
    await deleteUser(id);
    fetchAllUser();
  };
  return (
    <>
      <Box
        // border="1px solid red"
        rounded="lg"
        p="6"
        m="25"
        bgColor="gray.100"
        shadow="2xl"
      >
        <Table variant="simple" colorScheme="gray">
          <TableCaption>User Information</TableCaption>
          <Thead>
            <Tr bgColor="#89CFF0" color="black">
              <Th>USER ID</Th>
              <Th>USENAME</Th>
              <Th>EMAIL</Th>
              <Th>PHONE</Th>
              <Th>EDIT / DELETE</Th>
            </Tr>
          </Thead>
          {user.map((el) => (
            <Tbody>
              <Tr _hover={{ bgColor: 'gray.400' }} key={el._id}>
                <Td>{el._id}</Td>
                <Td>{el.username}</Td>
                <Td>{el.email}</Td>
                <Td>{el.phone}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Link as={RouterLink} to={`/edit/${el._id}`}>
                      <Button mr="4" colorScheme="teal">
                        <Icon as={IoPencilSharp} color="white" size="sm" />
                      </Button>
                    </Link>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteHandler(el._id)}
                    >
                      <Icon as={IoTrashBinSharp} color="white" size="sm" />
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Box>
    </>
  );
};
export default Alluser;
