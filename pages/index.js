import Head from "next/head"
import {  
          Text,
          useColorMode,
          Heading,
          Flex,
          Stack
        } from "@chakra-ui/react"

import Container from "../components/Container"

export default function Home() {

  const {ColorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  
  return (
    <Container>
      <Head>
          <title>Home- Henrique Lopes</title>
      </Head>
        <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
        
        >
          <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"

          
          >

            <Heading>
              <Text>
                {"Hi, I'm Henrique Lopes Doc"}
              </Text>
            </Heading>
            <Text color={colorSecondary[ColorMode]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.</Text>
          </Flex>
        </Stack>
    </Container>
  )
}
 