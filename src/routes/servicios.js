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

/* Imagenes */
import iconmtto from '../media/images/icon-mtto-70x70.png';
import servicios from '../media/images/nuestros-servicios-1.png';
import maquinados from '../media/images/maquinados.jpg';
import maquinados2 from '../media/images/icon-maquinados-70x70.png';
import embalaje from '../media/images/icon-embalaje-70x70.png';
import image27 from '../media/images/image-27.png';
import suministros from '../media/images/icon-suministros.png';
import servicios1 from '../media/images/nuestros-servicios-1.png';
import mantenimiento from '../media/images/icon-mtto.png';
import maquinando from '../media/images/icon-maquinados.png';
import logisticos from '../media/images/icon-embalaje.png';
import servicios2 from '../media/images/servicios1.png';

export default function Servicios() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> SERVICIOS - DINEX - Servicios Industriales</title>
            </Helmet>
            <meta name='viewport' content='width=device-width , initial-scale=1' />
            <ChakraProvider>
                <div class="desktoplg">
                    <Header />
                    <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <Heading letterSpacing='1px' margin='2% 0 2% 0'>SERVICIOS</Heading>
                        <Center><Text letterSpacing='0.5px' fontFamily='Roboto-Regular' w='75%' fontSize='32px' fontWeight='bold'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Text></Center>
                        <hr />
                        <VStack w='100%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='52px'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                                    </HStack><br />
                                    <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='46px' fontFamily='Roboto-Regular'>
                                        <ul>
                                            <li>De equipo hidráulico y neumático.</li><br />
                                            <li>Equipo de refrigeración y aire acondicionado.</li>
                                        </ul>
                                    </Flex>
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <hr />
                        <VStack w='100%'>
                            <HStack w='96%' alignItems='start' columnGap='9%'>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={maquinados} alt='servicios'></Image></Flex>
                                </VStack>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='52px'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                                    </HStack><br />
                                    <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='46px' fontFamily='Roboto-Regular'>
                                        <ul>
                                            <li>Trabajos de mecanizado que incluyen diseño y modelado de piezas.</li><br />
                                            <li>Fabricación y rectificado.</li><br />
                                            <li>Trabajos con taladro fresador.</li>
                                        </ul>
                                    </Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <hr />
                        <VStack w='100%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='52px'>SERVICIOS LÓGISTICOS</Heading>
                                    </HStack><br />
                                    <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='46px' fontFamily='Roboto-Regular'>
                                        <ul>
                                            <li>Almacenamiento de inventario.</li><br />
                                            <li>Renta de equipo de transporte.</li><br />
                                            <li>Fletes nacionales.</li>
                                        </ul>
                                    </Flex><br />
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={image27} alt='image27'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="desktopsm">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={servicios2} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Servicios</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='16px' fontFamily='artegra-600' textAlign='center' textTransform='uppercase'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Heading></Center>
                        <br />
                        <Text fontSize='24px' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Text>
                        <br />
                        <HStack fontSize='18px' columnGap='0' rowGap='0' fontFamily='Roboto-Regular' letterSpacing='0.08vw' textAlign='center' lineHeight='20px' alignItems='start'>
                            <VStack w='100%' justify='center'>
                                <VStack w='80%' textAlign='center'>
                                    <Image w='16%' src={suministros} alt='suministros' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Suministros Industriales, Material y Refacciones</Text> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
                                    <Image w='16%' src={mantenimiento} alt='mantenimiento' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Mantenimiento, Instalación y Reparación</Text> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
                                </VStack>
                            </VStack>
                            <VStack w='100%' justify='center'>
                                <VStack w='80%' textAlign='center'>
                                    <Image w='16%' src={maquinando} alt='maquinando' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Maquinados y Fabricación</Text> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
                                    <Image w='16%' src={logisticos} alt='logisticos' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Servicios Logísticos</Text> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
                                </VStack>
                            </VStack>
                        </HStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='21px'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                                    </HStack><br />
                                    <VStack fontSize='20px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' justify='center' alignItems='start'>
                                        <Text>● De equipo hidráulico y neumático.</Text>
                                        <Text>● Equipo de refrigeración y aire acondicionado.</Text>
                                    </VStack>
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='96%' alignItems='start' columnGap='9%'>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={maquinados} alt='servicios'></Image></Flex>
                                </VStack>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='21px'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                                    </HStack><br />
                                    <VStack fontSize='20px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(150,150,150)' fontFamily='Roboto-Regular' alignItems='start'>
                                        <Text>● Trabajos de mecanizado que incluyen diseño y modelado de piezas.</Text>
                                        <Text>● Fabricación y rectificado.</Text>
                                        <Text>● Trabajos con taladro fresador.</Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='21px'>SERVICIOS LÓGISTICOS</Heading>
                                    </HStack><br />
                                    <VStack fontSize='20px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' alignItems='start'>
                                        <Text>● Almacenamiento de inventario.</Text>
                                        <Text>● Renta de equipo de transporte.</Text>
                                        <Text>● Fletes nacionales.</Text>
                                    </VStack>
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={image27} alt='image27'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="laptop">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={servicios2} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Servicios</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='14px' fontFamily='artegra-600' textAlign='center' textTransform='uppercase'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Heading></Center>
                        <br/><br/>
                        <Text fontSize='20px' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Text>
                        <br />
                        <HStack fontSize='16px' columnGap='0' rowGap='0' fontFamily='Roboto-Regular' letterSpacing='0.08vw' textAlign='center' lineHeight='20px' alignItems='start'>
                            <VStack w='100%' justify='center'>
                                <VStack w='80%' textAlign='center'>
                                    <Image w='16%' src={suministros} alt='suministros' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Suministros Industriales, Material y Refacciones</Text> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
                                    <Image w='16%' src={mantenimiento} alt='mantenimiento' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Mantenimiento, Instalación y Reparación</Text> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
                                </VStack>
                            </VStack>
                            <VStack w='100%' justify='center'>
                                <VStack w='80%' textAlign='center'>
                                    <Image w='16%' src={maquinando} alt='maquinando' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Maquinados y Fabricación</Text> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
                                    <Image w='16%' src={logisticos} alt='logisticos' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Servicios Logísticos</Text> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
                                </VStack>
                            </VStack>
                        </HStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='19px'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                                    </HStack><br />
                                    <VStack fontSize='18px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' justify='center' alignItems='start'>
                                        <Text>● De equipo hidráulico y neumático.</Text>
                                        <Text>● Equipo de refrigeración y aire acondicionado.</Text>
                                    </VStack>
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='96%' alignItems='start' columnGap='9%'>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={maquinados} alt='servicios'></Image></Flex>
                                </VStack>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='19px'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                                    </HStack><br />
                                    <VStack fontSize='18px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(150,150,150)' fontFamily='Roboto-Regular' alignItems='start'>
                                        <Text>● Trabajos de mecanizado que incluyen diseño y modelado de piezas.</Text>
                                        <Text>● Fabricación y rectificado.</Text>
                                        <Text>● Trabajos con taladro fresador.</Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='19px'>SERVICIOS LÓGISTICOS</Heading>
                                    </HStack><br />
                                    <VStack fontSize='18px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' alignItems='start'>
                                        <Text>● Almacenamiento de inventario.</Text>
                                        <Text>● Renta de equipo de transporte.</Text>
                                        <Text>● Fletes nacionales.</Text>
                                    </VStack>
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={image27} alt='image27'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="tablet">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={servicios2} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Servicios</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='12px' fontFamily='artegra-600' textAlign='center' textTransform='uppercase'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Heading></Center>
                        <hr /><br/>
                        <Text fontSize='20px' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Text>
                        <br />
                        <HStack fontSize='16px' columnGap='0' rowGap='0' fontFamily='Roboto-Regular' letterSpacing='0.08vw' textAlign='center' lineHeight='20px' alignItems='start'>
                            <VStack w='100%' justify='center'>
                                <VStack w='80%' textAlign='center'>
                                    <Image w='16%' src={suministros} alt='suministros' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Suministros Industriales, Material y Refacciones</Text> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
                                    <Image w='16%' src={mantenimiento} alt='mantenimiento' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Mantenimiento, Instalación y Reparación</Text> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
                                </VStack>
                            </VStack>
                            <VStack w='100%' justify='center'>
                                <VStack w='80%' textAlign='center'>
                                    <Image w='16%' src={maquinando} alt='maquinando' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Maquinados y Fabricación</Text> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
                                    <Image w='16%' src={logisticos} alt='logisticos' margin='5% 0 1% 0'></Image>
                                    <Text color='rgb(100,100,100)'><Text as='b'>Servicios Logísticos</Text> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
                                </VStack>
                            </VStack>
                        </HStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='19px'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                                    </HStack><br />
                                    <VStack fontSize='18px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' justify='center' alignItems='start'>
                                        <Text>● De equipo hidráulico y neumático.</Text>
                                        <Text>● Equipo de refrigeración y aire acondicionado.</Text>
                                    </VStack>
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='96%' alignItems='start' columnGap='9%'>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={maquinados} alt='servicios'></Image></Flex>
                                </VStack>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='19px'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                                    </HStack><br />
                                    <VStack fontSize='18px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(150,150,150)' fontFamily='Roboto-Regular' alignItems='start'>
                                        <Text>● Trabajos de mecanizado que incluyen diseño y modelado de piezas.</Text>
                                        <Text>● Fabricación y rectificado.</Text>
                                        <Text>● Trabajos con taladro fresador.</Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack w='100%' marginTop='8%'>
                            <HStack w='90%' alignItems='start' columnGap='3%'>
                                <VStack w='100%'>
                                    <HStack columnGap={0} w='100%' textAlign='center'>
                                        <Image src={iconmtto} alt='iconmtto'></Image>
                                        <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='19px'>SERVICIOS LÓGISTICOS</Heading>
                                    </HStack><br />
                                    <VStack fontSize='18px' lineHeight='20px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' alignItems='start'>
                                        <Text>● Almacenamiento de inventario.</Text>
                                        <Text>● Renta de equipo de transporte.</Text>
                                        <Text>● Fletes nacionales.</Text>
                                    </VStack>
                                </VStack>
                                <VStack w='100%'>
                                    <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={image27} alt='image27'></Image></Flex>
                                </VStack>
                            </HStack>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="mobile">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box objectFit='cover' bgImage={servicios2} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='20%' lineHeight='40px' color='white' fontSize='35px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Servicios</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Text textAlign='center' letterSpacing='0.10vw' lineHeight='15px' fontFamily='Roboto-Regular' w='93%' fontSize='12px' fontWeight='bold'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Text></Center>
                        <hr />
                        <Text fontSize='16px' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Text>
                        <HStack marginTop='2%' w='100%' justify='center' alignItems='start' textAlign='center' lineHeight='15px' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                            <HStack w='90%'>
                                <VStack w='100%' justify='center'>
                                    <VStack w='100%'>
                                        <Image w='23%' margin='5% 0 1% 0' src={suministros} alt='suministros'></Image>
                                        <Text fontSize='12px' color='rgb(100,100,100)'><Text as='b'>Suministros Industriales, Material y Refacciones</Text> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
                                        <Image w='23%' margin='5% 0 1% 0' src={mantenimiento} alt='mantenimiento'></Image>
                                        <Text fontSize='12px' color='rgb(100,100,100)'><Text as='b'>Mantenimiento, Instalación y Reparación</Text> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
                                    </VStack>
                                </VStack>
                                <VStack w='100%' justify='center'>
                                    <VStack w='100%'>
                                        <Image w='23%' margin='5% 0 1% 0' src={maquinando} alt='maquinando'></Image>
                                        <Text fontSize='12px' color='rgb(100,100,100)'><Text as='b'>Maquinados y Fabricación</Text> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
                                        <Image w='23%' margin='5% 0 1% 0' src={logisticos} alt='logisticos'></Image>
                                        <Text fontSize='12px' color='rgb(100,100,100)'><Text as='b'>Servicios Logísticos</Text> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <VStack w='100%' marginBottom='5%'>
                            <VStack w='90%'>
                                <HStack columnGap={0} textAlign='center' w='100%' marginBottom='10px'>
                                    <Image w='15%' src={iconmtto} alt='iconmtto'></Image>
                                    <Heading fontSize='14px' marginLeft='5%' textAlign='left' fontFamily='Roboto-Regular'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                                </HStack>
                                <VStack fontSize='13px' lineHeight='16px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' justify='center' alignItems='start'>
                                    <Text>● De equipo hidráulico y neumático.</Text>
                                    <Text>● Equipo de refrigeración y aire acondicionado.</Text>
                                </VStack>
                            </VStack>
                        </VStack>
                        <VStack w='100%' marginBottom='5%'>
                            <VStack w='90%'>
                                <HStack columnGap={1} textAlign='center' w='100%' marginBottom='10px'>
                                    <Image w='15%' src={maquinados2} alt='maquinados2'></Image>
                                    <Heading fontSize='14px' marginLeft='5%' textAlign='left' fontFamily='Roboto-Regular'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                                </HStack>
                                <VStack fontSize='13px' lineHeight='16px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' justify='center' alignItems='start'>
                                    <Text>● Trabajos de mecanizado que incluyen diseño y modelado de piezas.</Text>
                                    <Text>● Fabricación y rectificado.</Text>
                                    <Text>● Trabajos con taladro fresador.</Text>
                                </VStack>
                            </VStack>
                        </VStack>
                        <VStack w='100%' marginBottom='5%'>
                            <VStack w='90%' >
                                <HStack columnGap={1} w='100%' textAlign='center' marginBottom='10px'>
                                    <Image w='15%' src={embalaje} alt='embalaje'></Image>
                                    <Heading fontSize='14px' marginLeft='5%' textAlign='left' fontFamily='Roboto-Regular'>SERVICIOS LÓGISTICOS</Heading>
                                </HStack>
                                <VStack fontSize='13px' textAlign='center' lineHeight='16px' letterSpacing='0.08vw' width='100%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' justify='center' alignItems='start'>
                                    <Text>● Almacenamiento de inventario</Text>
                                    <Text>● Renta de equipo de transporte</Text>
                                    <Text>● Fletes nacionales</Text>
                                </VStack>
                            </VStack>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
            </ChakraProvider>
        </>
    )
}