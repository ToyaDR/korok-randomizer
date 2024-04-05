import React, { useState } from 'react';
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { getRandomBody } from './util/getRandomBody';
import { getRandomRightHandAccessory } from './util/getRandomRightHandAccessory';

const App = () => {
  const [body, setBody] = useState<string | null>(null);
  const [rightHandAccessory, setRightHandAccessory] = useState<string | null>(null);
  return (
    <ChakraProvider>
      <Box>
        <Box>
          <Button onClick={
            () => { 
              setBody(getRandomBody());
              setRightHandAccessory(getRandomRightHandAccessory());
            }
          }>
            Randomize!
          </Button>
        </Box>
        <Box>
        {
          body
          ? <img src={body} id="korokBody"/> 
          : null
        }
        {
          rightHandAccessory
          ? <img src={rightHandAccessory} id="korokRightHandAccessory"/> 
          : null
        }
        <img src='./src/assets/background.png' alt='background' id="korokBackground"/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;