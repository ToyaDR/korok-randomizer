import React, { useState } from 'react';
import { Box, Button, Center, ChakraProvider } from "@chakra-ui/react";
import { getRandomBody } from './util/getRandomBody';
import { getRandomRightHandAccessory } from './util/getRandomRightHandAccessory';
import { getRandomLeftHandAccessory } from './util/getRandomLeftHandAccessory';

const App = () => {
  const [body, setBody] = useState<string | null>(null);
  const [rightHandAccessory, setRightHandAccessory] = useState<string | null>(null);
  const [leftHandAccessory, setLeftHandAccessory] = useState<string | null>(null);
  return (
    <ChakraProvider>
      <Box>
        <Center>
          <Button onClick={
            () => { 
              setBody(getRandomBody());
              setRightHandAccessory(getRandomRightHandAccessory());
              setLeftHandAccessory(getRandomLeftHandAccessory());
            }
          }>
            Randomize!
          </Button>
        </Center>
        <Box>
        {
          body
          ? <img src={body} id="korokBody"/> 
          : null
        }
        {
          rightHandAccessory
          ? <img src={rightHandAccessory} id="korokHandAccessory"/> 
          : null
        }
        {
          leftHandAccessory
          ? <img src={leftHandAccessory} id="korokHandAccessory"/> 
          : null
        }
        <img src='./src/assets/background.png' alt='background' id="korokBackground"/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;