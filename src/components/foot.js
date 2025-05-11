import React from "react";

/*Chakra Ui */
import { Box, Button, Image, Flex, Spacer, Text, Stack, VStack, Link, isExternal, ChakraProvider, HStack, IconButton } from "@chakra-ui/react";

/* Icon React */
import { LuFacebook, LuInstagram, LuLinkedin, LuPhone, LuVoicemail } from "react-icons/lu";

/* Router */
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

/* Imagenes */
import logo from '../media/images/logo-dinex-soluciones-industriales-small.png';
import group23 from '../media/images/group-2-3.png';
import group41 from '../media/images/group-4-1.png';
import { transform } from "framer-motion";
import servicios from '../media/images/servicios.png';

export default function Foot() {
    return (
        <>
            <ChakraProvider>
                <div class="desktoplg">
                    <VStack marginTop='10%' fontFamily='Roboto-Regular'> 
                        <Box bgImage={servicios} bgRepeat='no-repeat' bgSize='cover' w='100%' h='100%' color='white'>
                            <Flex bgColor='rgba(0,0,0,0.6)' direction='column' w='100%' h='100%' alignItems='center' justify='center'>
                                <HStack justify='center' alignItems='left' w='100%' h='100%' p='2%'>
                                    <VStack letterSpacing='0.10vw' w='100%'>
                                        <Flex transform='scale(1)' justify='center' w='100%'><Image src={logo} w='50%'></Image></Flex>
                                        <HStack w='100%'>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='2xl' as='span'> Navegacion</Text></Text>
                                                <Text color='rgb(255,255,255)' fontSize='2xl' letterSpacing='0.8px ' fontFamily='artegra-600'>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Principal</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/nosotros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Nosotros</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/servicios'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Servicios</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/suministros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Suministros industriales</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/contacto'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Contacto</Text></ChakraLink></Text>
                                                </Text>
                                            </VStack>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='2xl' as='span'> Siguenos</Text></Text>
                                                <VStack w='100%'>
                                                    <VStack textAlign='left' w='75%'>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='2xl' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='sm'><LuVoicemail /></IconButton>Cotizaciones</Button></Link>
                                                        <Spacer/>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='2xl' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='sm'><LuVoicemail /></IconButton>Informacion</Button></Link>
                                                        <Spacer/>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank'  transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button  fontSize='2xl' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='sm'><LuVoicemail /></IconButton>Finanzas</Button></Link>
                                                    </VStack>
                                                    <Spacer/>
                                                    <HStack>
                                                        <Link href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='green' size='lg'><LuPhone /></IconButton></Link>
                                                        <IconButton colorScheme='blue' size='lg' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><LuFacebook /></IconButton>
                                                        <Link href='https://www.linkedin.com/company/dinex-mx/' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='cyan' size='lg'><LuLinkedin /></IconButton></Link>
                                                        <IconButton colorScheme='pink' size='lg' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><LuInstagram /></IconButton>
                                                    </HStack>
                                                </VStack>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                    <VStack w='50%' letterSpacing='0.10vw' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'  fontSize='2xl'>
                                        <Text fontSize='3xl' color='rgb(255,230,0)' fontWeight='bold'>_<Text fontSize='2xl' color='rgb(255,255,255)' as='span'> Nosotros</Text></Text>
                                        <Text>
                                            Matriz CDMX<br />
                                            Zamora No.93, Col. Condesa
                                            C.P. 06140 México, CDMX
                                            Tel. (5255) 5286 1067
                                        </Text>
                                        <Text>
                                            Sucursal GUADALAJARA<br />
                                            Calle Dr. J. Leonardo Oliva 73
                                            Col. General Real
                                            Guadalajara, Jalisco, C.P. 44400
                                            Tel. (33) 3647 8498
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Flex>
                        </Box>
                    </VStack>
                </div>
                <div class="desktopsm">
                    <VStack marginTop='10%' fontFamily='Roboto-Regular'> 
                        <Box bgImage={servicios} bgRepeat='no-repeat' bgSize='cover' w='100%' h='100%' color='white'>
                            <Flex bgColor='rgba(0,0,0,0.6)' direction='column' w='100%' h='100%' alignItems='center' justify='center'>
                                <HStack justify='center' alignItems='left' w='100%' h='100%' p='2%'>
                                    <VStack letterSpacing='0.10vw' w='100%'>
                                        <Flex transform='scale(1)' justify='center' w='100%'><Image src={logo} w='50%'></Image></Flex>
                                        <HStack w='100%'>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='14px' as='span'> Navegacion</Text></Text>
                                                <Text color='rgb(255,255,255)' fontSize='14px' letterSpacing='0.8px ' fontFamily='artegra-600'>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Principal</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/nosotros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Nosotros</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/servicios'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Servicios</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/suministros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Suministros industriales</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/contacto'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Contacto</Text></ChakraLink></Text>
                                                </Text>
                                            </VStack>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='14px' as='span'> Siguenos</Text></Text>
                                                <VStack w='100%'>
                                                    <VStack textAlign='left' w='75%'>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Cotizaciones</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Informacion</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank'  transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button  fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Finanzas</Button></Link>
                                                    </VStack>
                                                    <HStack>
                                                        <Link href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='green' size='sm'><LuPhone /></IconButton></Link>
                                                        <IconButton colorScheme='blue' size='sm' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><LuFacebook /></IconButton>
                                                        <Link href='https://www.linkedin.com/company/dinex-mx/' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='cyan' size='sm'><LuLinkedin /></IconButton></Link>
                                                        <IconButton colorScheme='pink' size='sm' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><LuInstagram /></IconButton>
                                                    </HStack>
                                                </VStack>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                    <VStack w='50%' letterSpacing='0.10vw' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'  fontSize='14px'>
                                        <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text fontSize='14px' color='rgb(255,255,255)' as='span'> Nosotros</Text></Text>
                                        <Text>
                                            Matriz CDMX<br />
                                            Zamora No.93, Col. Condesa
                                            C.P. 06140 México, CDMX
                                            Tel. (5255) 5286 1067
                                        </Text>
                                        <Text>
                                            Sucursal GUADALAJARA<br />
                                            Calle Dr. J. Leonardo Oliva 73
                                            Col. General Real
                                            Guadalajara, Jalisco, C.P. 44400
                                            Tel. (33) 3647 8498
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Flex>
                        </Box>
                    </VStack>
                </div>
                <div class="laptop">
                    <VStack marginTop='10%' fontFamily='Roboto-Regular'>
                        <Box bgImage={servicios} bgRepeat='no-repeat' bgSize='cover' w='100%' h='100%' color='white'>
                            <Flex bgColor='rgba(0,0,0,0.6)' direction='column' w='100%' h='100%' alignItems='center' justify='center'>
                                <HStack justify='center' alignItems='left' w='100%' h='100%' p='2%'>
                                    <VStack letterSpacing='0.10vw' w='100%'>
                                        <Flex transform='scale(1)' justify='center' w='100%'><Image src={logo} w='50%'></Image></Flex>
                                        <HStack w='100%'>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='14px' as='span'> Navegacion</Text></Text>
                                                <Text color='rgb(255,255,255)' fontSize='14px' letterSpacing='0.8px ' fontFamily='artegra-600'>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Principal</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/nosotros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Nosotros</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/servicios'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Servicios</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/suministros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Suministros industriales</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)' }} _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/contacto'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Contacto</Text></ChakraLink></Text>
                                                </Text>
                                            </VStack>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='14px' as='span'> Siguenos</Text></Text>
                                                <VStack w='100%'>
                                                    <VStack textAlign='left' w='75%'>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Cotizaciones</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Informacion</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank'  transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button  fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Finanzas</Button></Link>
                                                    </VStack>
                                                    <HStack>
                                                        <Link href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='green' size='sm'><LuPhone /></IconButton></Link>
                                                        <IconButton colorScheme='blue' size='sm' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><LuFacebook /></IconButton>
                                                        <Link href='https://www.linkedin.com/company/dinex-mx/' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='cyan' size='sm'><LuLinkedin /></IconButton></Link>
                                                        <IconButton colorScheme='pink' size='sm' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><LuInstagram /></IconButton>
                                                    </HStack>
                                                </VStack>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                    <VStack w='50%' letterSpacing='0.10vw' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'  fontSize='14px'>
                                        <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text fontSize='14px' color='rgb(255,255,255)' as='span'> Nosotros</Text></Text>
                                        <Text>
                                            Matriz CDMX<br />
                                            Zamora No.93, Col. Condesa
                                            C.P. 06140 México, CDMX
                                            Tel. (5255) 5286 1067
                                        </Text>
                                        <Text>
                                            Sucursal GUADALAJARA<br />
                                            Calle Dr. J. Leonardo Oliva 73
                                            Col. General Real
                                            Guadalajara, Jalisco, C.P. 44400
                                            Tel. (33) 3647 8498
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Flex>
                        </Box>
                    </VStack>
                </div>
                <div class="tablet">
                    <VStack marginTop='10%' fontFamily='Roboto-Regular'>
                        <Box bgImage={servicios} bgRepeat='no-repeat' bgSize='cover' w='100%' h='100%' color='white'>
                            <Flex bgColor='rgba(0,0,0,0.6)' direction='column' w='100%' h='100%' alignItems='center' justify='center'>
                                <HStack justify='center' alignItems='left' w='100%' h='100%' p='2%'>
                                    <VStack letterSpacing='0.10vw' w='100%'>
                                        <Flex transform='scale(1)' justify='center' w='100%'><Image src={logo} w='50%'></Image></Flex>
                                        <HStack w='100%'>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='14px' as='span'> Navegacion</Text></Text>
                                                <Text color='rgb(255,255,255)' fontSize='14px' letterSpacing='0.8px ' fontFamily='artegra-600'>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Principal</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/nosotros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Nosotros</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/servicios'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Servicios</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/suministros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Suministros industriales</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/contacto'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Contacto</Text></ChakraLink></Text>
                                                </Text>
                                            </VStack>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='14px' as='span'> Siguenos</Text></Text>
                                                <VStack w='100%'>
                                                    <VStack textAlign='left' w='75%'>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Cotizaciones</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Informacion</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank'  transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><Button  fontSize='14px' marginTop='1%' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Finanzas</Button></Link>
                                                    </VStack>
                                                    <HStack>
                                                        <Link href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transition='0.3s' _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='green' size='sm'><LuPhone /></IconButton></Link>
                                                        <IconButton colorScheme='blue' size='sm' transition='0.3s' _active={{transform: 'scale(0.9)'}}><LuFacebook /></IconButton>
                                                        <Link href='https://www.linkedin.com/company/dinex-mx/' target='_blank' transition='0.3s' _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='cyan' size='sm'><LuLinkedin /></IconButton></Link>
                                                        <IconButton colorScheme='pink' size='sm' transition='0.3s' _active={{transform: 'scale(0.9)'}}><LuInstagram /></IconButton>
                                                    </HStack>
                                                </VStack>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                    <VStack w='50%' letterSpacing='0.10vw' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'  fontSize='14px'>
                                        <Text fontSize='25px' color='rgb(255,230,0)' fontWeight='bold'>_<Text fontSize='14px' color='rgb(255,255,255)' as='span'> Nosotros</Text></Text>
                                        <Text>
                                            Matriz CDMX<br />
                                            Zamora No.93, Col. Condesa
                                            C.P. 06140 México, CDMX
                                            Tel. (5255) 5286 1067
                                        </Text>
                                        <Text>
                                            Sucursal GUADALAJARA<br />
                                            Calle Dr. J. Leonardo Oliva 73
                                            Col. General Real
                                            Guadalajara, Jalisco, C.P. 44400
                                            Tel. (33) 3647 8498
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Flex>
                        </Box>
                    </VStack>
                </div>
                <div class="mobile">
                    <VStack marginTop='10%' fontFamily='Montserrat-Medium'>
                        <Box bgImage={servicios} bgRepeat='no-repeat' bgSize='cover' w='100%' h='45vh' color='white'>
                            <Flex bgColor='rgba(0,0,0,0.6)' direction='column' w='100%' h='100%' alignItems='center' justify='center'>
                                <VStack overflowX='hidden' alignItems='center' w='100%' h='100%' p='1%' overflow='auto'>
                                    <br />
                                    <VStack letterSpacing='0.10vw' w='100%' h='100%'>
                                        <HStack h='100%' w='100%'>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='16px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='12px' as='span'> Navegacion</Text></Text>
                                                <Text color='rgb(255,255,255)' fontSize='12px' letterSpacing='0.8px ' fontFamily='artegra-600'>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Principal</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/nosotros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Nosotros</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/servicios'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Servicios</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/suministros'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Suministros industriales</Text></ChakraLink></Text>
                                                    <Text marginTop='4%' color='rgb(255,230,0)' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}><ChakraLink as={ReactRouterLink} to={'/contacto'}>● <Text as='span' textDecoration='underline' color='rgb(255,255,255)'>Contacto</Text></ChakraLink></Text>
                                                </Text>
                                            </VStack>
                                            <VStack w='100%' h='100%' bgColor='rgba(0,0,0,0.4)' p='2% 1% 2% 1%' borderRadius='20px'>
                                                <Text fontSize='16px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='12px' as='span'> Siguenos</Text></Text>
                                                <VStack w='100%' >
                                                    <Box textAlign='left' w='75%'>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transition='0.3s' _active={{transform: 'scale(0.9)'}}><Button fontSize='12px' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Cotizaciones</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transition='0.3s' _active={{transform: 'scale(0.9)'}}><Button fontSize='12px' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Informacion</Button></Link>
                                                        <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank'  transition='0.3s' _active={{transform: 'scale(0.9)'}}><Button fontSize='12px' colorScheme='' p='0' m='0'><IconButton colorScheme='red' marginRight='5%' size='xs'><LuVoicemail /></IconButton>Finanzas</Button></Link>
                                                    </Box>
                                                    <HStack>
                                                        <Link href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transition='0.3s' _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='green' size='xs'><LuPhone /></IconButton></Link>
                                                        <IconButton colorScheme='blue' size='xs' transition='0.3s' _hover={{transform: 'scale(1.2)'}} _active={{transform: 'scale(0.9)'}}><LuFacebook /></IconButton>
                                                        <Link href='https://www.linkedin.com/company/dinex-mx/' target='_blank' transition='0.3s'  _active={{transform: 'scale(0.9)'}}><IconButton colorScheme='cyan' size='xs'><LuLinkedin /></IconButton></Link>
                                                        <IconButton colorScheme='pink' size='xs' transition='0.3s' _active={{transform: 'scale(0.9)'}}><LuInstagram /></IconButton>
                                                    </HStack>
                                                </VStack>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                    <VStack w='100%' h='100%' fontSize='12px' letterSpacing='0.10vw' p='2% 1% 2% 1%' bgColor='rgba(0,0,0,0.4)' borderRadius='20px'>
                                        <Text fontSize='16px' color='rgb(255,230,0)' fontWeight='bold'>_<Text color='rgb(255,255,255)' fontSize='12px' as='span'> Nosotros</Text></Text>
                                        <Text>
                                            Matriz CDMX<br />
                                            Zamora No.93, Col. Condesa
                                            C.P. 06140 México, CDMX
                                            Tel. (5255) 5286 1067
                                        </Text>
                                        <Text>
                                            Sucursal GUADALAJARA<br />
                                            Calle Dr. J. Leonardo Oliva 73
                                            Col. General Real
                                            Guadalajara, Jalisco, C.P. 44400
                                            Tel. (33) 3647 8498
                                        </Text>
                                    </VStack>
                                </VStack>
                            </Flex>
                        </Box>
                    </VStack>
                </div>
            </ChakraProvider>
        </>
    );
}