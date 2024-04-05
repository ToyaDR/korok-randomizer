import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <h1>Korok Randomizer</h1>
      <>
        <img src='./src/assets/background.png' alt='background' />
      </>
    </ChakraProvider>
  )
}

export default App;