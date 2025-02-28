import React from 'react'
import { Box , Link , Flex } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
const Navbar = () => {
  return (
   <Box>
    <Flex justify={"space-around"}>
     <Link as={RouterLink} to="/" > Home</Link>
     <Link to="/Notes" as={RouterLink} >Notes</Link>
     </Flex>

   </Box>
)
}

export default Navbar