import React from "react";
import '../App.css';
import { Helmet } from "react-helmet";

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer, Box, Flex, HStack, VStack, Stack, Center, Image, Text, Button, extendTheme, Heading, AspectRatio } from '@chakra-ui/react';

/* Components */
import Header from '../components/header.js';
import Foot from '../components/foot.js';
import Whatsapp from '../components/whatsapp.js';
import Catalogo from "../components/catalogo.js";

/* Images */
import group18 from '../media/images/group-18.png';
import mision from '../media/images/mision.png';
import vision from '../media/images/vision.png';
import group24 from '../media/images/group-24.png';
import group19 from '../media/images/group-19.png';
import group20 from '../media/images/group-20.png';
import group171 from '../media/images/group-17-1.png';
import group22 from '../media/images/group-22.png';
import group23 from '../media/images/group-23.png';
import catalogo from '../media/images/catalogo.png';
import catalogoportada from '../media/images/catalalogo-portada.png';
import nosotros from '../media/images/nosotros1.png';

export default function Nosotros() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> NOSOTROS - DINEX - Servicios Industriales</title>
            </Helmet>
            <ChakraProvider>
                <div class='desktoplg'>
                    <Header />
                    <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <br />
                        <Stack w='100%' alignItems='center'>
                            <Box fontWeight='bold' textAlign='center' w='75%' letterSpacing='0.08vw'>
                                <Heading>NOSOTROS</Heading>
                                <br />
                                <Text fontFamily='Roboto-Regular' fontSize='32px'>
                                    MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN
                                </Text>
                                <br />
                                <Text fontFamily='Roboto-Regular' fontSize='28px'>
                                    Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                                </Text>
                                <br />
                                <Text fontFamily='Roboto-Regular' fontSize='28px' >
                                    Nos ajustamos a sus necesidades presupuestales con alternativas completamente funcionales brindando envíos nacionales con rapidez y eficiencia que le permitirán operar sin interrupciones.
                                </Text>
                            </Box>
                        </Stack>
                        <hr />
                        <Image src={group18} alt='group18'></Image>
                        <HStack width='100%' alignItems='center' justify='center'>
                            <VStack w='96%'>
                                <HStack w='75%' alignItems='center' justify='center'>
                                    <Image w='33%' p='8.5%' src={mision} alt='mision'></Image>
                                    <Spacer />
                                    <Image w='33%' p='8.5%' src={vision} alt='vision'></Image>
                                </HStack>
                                <HStack margin='-5% 0 -2% 0' w='100%' fontSize='38px' fontWeight='bolder' letterSpacing='0.12vw'>
                                    <Text w='100%' marginBottom='2%'>MISIÓN</Text>
                                    <Text w='100%' marginBottom='2%'>VISIÓN</Text>
                                </HStack>
                                <HStack w='100%' alignItems='start' textAlign='center' letterSpacing='0.10vw' fontFamily='Roboto-Regular' fontSize='32px' color='rgb(119,119,119)'>
                                    <Text w='100%'>Solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text>
                                    <Text w='100%'>Convertirnos en un socio estratégico en la industria y mantenernos como la mejor alternativa comercial para nuestros clientes, siempre basando nuestras operaciones en la honestidad, lealtad y confiabilidad.</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <hr />
                        <Heading>VALORES AGREGADOS</Heading>
                        <HStack width='100%' justify='center'>
                            <VStack w='90%'>
                                <HStack w='96%' justify='center'>
                                    <Image w='30%' p='8.5%' src={group24} alt='group24'></Image>
                                    <Spacer />
                                    <Image w='30%' p='8.5%' src={group19} alt='group19'></Image>
                                    <Spacer />
                                    <Image w='30%' p='8.5%' src={group20} alt='group20'></Image>
                                </HStack>
                                <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='32px' letterSpacing='0.08vw'>
                                    <Text w='100%'>Servicios personalizados a la medida de tu empresa</Text>
                                    <Spacer />
                                    <Text w='100%'>Ajustamos la solución a tu presupuesto</Text>
                                    <Spacer />
                                    <Text w='100%'>Informes detallados de la ruta y envío</Text>
                                </HStack>
                                <HStack w='96%' justify='center'>
                                    <Image w='30%' p='8.5%' src={group171} alt='group171'></Image>
                                    <Spacer />
                                    <Image w='30%' p='8.5%' src={group22} alt='group22'></Image>
                                    <Spacer />
                                    <Image w='30%' p='8.5%' src={group23} alt='group23'></Image>
                                </HStack>
                                <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='32px' letterSpacing='0.08vw'>
                                    <Text w='100%'>Feedback en actividades de pre-venta y servicio al cliente</Text>
                                    <Spacer />
                                    <Text w='100%'>Variedad de productos listos para tu operación</Text>
                                    <Spacer />
                                    <Text w='100%'>Coordinación y planificación del envío</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <hr />
                        <Catalogo />
                        <Foot />
                    </Stack>
                </div>
                <div class="desktopsm">
                    <meta name='viewport' content='width=device-width , initial-scale=1' />
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box objectFit='cover' bgImage={nosotros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='55px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'><Text as='span' color='rgb(255,230,0)'>Dinex</Text><br />Soluciones<br />Industriales</Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='16px' fontFamily='artegra-600' textAlign='center'>MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN.</Heading></Center>
                        <br />
                        <Stack w='100%' alignItems='center'>
                            <Box w='80%' textAlign='justify' fontFamily='Roboto-Regular' letterSpacing='0.06vw' lineHeight='20px'>
                                <Text fontSize='18px' marginTop='1%'>
                                    Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                                    Nos ajustamos a sus necesidades presupuestales con alternativas completamente funcionales brindando envíos nacionales con rapidez y eficiencia que le permitirán operar sin interrupciones.
                                </Text>
                            </Box>
                        </Stack>
                        <hr />
                        <HStack width='100%' justify='center'>
                            <HStack letterSpacing='0.08vw' w='92%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' >
                                <VStack w='100%'>
                                    <Image w='17%' src={mision} alt='mision'></Image>
                                    <Text fontSize='18px' marginTop='1%' fontWeight='bolder' color='black'>MISIÓN</Text>
                                    <Text lineHeight='22px' fontSize='18px' color='rgb(100,100,100)'>Solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text>
                                </VStack>
                                <VStack w='100%'>
                                    <Image w='17%' src={vision} alt='vision'></Image>
                                    <Text fontSize='18px' marginTop='1%' fontWeight='bolder' color='black'>VISIÓN</Text>
                                    <Text lineHeight='22px' fontSize='18px' color='rgb(100,100,100)'>Convertirnos en un socio estratégico en la industria y mantenernos como la mejor alternativa comercial para nuestros clientes, siempre basando nuestras operaciones en la honestidad, lealtad y confiabilidad.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <Heading textAlign='center' fontSize='18px' fontFamily='Roboto-Regular'>VALORES AGREGADOS</Heading><br />
                        <HStack width='100%' justify='center'>
                            <HStack w='90%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='18px' lineHeight='21px' letterSpacing='0.08vw'>
                                <VStack w='100%'>
                                    <Image w='25%' src={group24} alt='group24' marginBottom='2%'></Image>
                                    <Text>Servicios personalizados a la medida de tu empresa.</Text>
                                    <br />
                                    <Image w='25%' src={group171} alt='group171' marginBottom='2%'></Image>
                                    <Text>Feedback en actividades de pre-venta y servicio al cliente.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image w='25%' src={group19} alt='group19' marginBottom='2%'></Image>
                                    <Text>Ajustamos la solución a tu presupuesto.<Text visibility='hidden'>5</Text></Text>
                                    <br />
                                    <Image w='25%' src={group22} alt='group22' marginBottom='2%'></Image>
                                    <Text>Variedad de productos listos para tu operación.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image w='25%' src={group20} alt='group20' marginBottom='2%'></Image>
                                    <Text>Informes detallados de la ruta y envío.<Text visibility='hidden'>5</Text></Text>
                                    <br />
                                    <Image w='25%' src={group23} alt='group23' marginBottom='2%'></Image>
                                    <Text>Coordinación y planificación del envío.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="laptop">
                    <meta name='viewport' content='width=device-width , initial-scale=1' />
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box objectFit='cover' bgImage={nosotros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='55px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'><Text as='span' color='rgb(255,230,0)'>Dinex</Text><br />Soluciones<br />Industriales</Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='14px' fontFamily='artegra-600' textAlign='center'>MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN.</Heading></Center>
                        <br />
                        <Stack w='100%' alignItems='center'>
                            <Box w='80%' textAlign='justify' fontFamily='Roboto-Regular' letterSpacing='0.06vw' lineHeight='20px'>
                                <Text fontSize='16px' marginTop='1%'>
                                    Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                                    Nos ajustamos a sus necesidades presupuestales con alternativas completamente funcionales brindando envíos nacionales con rapidez y eficiencia que le permitirán operar sin interrupciones.
                                </Text>
                            </Box>
                        </Stack>
                        <hr />
                        <HStack width='100%' justify='center'>
                            <HStack letterSpacing='0.08vw' w='92%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' >
                                <VStack w='100%'>
                                    <Image w='17%' src={mision} alt='mision'></Image>
                                    <Text fontSize='18px' marginTop='1%' fontWeight='bolder' color='black'>MISIÓN</Text>
                                    <Text lineHeight='22px' fontSize='16px' color='rgb(100,100,100)'>Solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text>
                                </VStack>
                                <VStack w='100%'>
                                    <Image w='17%' src={vision} alt='vision'></Image>
                                    <Text fontSize='18px' marginTop='1%' fontWeight='bolder' color='black'>VISIÓN</Text>
                                    <Text lineHeight='22px' fontSize='16px' color='rgb(100,100,100)'>Convertirnos en un socio estratégico en la industria y mantenernos como la mejor alternativa comercial para nuestros clientes, siempre basando nuestras operaciones en la honestidad, lealtad y confiabilidad.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <Heading textAlign='center' fontSize='18px' fontFamily='Roboto-Regular'>VALORES AGREGADOS</Heading><br />
                        <HStack width='100%' justify='center'>
                            <HStack w='90%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='16px' lineHeight='21px' letterSpacing='0.08vw'>
                                <VStack w='100%'>
                                    <Image w='25%' src={group24} alt='group24' marginBottom='2%'></Image>
                                    <Text>Servicios personalizados a la medida de tu empresa</Text>
                                    <br />
                                    <Image w='25%' src={group171} alt='group171' marginBottom='2%'></Image>
                                    <Text>Feedback en actividades de pre-venta y servicio al cliente.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image w='25%' src={group19} alt='group19' marginBottom='2%'></Image>
                                    <Text>Ajustamos la solución a tu presupuesto.</Text>
                                    <br />
                                    <Image w='25%' src={group22} alt='group22' marginBottom='2%'></Image>
                                    <Text>Variedad de productos listos para tu operación.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image w='25%' src={group20} alt='group20' marginBottom='2%'></Image>
                                    <Text>Informes detallados de la ruta y envío.</Text>
                                    <br />
                                    <Image w='25%' src={group23} alt='group23' marginBottom='2%'></Image>
                                    <Text>Coordinación y planificación del envío.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="tablet">
                    <meta name='viewport' content='width=device-width , initial-scale=1' />
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box objectFit='cover' bgImage={nosotros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='55px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'><Text as='span' color='rgb(255,230,0)'>Dinex</Text><br />Soluciones<br />Industriales</Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='12px' fontFamily='artegra-600' textAlign='center'>MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN.</Heading></Center>
                        <br />
                        <Stack w='100%' alignItems='center'>
                            <Box w='80%' textAlign='justify' fontFamily='Roboto-Regular' letterSpacing='0.06vw' lineHeight='20px'>
                                <Text fontSize='16px' marginTop='1%'>
                                    Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                                    Nos ajustamos a sus necesidades presupuestales con alternativas completamente funcionales brindando envíos nacionales con rapidez y eficiencia que le permitirán operar sin interrupciones.
                                </Text>
                            </Box>
                        </Stack>
                        <hr />
                        <HStack width='100%' justify='center'>
                            <HStack letterSpacing='0.08vw' w='92%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' >
                                <VStack w='100%'>
                                    <Image w='17%' src={mision} alt='mision'></Image>
                                    <Text fontSize='18px' marginTop='1%' fontWeight='bolder' color='black'>MISIÓN</Text>
                                    <Text lineHeight='22px' fontSize='16px' color='rgb(100,100,100)'>Solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text>
                                </VStack>
                                <VStack w='100%'>
                                    <Image w='17%' src={vision} alt='vision'></Image>
                                    <Text fontSize='18px' marginTop='1%' fontWeight='bolder' color='black'>VISIÓN</Text>
                                    <Text lineHeight='22px' fontSize='16px' color='rgb(100,100,100)'>Convertirnos en un socio estratégico en la industria y mantenernos como la mejor alternativa comercial para nuestros clientes, siempre basando nuestras operaciones en la honestidad, lealtad y confiabilidad.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <Heading textAlign='center' fontSize='18px' fontFamily='Roboto-Regular'>VALORES AGREGADOS</Heading><br />
                        <HStack width='100%' justify='center'>
                            <HStack w='90%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='16px' lineHeight='21px' letterSpacing='0.08vw'>
                                <VStack w='100%'>
                                    <Image w='25%' src={group24} alt='group24' marginBottom='2%'></Image>
                                    <Text>Servicios personalizados a la medida de tu empresa</Text>
                                    <br />
                                    <Image w='25%' src={group171} alt='group171' marginBottom='2%'></Image>
                                    <Text>Feedback en actividades de pre-venta y servicio al cliente.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image w='25%' src={group19} alt='group19' marginBottom='2%'></Image>
                                    <Text>Ajustamos la solución a tu presupuesto.</Text>
                                    <br />
                                    <Image w='25%' src={group22} alt='group22' marginBottom='2%'></Image>
                                    <Text>Variedad de productos listos para tu operación.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image w='25%' src={group20} alt='group20' marginBottom='2%'></Image>
                                    <Text>Informes detallados de la ruta y envío.</Text>
                                    <br />
                                    <Image w='25%' src={group23} alt='group23' marginBottom='2%'></Image>
                                    <Text>Coordinación y planificación del envío.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="mobile">
                    <meta name='viewport' content='width=device-width , initial-scale=1' />
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box objectFit='cover' bgImage={nosotros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='20%' lineHeight='40px' color='white' fontSize='35px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'><Text as='span' color='rgb(255,230,0)'>Dinex</Text><br />Soluciones Industriales</Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='5%' w='100%' fontSize='9px' fontFamily='artegra-600' textAlign='center' marginBottom='5%'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
                        <Stack w='100%' alignItems='center'>
                            <Box w='85%' fontFamily='Roboto-Regular' textAlign='justify' letterSpacing='0.10vw' lineHeight='14.5px'>
                                <Text fontSize='12px' marginTop='3%'>
                                    Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                                    Nos ajustamos a sus necesidades presupuestales con alternativas completamente funcionales brindando envíos nacionales con rapidez y eficiencia que le permitirán operar sin interrupciones.
                                </Text>
                            </Box>
                        </Stack>
                        <hr />
                        <VStack width='100%'>
                            <VStack w='90%' marginTop='1%'>
                                <Image w='14%' marginBottom='1%' src={mision} alt='mision.png'></Image>
                                <Heading marginBottom='1%' fontSize='13px' letterSpacing='0.08vw'>MISIÓN</Heading>
                                <Text textAlign='center' lineHeight='15px' letterSpacing='0.08vw' fontFamily='Roboto-Regular' fontSize='12px' color='rgb(100,100,100)'>
                                    Solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.
                                </Text>
                            </VStack>
                            <Spacer />
                            <VStack w='90%' marginTop='1%'>
                                <Image w='14%' marginBottom='1%' src={vision} alt='vision.png'></Image>
                                <Heading marginBottom='1%' fontSize='13px' letterSpacing='0.08vw'>VISIÓN</Heading>
                                <Text textAlign='center' lineHeight='15px' letterSpacing='0.08vw' fontFamily='Roboto-Regular' fontSize='12px' color='rgb(100,100,100)'>
                                    Convertirnos en un socio estratégico en la industria y mantenernos como la mejor alternativa comercial para nuestros clientes, siempre basando nuestras operaciones en la honestidad, lealtad y confiabilidad.
                                </Text>
                            </VStack>
                        </VStack>
                        <hr />
                        <Heading fontSize='16px' textAlign='center'>VALORES AGREGADOS</Heading>
                        <HStack width='100%' justify='center' textAlign='center'>
                            <VStack w='90%' justify='center' lineHeight='15px'>
                                <HStack w='85%' justify='center'>
                                    <Image w='35%' p='8.5%' src={group24} alt='group24'></Image>
                                    <Spacer />
                                    <Image w='35%' p='8.5%' src={group19} alt='group19'></Image>
                                </HStack>
                                <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.04vw'>
                                    <Text w='100%'>Servicios personalizados a la medida de tu empresa</Text>
                                    <Text w='100%'>Ajustamos la solución a tu presupuesto</Text>
                                </HStack>
                                <HStack w='85%' justify='center'>
                                    <Image w='35%' p='8.5%' src={group20} alt='group20'></Image>
                                    <Spacer />
                                    <Image w='35%' p='8.5%' src={group171} alt='group171'></Image>
                                </HStack>
                                <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.04vw'>
                                    <Text w='100%'>Informes detallados de la ruta y envío</Text>
                                    <Text w='100%'>Feedback en actividades de pre-venta y servicio al cliente</Text>
                                </HStack>
                                <HStack w='85%' justify='center'>
                                    <Image w='35%' p='8.5%' src={group22} alt='group22'></Image>
                                    <Spacer />
                                    <Image w='35%' p='8.5%' src={group23} alt='group23'></Image>
                                </HStack>
                                <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.04vw'>
                                    <Text w='100%'>Variedad de productos listos para tu operación</Text>
                                    <Text w='100%'>Coordinación y planificación del envío</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <Foot />
                    </Stack>
                </div>
            </ChakraProvider>
        </>
    );
}