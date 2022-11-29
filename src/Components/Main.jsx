import React from 'react'
// import style from "./Styles/main.module.css"

import { Box, Container, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'

const Main = () => {
  return (
<div >

        
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

<Box border='2px solid goldenrod' m='2em' borderRadius='20'>
  <Flex justifyContent='space-around'>

  <Text color='white' fontFamily='Tangerine' fontSize='30px' bgColor="">
    Lorem ipsum dolor sit amet consectetur, <br />
    adipisicing elit. Rerum id <br />
     consequuntur accusamus inventore odit voluptate facilis saepe, itaque sit veritatis. Labore, magnam eos?
  </Text>
  <Container bg='whiteAlpha.500' w='15%'borderRadius='20%'>

  <Image src='https://i.postimg.cc/gJvYZB3r/for-resume-removebg-preview.png' h='200px' borderRadius='10%' />
  </Container>
  </Flex>

    
</Box>


    
</div>
  )
}

export default Main