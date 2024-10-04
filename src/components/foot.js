import React from "react";
import { Box , Button , Image, Flex , Spacer , Text, Stack, VStack , Link , isExternal, ChakraProvider} from "@chakra-ui/react";

/* Imagenes */
import group23 from '../media/images/group-2-3.png';
import group41 from '../media/images/group-4-1.png';
import { transform } from "framer-motion";

export default function Foot() {
    return (
        <>
        <ChakraProvider>
            <div class="desktoplg">
            <VStack marginTop='10%'>
                <Flex bg='rgb(23,25,38)' w='100%' h='45vh' color='white' direction='column' alignItems='center' justify='center'>
                    <Stack direction='row' marginBottom='6%'>
                        <Link href='https://www.linkedin.com/company/dinex-mx/' isExternal><Image src={group41} w='10vh' alt="group-4-1" transition='transform 0.3s' _hover={{transform: 'scale(1.3)'}} _active={{transform: 'scale(1)'}}></Image></Link>
                    </Stack>
                    <Text fontSize='24px' fontFamily='Roboto-Light'>Copyright © 2024 Distribuidora Industrial Express - Todos los derechos reservados.</Text>
                </Flex>
            </VStack>
            </div>
            <div class="desktopsm">
            <VStack marginTop='10%'>
                <Flex bg='rgb(23,25,38)' w='100%' h='45vh' color='white' direction='column' alignItems='center' justify='center'>
                    <Stack direction='row' marginBottom='6%'>
                        <Link href='https://www.linkedin.com/company/dinex-mx/' isExternal><Image src={group41} w='10vh' alt="group-4-1" transition='transform 0.3s' _hover={{transform: 'scale(1.3)'}} _active={{transform: 'scale(1)'}}></Image></Link>
                    </Stack>
                    <Text fontSize='14px' fontFamily='Roboto-Light'>Copyright © 2024 Distribuidora Industrial Express - Todos los derechos reservados.</Text>
                </Flex>
            </VStack>
            </div>
            <div class="laptop">
            <VStack marginTop='10%'>
                <Flex bg='rgb(23,25,38)' w='100%' h='45vh' color='white' direction='column' alignItems='center' justify='center'>
                    <Stack direction='row' marginBottom='6%'>
                        <Link href='https://www.linkedin.com/company/dinex-mx/' isExternal><Image src={group41} w='10vh' alt="group-4-1" transition='transform 0.3s' _hover={{transform: 'scale(1.3)'}} _active={{transform: 'scale(1)'}}></Image></Link>
                    </Stack>
                    <Text fontSize='14px' fontFamily='Roboto-Light'>Copyright © 2024 Distribuidora Industrial Express - Todos los derechos reservados.</Text>
                </Flex>
            </VStack>
            </div>
            <div class="tablet">
            <VStack marginTop='10%'>
                <Flex bg='rgb(23,25,38)' w='100%' h='45vh' color='white' direction='column' alignItems='center' justify='center'>
                    <Stack direction='row' marginBottom='8%'>
                        <Link href='https://www.linkedin.com/company/dinex-mx/' isExternal><Image src={group41} alt="group-4-1" transition='transform 0.3s' _hover={{transform: 'scale(1.3)'}} _active={{transform: 'scale(1)'}}></Image></Link>
                    </Stack>
                    <Text fontSize='14px' textAlign='center' w='98%' fontFamily='Roboto-Light'>Copyright © 2024 Distribuidora Industrial Express - Todos los derechos reservados.</Text>
                </Flex>
            </VStack>
            </div>
            <div class="mobile">
            <VStack marginTop='10%'>
                <Flex bg='rgb(23,25,38)' w='100%' h='45vh' color='white' direction='column' alignItems='center' justify='center'>
                    <Stack direction='row' marginBottom='8%'>
                        <Link href='https://www.linkedin.com/company/dinex-mx/' isExternal><Image src={group41} alt="group-4-1" transition='transform 0.3s' _hover={{transform: 'scale(1.3)'}} _active={{transform: 'scale(1)'}}></Image></Link>
                    </Stack>
                    <Text fontSize='12px' textAlign='center' w='98%' fontFamily='Roboto-Light'>Copyright © 2024 Distribuidora Industrial Express - Todos los derechos reservados.</Text>
                </Flex>
            </VStack>
            </div>
        </ChakraProvider>
        </>
    );
}