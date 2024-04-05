import React, { useState } from 'react';
import { Box, Button, Center, ChakraProvider, Icon, Link } from "@chakra-ui/react";
import { getRandomBody } from './util/getRandomBody';
import { getRandomRightHandAccessory } from './util/getRandomRightHandAccessory';
import { getRandomLeftHandAccessory } from './util/getRandomLeftHandAccessory';
import InstagramIcon from './assets/social-icons/InstagramIcon';

const App = () => {
  const [body, setBody] = useState<string | null>(null);
  const [rightHandAccessory, setRightHandAccessory] = useState<string | null>(null);
  const [leftHandAccessory, setLeftHandAccessory] = useState<string | null>(null);
  return (
    <ChakraProvider>
      <Box>
        <Link href="https://www.instagram.com/puns.and.needles/" target='_blank'>
          <Center>
            <Box paddingRight='8px' >
              <InstagramIcon/>
            </Box>
              <h2>
                Art by puns.and.needles
              </h2>
          </Center>
        </Link>
      </Box>
      <Box>
        <Center>
          <h1>Korok Randomizer</h1>
        </Center>
        <Center padding="8px">
          <Button
            background="#0a3011"
            onClick={
                () => { 
                  setBody(getRandomBody());
                  setRightHandAccessory(getRandomRightHandAccessory());
                  setLeftHandAccessory(getRandomLeftHandAccessory());
                }
            }
            size='lg'
          >
            <p>Randomize!</p>
          </Button>
        </Center>
        <Box display="flex" justifyContent="center">
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
          <img src='./src/assets/which-korok-text.png' alt='background' id="korokText"/>
          <img src='./src/assets/background.png' alt='background' id="korokBackground"/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;