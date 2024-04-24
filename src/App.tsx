import React, { useState } from 'react';
import { Box, Button, Center, ChakraProvider, Link } from "@chakra-ui/react";
import { getRandomBody } from './util/getRandomBody';
import { getAccessories } from './util/getAccessories';
import InstagramIcon from './assets/social-icons/InstagramIcon';
import { getRandomInt } from './util/getRandomInt';
import { getRandomFace } from './util/getRandomFace';

const bodyType: ('standing' | 'flying' | 'handsup')[] = ['standing', 'flying', 'handsup'];
const App = () => {
  const [body, setBody] = useState<string | null>(null);
  const [face, setFace] = useState<string | null>(null);
  const [accessories, setAccessories] = useState<string[]>([]);
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
                  const body = bodyType[getRandomInt(bodyType.length)];
                  setBody(getRandomBody(body));
                  setFace(getRandomFace(body));
                  setAccessories(getAccessories(body));
                }
            }
            size='lg'
          >
            <p>Randomize!</p>
          </Button>
        </Center>
        <Box display="flex" justifyContent="center">
        {
            face
            ? <img src={face} id="korokFace"/> 
            : null
          }
          {
            body
            ? <img src={body} id="korokBody"/> 
            : null
          }
          {
            accessories.map((accessory) => (
              <img src={accessory} id="korokHandAccessory"/> 
            ))
          }
          <img src='./src/assets/which-korok-text.png' alt='background' id="korokText"/>
          <img src='./src/assets/background.png' alt='background' id="korokBackground"/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;