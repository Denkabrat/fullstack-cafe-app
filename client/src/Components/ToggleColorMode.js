import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-bootstrap';
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
    const{colorMode, toggleColorMode} = useColorMode();


    return (
        <Button onClick={() => toggleColorMode()} 
        pos="absolute" 
        top="0"
        right="0"
        m="1rem">
            {colorMode === "dark" ? (
            <SunIcon color="orange.500"/> ) : (
            <MoonIcon color="blue.700"/>
        )}
        </Button>
    );
};

export default ToggleColorMode
