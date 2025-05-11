import '../App.css';
import React from 'react';
import { Helmet } from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Link, Spacer, Box, Flex, HStack, VStack, Stack, Center, Image, Text, Button, extendTheme, Heading, AspectRatio, Input, Textarea, FormLabel, FormControl, IconButton } from '@chakra-ui/react';

/* Hook Form */
import { useForm } from 'react-hook-form';

/* Emailjs */
import emailjs from 'emailjs-com';

/* Icon React */
import { LuFacebook, LuInstagram, LuLinkedin, LuPhone, LuVoicemail } from "react-icons/lu";

/* Components */
import Header from '../components/header.js';
import Foot from '../components/foot.js';
import Whatsapp from '../components/whatsapp.js';
import Catalogo from '../components/catalogo.js';

/* Imagenes */
import group2365 from '../media/images/group-2-3-65x65.png';
import monterrey from '../media/images/monterrey.png';
import cdmex from '../media/images/cd-mexico.png';
import guadalajara from '../media/images/guadalajara.png';
import dinexmapa from '../media/images/dienex-mapa-1536x1152.png';
import contacto from '../media/images/contacto.png';

import { Form } from 'react-router-dom';

export default function Contacto() {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_y4ffpk1', 'template_kwx4qcd', e.target, '25CTB5vHrj6le9UH6')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> CONTACTO - DINEX - Servicios Industriales</title>
            </Helmet>
            <ChakraProvider>
                <div class="desktoplg">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={contacto} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='80px' color='white' fontSize='80px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Contactos</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <br />
                        <Center><Text color='rgb(140,140,140)' fontWeight='bold' fontSize='3xl' marginBottom='2%'>Contactos:</Text></Center>
                        <Flex>
                        <VStack w='100%' textAlign='center' fontSize='2xl' fontFamily='Roboto-Regular'>
                            <HStack w='90%' justify='center' marginBottom='2.5%' spacing={9}>
                                <Link w='45%' href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Servicio al cliente</Text>
                                        <Text letterSpacing='0.10vw'>812-894-3229</Text>
                                    </VStack>
                                </Link>
                                <Link w='45%' href='https://api.whatsapp.com/send?phone=528128675783' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contacto</Text>
                                        <Text letterSpacing='0.10vw'>812-867-5783</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <HStack w='90%' justify='center'>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contabilidad y Finanzas</Text>
                                        <Text letterSpacing='0.10vw'>facturacion@din-ex.com</Text>
                                    </VStack>
                                </Link>
                                <Spacer/>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Información - Servicio a cliente</Text>
                                        <Text letterSpacing='0.10vw'>contacto@din-ex.com</Text>
                                    </VStack>
                                </Link>
                                <Spacer/>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Cotizaciones - Seguimiento de pedidos</Text>
                                        <Text letterSpacing='0.10vw'>ventas@din-ex.com</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <Spacer />
                        </VStack>
                        </Flex>
                        <hr />
                        <VStack width='100%'>
                            <VStack w='90%' fontFamily='Roboto-Regular'>
                                <Heading fontSize='3xl' color='rgb(140,140,140)'>Ubicacion: </Heading>
                                <HStack w='76%' alignItems='center' justify='center' margin='1% 0 1% 0'>
                                    <Image w='11%' src={monterrey} alt='monterrey'></Image>
                                    <Spacer />
                                    <Image w='11%' src={cdmex} alt='cdmex'></Image>
                                    <Spacer />
                                    <Image w='11%' src={guadalajara} alt='guadalajara'></Image>
                                </HStack>
                                <HStack alignItems='start' textAlign='center' w='100%' color='rgb(140,140,140)' fontWeight='bold' fontSize='2xl' letterSpacing='0.18vw'>
                                    <Text w='100%' >Dinex Monterrey (matriz)</Text>
                                    <Text w='100%' >Dinex CDMX</Text>
                                    <Text w='100%' >Dinex Guadalajara</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                        <br />
                        <Foot />
                    </Stack>
                </div>
                <div class="desktopsm">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={contacto} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Contactos</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <br />
                        <Center><Text color='rgb(140,140,140)' fontWeight='bold' fontSize='18px' marginBottom='2%'>Contactos:</Text></Center>
                        <Flex>
                        <VStack w='100%' textAlign='center' fontSize='16px' fontFamily='Roboto-Regular'>
                            <HStack w='90%' justify='center' marginBottom='2.5%' spacing={9}>
                                <Link w='45%' href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Servicio al cliente</Text>
                                        <Text letterSpacing='0.10vw'>812-894-3229</Text>
                                    </VStack>
                                </Link>
                                <Link w='45%' href='https://api.whatsapp.com/send?phone=528128675783' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contacto</Text>
                                        <Text letterSpacing='0.10vw'>812-867-5783</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <HStack w='90%' justify='center'>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contabilidad y Finanzas</Text>
                                        <Text letterSpacing='0.10vw'>facturacion@din-ex.com</Text>
                                    </VStack>
                                </Link>
                                <Spacer/>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Información - Servicio a cliente</Text>
                                        <Text letterSpacing='0.10vw'>contacto@din-ex.com</Text>
                                    </VStack>
                                </Link>
                                <Spacer/>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Cotizaciones - Seguimiento de pedidos</Text>
                                        <Text letterSpacing='0.10vw'>ventas@din-ex.com</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <Spacer />
                        </VStack>
                        </Flex>
                        <hr />
                        <VStack width='100%'>
                            <VStack w='90%' fontFamily='Roboto-Regular'>
                                <Heading fontSize='19px' color='rgb(140,140,140)'>Ubicacion: </Heading>
                                <HStack w='76%' alignItems='center' justify='center' margin='1% 0 1% 0'>
                                    <Image w='11%' src={monterrey} alt='monterrey'></Image>
                                    <Spacer />
                                    <Image w='11%' src={cdmex} alt='cdmex'></Image>
                                    <Spacer />
                                    <Image w='11%' src={guadalajara} alt='guadalajara'></Image>
                                </HStack>
                                <HStack alignItems='start' textAlign='center' w='100%' color='rgb(140,140,140)' fontWeight='bold' fontSize='16px' letterSpacing='0.18vw'>
                                    <Text w='100%' >Dinex Monterrey (matriz)</Text>
                                    <Text w='100%' >Dinex CDMX</Text>
                                    <Text w='100%' >Dinex Guadalajara</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                        <br />
                        <Foot />
                    </Stack>
                </div>
                <div class="laptop">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={contacto} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Contactos</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <br />
                        <Center><Text color='rgb(140,140,140)' fontWeight='bold' fontSize='18px' marginBottom='2%'>Contactos:</Text></Center>
                        <Flex>
                        <VStack w='100%' textAlign='center' fontSize='14px' fontFamily='Roboto-Regular'>
                            <HStack w='90%' justify='center' marginBottom='2.5%' spacing={9}>
                                <Link w='45%' href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Servicio al cliente</Text>
                                        <Text letterSpacing='0.10vw'>812-894-3229</Text>
                                    </VStack>
                                </Link>
                                <Link w='45%' href='https://api.whatsapp.com/send?phone=528128675783' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contacto</Text>
                                        <Text letterSpacing='0.10vw'>812-867-5783</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <HStack w='90%' justify='center'>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contabilidad y Finanzas</Text>
                                        <Text letterSpacing='0.10vw'>facturacion@din-ex.com</Text>
                                    </VStack>
                                </Link>
                                <Spacer/>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Información - Servicio a cliente</Text>
                                        <Text letterSpacing='0.10vw'>contacto@din-ex.com</Text>
                                    </VStack>
                                </Link>
                                <Spacer/>
                                <Link w='30%' h='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)' }} _hover={{ transform: 'scale(1.1)' }}>
                                    <VStack h='100%' p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Cotizaciones - Seguimiento de pedidos</Text>
                                        <Text letterSpacing='0.10vw'>ventas@din-ex.com</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <Spacer />
                        </VStack>
                        </Flex>
                        <hr />
                        <VStack width='100%'>
                            <VStack w='90%' fontFamily='Roboto-Regular'>
                                <Heading fontSize='18px' color='rgb(140,140,140)'>Ubicacion: </Heading>
                                <HStack w='76%' alignItems='center' justify='center' margin='1% 0 1% 0'>
                                    <Image w='11%' src={monterrey} alt='monterrey'></Image>
                                    <Spacer />
                                    <Image w='11%' src={cdmex} alt='cdmex'></Image>
                                    <Spacer />
                                    <Image w='11%' src={guadalajara} alt='guadalajara'></Image>
                                </HStack>
                                <HStack alignItems='start' textAlign='center' w='100%' color='rgb(140,140,140)' fontWeight='bold' fontSize='15px' letterSpacing='0.18vw'>
                                    <Text w='100%' >Dinex Monterrey (matriz)</Text>
                                    <Text w='100%' >Dinex CDMX</Text>
                                    <Text w='100%' >Dinex Guadalajara</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                        <br />
                        <Foot />
                    </Stack>
                </div>
                <div class="tablet">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={contacto} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Contactos</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <br />
                        <Center><Text color='rgb(140,140,140)' fontWeight='bold' fontSize='18px' marginBottom='2%'>Contactos:</Text></Center>
                        <VStack w='100%' textAlign='center' fontSize='14px' fontFamily='Roboto-Regular'>
                            <HStack w='90%' marginBottom='2.5%'>
                                <Link w='100%' href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Servicio al cliente</Text>
                                        <Text letterSpacing='0.10vw'>812-894-3229</Text>
                                    </VStack>
                                </Link>
                                <Link w='100%' href='https://api.whatsapp.com/send?phone=528128675783' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contacto</Text>
                                        <Text letterSpacing='0.10vw'>812-867-5783</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <HStack w='90%' marginBottom='2.5%'>
                                <Link w='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Contabilidad y Finanzas</Text>
                                        <Text letterSpacing='0.10vw'>facturacion@din-ex.com</Text>
                                    </VStack>
                                </Link>

                                <Link w='100%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}>
                                    <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)', backgroundColor: 'rgb(230,230,230)' }}>
                                        <Image width='40px' src={group2365} alt='group2365'></Image>
                                        <Text fontWeight='bold' letterSpacing='0.14vw'>Información - Servicio a cliente</Text>
                                        <Text letterSpacing='0.10vw'>contacto@din-ex.com</Text>
                                    </VStack>
                                </Link>
                            </HStack>
                            <Spacer />
                            <Link w='90%' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)' }}>
                                <VStack p='2%' borderRadius='20px' borderWidth='5px' borderColor='rgb(255,230,0)' bgColor='rgb(240,240,240)' boxShadow='2xl' transitionDuration='0.3s' _active={{ transform: 'scale(0.9)', backgroundColor: 'rgb(230,230,230)' }}>
                                    <Image width='40px' src={group2365} alt='group2365'></Image>
                                    <Text fontWeight='bold' letterSpacing='0.14vw'>Cotizaciones - Seguimiento de pedidos</Text>
                                    <Text letterSpacing='0.10vw'>ventas@din-ex.com</Text>
                                </VStack>
                            </Link>
                        </VStack>
                        <hr />
                        <VStack width='100%'>
                            <VStack w='90%' fontFamily='Roboto-Regular'>
                                <Heading fontSize='18px' color='rgb(140,140,140)'>Ubicacion: </Heading>
                                <HStack w='76%' alignItems='center' justify='center' margin='1% 0 1% 0'>
                                    <Image w='11%' src={monterrey} alt='monterrey'></Image>
                                    <Spacer />
                                    <Image w='11%' src={cdmex} alt='cdmex'></Image>
                                    <Spacer />
                                    <Image w='11%' src={guadalajara} alt='guadalajara'></Image>
                                </HStack>
                                <HStack alignItems='start' textAlign='center' w='100%' color='rgb(140,140,140)' fontWeight='bold' fontSize='15px' letterSpacing='0.40vw'>
                                    <Text w='100%' >Dinex Monterrey (matriz)</Text>
                                    <Text w='100%' >Dinex CDMX</Text>
                                    <Text w='100%' >Dinex Guadalajara</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                        <br />
                        <Foot />
                    </Stack>
                </div>
                <div class="mobile">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box objectFit='cover' bgImage={contacto} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='20%' lineHeight='40px' color='white' fontSize='35px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Contactos</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <VStack width='100%'>
                            <Text color='rgb(140,140,140)' fontWeight='bold' fontSize='15px'>Contactos:</Text>
                            <VStack spacing={8} marginBottom='5%' w='90%' alignItems='center'>
                                <Link href='https://api.whatsapp.com/send?phone=528128943229' target='_blank' w='100%' borderColor='rgb(255,230,0)' boxShadow='2xl' bgColor='rgb(240,240,240)' borderWidth='4px' borderRadius='20px' p='5% 0 5% 0' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', bgColor: 'rgb(230,230,230)' }}>
                                    <Flex direction='column' alignItems='center' justify='center' w='95%'>
                                        <Image width='12%' src={group2365} alt='group2365'></Image>
                                        <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='12px' letterSpacing='0.18vw'>Servicio al cliente</Text>
                                        <Text fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='0.10vw'>812-894-3229</Text>
                                    </Flex>
                                </Link>
                                <Link href='https://api.whatsapp.com/send?phone=528128675783' target='_blank' w='100%' borderColor='rgb(255,230,0)' boxShadow='2xl' bgColor='rgb(240,240,240)' borderWidth='4px' borderRadius='20px' p='5% 0 5% 0' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', bgColor: 'rgb(230,230,230)' }}>
                                    <Flex direction='column' alignItems='center' justify='center' w='95%'>
                                        <Image width='12%' src={group2365} alt='group2365'></Image>
                                        <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='12px' letterSpacing='0.18vw'>Contacto</Text>
                                        <Text fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='0.10vw'>812-867-5783</Text>
                                    </Flex>
                                </Link>
                                <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhThXhmPKSWWtrgwDZsVmKkggLLxfQvPVpKVtqvgTFhWTWShZRWhpMNBxwJFHMzXlGwkg' target='_blank' w='100%' borderColor='rgb(255,230,0)' boxShadow='2xl' bgColor='rgb(240,240,240)' borderWidth='4px' borderRadius='20px' p='5% 0 5% 0' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', bgColor: 'rgb(230,230,230)' }}>
                                    <Flex direction='column' alignItems='center' justify='center' w='95%'>
                                        <Image width='12%' src={group2365} alt='group2365'></Image>
                                        <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='12px' letterSpacing='0.18vw'>Contabilidad y Finanzas</Text>
                                        <Text fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='0.10vw'>facturacion@din-ex.com</Text>
                                    </Flex>
                                </Link>
                                <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQvvBqTpWNvFKwdFzjbPBpQcRsCzjKbDTSWTfrqGKlSrVcGjcZcLdlCtHVBLrMVDNtRl' target='_blank' w='100%' borderColor='rgb(255,230,0)' boxShadow='2xl' bgColor='rgb(240,240,240)' borderWidth='4px' borderRadius='20px' p='5% 0 5% 0' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', bgColor: 'rgb(230,230,230)' }}>
                                    <Flex direction='column' alignItems='center' justify='center' w='95%'>
                                        <Image width='12%' src={group2365} alt='group2365'></Image>
                                        <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='12px' letterSpacing='0.18vw'>Información - Servicio a cliente</Text>
                                        <Text fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='0.10vw'>contacto@din-ex.com</Text>
                                    </Flex>
                                </Link>
                                <Link href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkwGNxwlgtGGnKBcDKcDQPjfVJcvGWZnlbmTJbQmJfJLCKhsvqBdTWqKjTNcgNLpRSRkzG' target='_blank' w='100%' borderColor='rgb(255,230,0)' boxShadow='2xl' bgColor='rgb(240,240,240)' borderWidth='4px' borderRadius='20px' p='5% 0 5% 0' transitionDuration='0.3s' _active={{ transform: 'scale(0.8)', bgColor: 'rgb(230,230,230)' }}>
                                    <Flex direction='column' alignItems='center' justify='center' w='95%'>
                                        <Image width='12%' src={group2365} alt='group2365'></Image>
                                        <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='12px' letterSpacing='0.18vw'>Cotizaciones - Seguimiento de pedidos</Text>
                                        <Text fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='0.10vw'>ventas@din-ex.com</Text>
                                    </Flex>
                                </Link>
                            </VStack>
                        </VStack>
                        <hr />
                        <VStack width='100%'>
                            <VStack w='90%' marginBottom='2%'>
                                <Heading fontSize='15px' color='rgb(140,140,140)'>Ubicacion: </Heading>
                                <HStack w='78%' alignItems='center' justify='center' margin='1% 0 1% 0'>
                                    <Image w='13%' src={monterrey} alt='monterrey'></Image>
                                    <Spacer />
                                    <Image w='13%' src={cdmex} alt='cdmex'></Image>
                                    <Spacer />
                                    <Image w='13%' src={guadalajara} alt='guadalajara'></Image>
                                </HStack>
                                <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' fontSize='12px' letterSpacing='0.40vw'>
                                    <Text w='100%' >Dinex Monterrey (matriz)</Text>
                                    <Text w='100%' >Dinex CDMX</Text>
                                    <Text w='100%' >Dinex Guadalajara</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
            </ChakraProvider >
        </>
    )
}