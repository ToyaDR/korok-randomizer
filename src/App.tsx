import React, { useState } from 'react';
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { getRandomBody } from './util/getRandomBody';

const App = () => {
  const [body, setBody] = useState<string | null>(null);
  return (
    <ChakraProvider>
      <Box>
        <Box>
          <Button onClick={
            () => { 
              setBody(getRandomBody())  
            }
          }>
            Randomize!
          </Button>
        </Box>
        <Box>
        {
          body
          ? <img src={`./src/assets/bodies/${body}.png`} id="korokBody"/> 
          : null
        }
        <img src='./src/assets/background.png' alt='background' id="korokBackground"/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;