import React from 'react'
// import style from "./Styles/main.module.css"

import { Box, Container, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'

const Main = () => {
  return (
<div style={{backgroundColor:'#020202'}}>

        
    <Flex bg= "#3c3823" color="white" mt='1px' justifyContent='space-around'  position='sticky'> 
        <Flex>
        <Image src='https://i.postimg.cc/2yyDKgTp/Ace-Logo-removebg-preview.png'  h="3rem" w='4rem' borderRadius='50%' />
        {/* <Text fontFamily=''>AC</Text> */}
        <p className='sign' color='goldenrod' fontFamily='Tangrine'>Ayush Chandra</p>
         </Flex>
         <Flex gap='2rem '>
            <Link color='goldenrod' m='auto' fontFamily='Tangerine,serif' fontSize='1.5em'textShadow='4px 4px 4px #aaa;'>My Resume</Link>
            <Link color='goldenrod' m='auto' fontFamily='Tangerine,serif' fontSize='1.5em'textShadow='4px 4px 4px #aaa;'>About me</Link>
            <Link color='goldenrod' m='auto' fontFamily='Tangerine,serif' fontSize='1.5em'textShadow='4px 4px 4px #aaa;'>My Projects</Link>
            <Link color='goldenrod' m='auto' fontFamily='Tangerine,serif' fontSize='1.5em'textShadow='4px 4px 4px #aaa;'>Contact me</Link>
         </Flex>
    </Flex>

<Box>
    text
</Box>


    
</div>
  )
}

export default Main