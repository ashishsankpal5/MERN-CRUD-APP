import { Button, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Main = () => {
  return (
    <Flex display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Link as={RouterLink} to="/homepage">
        <Button border="2px solid black" borderRadius="full">
          Click for All User
        </Button>
      </Link>
    </Flex>
  );
};
export default Main;
