import React, { useEffect, useState } from 'react';
import { Box, Button, Center, ChakraProvider, Input, Link } from "@chakra-ui/react";
import InstagramIcon from './assets/social-icons/InstagramIcon';
import getKorok from './util/getKorok';
import { getRandomInt } from './util/getRandomInt';
import { convertStringToRandomInt } from './util/convertStringToRandomInt';

const App = () => {
  const [body, setBody] = useState<string | null>(null);
  const [face, setFace] = useState<string | null>(null);
  const [accessories, setAccessories] = useState<string[]>([]);

  const [poofTimer, setPoofTimer] = useState<number>(0);
  const [playPoof, setPlayPoof] = useState<boolean>(false);
  const [poofInt, setPoofInt] = useState<number>(getRandomInt(100));

  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (!poofTimer) { 
      const {
        face,
        body,
        accessories
      } = getKorok(name);
      setBody(body);
      setFace(face);
      setAccessories(accessories);
      setPlayPoof(false);
      return;
    }
    const intervalId = setInterval(() => {
      setPoofTimer(poofTimer - 1);
    }, 200);
    return () => clearInterval(intervalId);
  }, [poofTimer])

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
          <h1>Korok Generator</h1>
        </Center>
        <Center padding="8px">
          <Input 
            width='25%' 
            placeholder='Your Name'
            marginRight='8px'
            onChange={(event) => {
              setName(event.target.value); 
            }
          }/>
          <Button
            background="#0a3011"
            onClick={
                () => {
                  setPlayPoof(true);
                  setPoofTimer(2);
                  setPoofInt(getRandomInt(100));
                }
            }
            size='lg'
          >
            <p>Generate!</p>
          </Button>
        </Center>
        <Box display="flex" justifyContent="center">
          <img src={`./src/assets/poof.gif?${poofInt}`} id="korokPoof" style={{ display: playPoof ? 'block' : 'none'}}/>
          {
            !playPoof && (
              <>
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
              </>
            )
          }
        
          <img src='./src/assets/which-korok-text.png' alt='background' id="korokText"/>
          <img src='./src/assets/background.png' alt='background' id="korokBackground"/>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;