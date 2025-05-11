import '../App.css';
import React from 'react';
import { Helmet } from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer, Box, Flex, HStack, VStack, Stack, Center, Image, Text, Button, extendTheme, Heading, AspectRatio, Link, isExternal } from '@chakra-ui/react';

/* Components */
import Header from '../components/header.js';
import Foot from '../components/foot.js';
import Whatsapp from '../components/whatsapp.js';

/* Imagenes */
import plomeria from '../media/images/plomeria-100x100.png';
import herramientas from '../media/images/herramientas-100x100.png';
import materialelectrico from '../media/images/material-electrico-100x100.png';
import calefaccion from '../media/images/calefaccion-100x100.png';
import seguridad from '../media/images/seguridad-industrial-100x100.png';
import articulos from '../media/images/articulos-oficina-100x100.png';
import limpieza from '../media/images/limpieza-100x100.png';
import materialconstruccion from '../media/images/material-construccion-100x100.png';
import pintura from '../media/images/pintura-adhesivos-100x100.png'
import covid19 from '../media/images/covid-100x100.png';
import catalogo from '../media/images/catalogo.png';
import catalogoportada from '../media/images/catalalogo-portada.png';
import comunicate from '../media/images/comunicate-nosotros.png';
import impulsamos from '../media/images/impulsamos.png';
import conectamos from '../media/images/conectamos.png';
import suministramos from '../media/images/suministramos.png';
import cubrimos from '../media/images/cubrimos.png';
import optimizamos from '../media/images/optimizamos.png';
import creamos from '../media/images/creamos.png';
import apoyamos from '../media/images/apoyamos.png';
import adaptamos from '../media/images/adaptamos.png';
import Catalogo from '../components/catalogo.js';
import suministros from '../media/images/suministros industriales.png';

export default function Suministros() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> PRODUCTOS - DINEX - Servicios Industriales</title>
            </Helmet>
            <meta name='viewport' content='width=device-width , initial-scale=1' />
            <ChakraProvider>
                <div class="desktoplg">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={suministros} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='80px' color='white' fontSize='80px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Suministros Industriales</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='2xl' fontFamily='artegra-600' textAlign='center'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Heading></Center>
                        <br />
                        <VStack w='100%'>
                            <VStack w='90%' alignItems='left' textAlign='justify' marginBottom='4%'>
                                <Text marginLeft='5%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='4xl'>GARANTÍA DE<br /><Text as='span' fontFamily='Roboto-Regular' fontWeight='bold'>CÁLIDAD</Text></Text>
                                <Text fontSize='3xl' fontFamily='Roboto-Regular' lineHeight='35px' letterSpacing='0.08vw' color='rgb(100,100,100)'>
                                    Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br /><br />
                                    Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br /><br />
                                    Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                                </Text>
                            </VStack>
                            <VStack w='100%'>
                                <VStack w='90%' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular' fontSize='3xl' letterSpacing='1px'>
                                    <HStack w='100%' justify='center' marginBottom='3%' alignItems='start'>
                                        <VStack w='100%'>
                                            <Image w='21%' src={plomeria} alt='plomeria'></Image>
                                            <Text>Plomería</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='21%' src={calefaccion} alt='calefaccion'></Image>
                                            <Text>Calefacción-Refrigeración</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='21%' src={limpieza} alt='herramientas'></Image>
                                            <Text>Limpieza</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='21%' src={herramientas} alt='herramientas'></Image>
                                            <Text>Herramientas</Text>
                                        </VStack>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start'>
                                        <VStack w='100%'>
                                            <Image w='25%' src={seguridad} alt='seguridad'></Image>
                                            <Text>Seguridad Industrial</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={materialconstruccion} alt='materialconstruccion'></Image>
                                            <Text>Material para Construcción</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={materialelectrico} alt='materialelectrico'></Image>
                                            <Text>Material Eléctrico</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={articulos} alt='articulos'></Image>
                                            <Text>Artículos de Oficina</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={pintura} alt='pintura'></Image>
                                            <Text>Pintura y Adhesivos</Text>
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </VStack>
                        <hr />
                        <HStack w='100%' justify='center'>
                            <HStack w='95%' alignItems='start' fontSize='2xl' lineHeight='28px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={impulsamos} alt='impulsamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>IMPULSAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={optimizamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>OPTIMIZAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={conectamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CONECTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={creamos} alt='creamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CREAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Procesos eficientes, estables y confiables.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <HStack width='100%' justify='center' marginTop='3%'>
                            <HStack w='95%' alignItems='start' fontSize='2xl' lineHeight='28px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={suministramos} alt='suministramos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>SUMINISTRAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={apoyamos} alt='apoyamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>APOYAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={cubrimos} alt='cubrimos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CUBRIMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={adaptamos} alt='adaptamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>ADAPTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Nuestro sistema de trabajo a tus necesidades.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <VStack>
                            <Heading fontSize='4xl' letterSpacing='2px'>BENEFICIOS</Heading>
                            <Text fontSize='3xl' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas</b></Text>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="desktopsm">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={suministros} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Suministros Industriales</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='16px' fontFamily='artegra-600' textAlign='center'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Heading></Center>
                        <br />
                        <VStack w='100%'>
                            <VStack w='90%' alignItems='left' textAlign='justify' marginBottom='4%'>
                                <Text marginLeft='5%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='20px'>GARANTÍA DE<br /><Text as='span' fontFamily='Roboto-Regular' fontWeight='bold'>CÁLIDAD</Text></Text>
                                <Text fontSize='18px' fontFamily='Roboto-Regular' lineHeight='19px' letterSpacing='0.08vw' color='rgb(100,100,100)'>
                                    Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br /><br />
                                    Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br /><br />
                                    Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                                </Text>
                            </VStack>
                            <VStack w='100%'>
                                <VStack w='90%' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular' fontSize='18px' letterSpacing='1px'>
                                    <HStack w='100%' justify='center' marginBottom='3%' alignItems='start'>
                                        <VStack w='100%'>
                                            <Image w='21%' src={plomeria} alt='plomeria'></Image>
                                            <Text>Plomería</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='21%' src={calefaccion} alt='calefaccion'></Image>
                                            <Text>Calefacción-Refrigeración</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='21%' src={limpieza} alt='herramientas'></Image>
                                            <Text>Limpieza</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='21%' src={herramientas} alt='herramientas'></Image>
                                            <Text>Herramientas</Text>
                                        </VStack>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start'>
                                        <VStack w='100%'>
                                            <Image w='25%' src={seguridad} alt='seguridad'></Image>
                                            <Text>Seguridad Industrial</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={materialconstruccion} alt='materialconstruccion'></Image>
                                            <Text>Material para Construcción</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={materialelectrico} alt='materialelectrico'></Image>
                                            <Text>Material Eléctrico</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={articulos} alt='articulos'></Image>
                                            <Text>Artículos de Oficina</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='25%' src={pintura} alt='pintura'></Image>
                                            <Text>Pintura y Adhesivos</Text>
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </VStack>
                        <hr />
                        <HStack w='100%' justify='center'>
                            <HStack w='95%' alignItems='start' fontSize='17px' lineHeight='19px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={impulsamos} alt='impulsamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>IMPULSAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={optimizamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>OPTIMIZAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={conectamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CONECTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={creamos} alt='creamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CREAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Procesos eficientes, estables y confiables.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <HStack width='100%' justify='center' marginTop='3%'>
                            <HStack w='95%' alignItems='start' fontSize='17px' lineHeight='19px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={suministramos} alt='suministramos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>SUMINISTRAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={apoyamos} alt='apoyamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>APOYAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={cubrimos} alt='cubrimos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CUBRIMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={adaptamos} alt='adaptamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>ADAPTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Nuestro sistema de trabajo a tus necesidades.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <VStack>
                            <Heading fontSize='28px' letterSpacing='2px'>BENEFICIOS</Heading>
                            <Text fontSize='20px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas</b></Text>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="laptop">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={suministros} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Suministros Industriales</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='14px' fontFamily='artegra-600' textAlign='center' textTransform='uppercase'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Heading></Center>
                        <br />
                        <VStack w='100%'>
                            <VStack w='90%' alignItems='left' textAlign='justify' marginBottom='4%'>
                                <Text marginLeft='5%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='18px'>GARANTÍA DE<br /><Text as='span' fontFamily='Roboto-Regular' fontWeight='bold'>CÁLIDAD</Text></Text>
                                <Text fontSize='16px' fontFamily='Roboto-Regular' lineHeight='19px' letterSpacing='0.08vw' color='rgb(100,100,100)'>
                                    Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br /><br />
                                    Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br /><br />
                                    Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                                </Text>
                            </VStack>
                            <VStack w='100%'>
                                <VStack w='90%' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular' fontSize='16px' letterSpacing='1px'>
                                    <HStack w='100%' justify='center' marginBottom='3%' alignItems='start'>
                                        <VStack w='100%'>
                                            <Image w='22%' src={plomeria} alt='plomeria'></Image>
                                            <Text>Plomería</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='22%' src={calefaccion} alt='calefaccion'></Image>
                                            <Text>Calefacción-Refrigeración</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='22%' src={limpieza} alt='herramientas'></Image>
                                            <Text>Limpieza</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='22%' src={herramientas} alt='herramientas'></Image>
                                            <Text>Herramientas</Text>
                                        </VStack>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start'>
                                        <VStack w='100%'>
                                            <Image w='26%' src={seguridad} alt='seguridad'></Image>
                                            <Text>Seguridad Industrial</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='26%' src={materialconstruccion} alt='materialconstruccion'></Image>
                                            <Text>Material para Construcción</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='26%' src={materialelectrico} alt='materialelectrico'></Image>
                                            <Text>Material Eléctrico</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='26%' src={articulos} alt='articulos'></Image>
                                            <Text>Artículos de Oficina</Text>
                                        </VStack>
                                        <VStack w='100%'>
                                            <Image w='26%' src={pintura} alt='pintura'></Image>
                                            <Text>Pintura y Adhesivos</Text>
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </VStack>
                        <hr />
                        <HStack w='100%' justify='center'>
                            <HStack w='95%' alignItems='start' lineHeight='19px' fontSize='15px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={impulsamos} alt='impulsamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>IMPULSAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={optimizamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>OPTIMIZAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={conectamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CONECTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={creamos} alt='creamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CREAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Procesos eficientes, estables y confiables.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <HStack width='100%' justify='center' marginTop='3%'>
                            <HStack w='95%' alignItems='start' fontSize='15px' lineHeight='19px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={suministramos} alt='suministramos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>SUMINISTRAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={apoyamos} alt='apoyamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>APOYAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={cubrimos} alt='cubrimos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CUBRIMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={adaptamos} alt='adaptamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>ADAPTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Nuestro sistema de trabajo a tus necesidades.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <VStack>
                            <Heading fontSize='28px' letterSpacing='2px'>BENEFICIOS</Heading>
                            <Text fontSize='20px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas</b></Text>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="tablet">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box bgImage={suministros} bgRepeat='no-repeat' color='white' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='12%' lineHeight='60px' color='white' fontSize='60px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Suministros Industriales</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <br />
                        <Center><Text textAlign='justify' lineHeight='20px' letterSpacing='0.10vw' fontFamily='Roboto-Regular' w='70%' fontSize='16px' fontWeight='bold'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text></Center>
                        <hr />
                        <VStack w='100%'>
                            <HStack w='80%' textAlign='center' alignItems='left' color='rgb(100,100,100)' fontFamily='Roboto-Regular' fontSize='16px' letterSpacing='1px'>
                                <VStack w='100%'>
                                    <Image w='25%' src={plomeria} alt='plomeria'></Image>
                                    <Text>Plomería</Text>
                                    <Spacer />
                                    <Image w='25%' src={herramientas} alt='herramientas'></Image>
                                    <Text>Herramientas</Text>
                                    <Spacer />
                                    <Image w='25%' src={materialelectrico} alt='materialelectrico'></Image>
                                    <Text>Material Eléctrico</Text>
                                </VStack>
                                <VStack w='100%' >
                                    <Image w='25%' src={calefaccion} alt='calefaccion'></Image>
                                    <Text>Calefacción-Refrigeración</Text>
                                    <Spacer />
                                    <Image w='25%' src={seguridad} alt='seguridad'></Image>
                                    <Text>Seguridad Industrial <Text as='span' visibility='hidden'>dasdad</Text></Text>
                                    <Spacer />
                                    <Image w='25%' src={articulos} alt='articulos'></Image>
                                    <Text>Artículos de Oficina</Text>
                                </VStack>
                                <VStack w='100%'>
                                    <Image w='25%' src={limpieza} alt='herramientas'></Image>
                                    <Text>Limpieza</Text>
                                    <Spacer />
                                    <Image w='25%' src={materialconstruccion} alt='materialconstruccion'></Image>
                                    <Text>Material para Construcción</Text>
                                    <Spacer />
                                    <Image w='25%' src={pintura} alt='pintura'></Image>
                                    <Text>Pintura y Adhesivos</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                        <hr />
                        <VStack w='100%'>
                            <VStack w='90%' alignItems='left' textAlign='justify'>
                                <Text marginLeft='5%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='18px'>GARANTÍA DE<br /><Text as='span' fontFamily='Roboto-Regular' fontWeight='bold'>CÁLIDAD</Text></Text>
                                <Text fontSize='16px' fontFamily='Roboto-Regular' lineHeight='19px' letterSpacing='0.08vw' color='rgb(100,100,100)'>
                                    Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br /><br />
                                    Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br /><br />
                                    Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                                </Text>
                            </VStack>
                        </VStack>
                        <hr />
                        <HStack w='100%' justify='center'>
                            <HStack w='95%' alignItems='start' lineHeight='19px' fontSize='15px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={impulsamos} alt='impulsamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>IMPULSAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={optimizamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>OPTIMIZAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={conectamos} alt='conectamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CONECTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={creamos} alt='creamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CREAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Procesos eficientes, estables y confiables.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <HStack width='100%' justify='center' marginTop='3%'>
                            <HStack w='95%' alignItems='start' fontSize='15px' lineHeight='19px' textAlign='center' color='rgb(100,100,100)' fontFamily='Roboto-Regular'>
                                <VStack w='100%'>
                                    <Image width='24%' src={suministramos} alt='suministramos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>SUMINISTRAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={apoyamos} alt='apoyamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>APOYAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={cubrimos} alt='cubrimos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>CUBRIMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                                </VStack>
                                <Spacer />
                                <VStack w='100%'>
                                    <Image width='24%' src={adaptamos} alt='adaptamos'></Image>
                                    <Text w='100%' marginTop='2%' fontWeight='bold' letterSpacing='0.36vw'>ADAPTAMOS</Text>
                                    <Text w='100%' letterSpacing='0.08vw'>Nuestro sistema de trabajo a tus necesidades.</Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <VStack>
                            <Heading fontSize='28px' letterSpacing='2px'>BENEFICIOS</Heading>
                            <Text fontSize='20px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas</b></Text>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
                <div class="mobile">
                    <Header />
                    <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                        <Whatsapp />
                        <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
                            <Box objectFit='cover' bgImage={suministros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
                            <Box h='100%' bgColor='rgba(0,0,0,0.2)' position='absolute' width='100%'>
                                <Flex w='100%' height='100%' alignItems='center' textAlign='right' justify='right'>
                                    <Box w='100%' h='min-content'><Text marginRight='20%' lineHeight='40px' color='white' fontSize='35px' fontWeight='bold' fontFamily='Montserrat-ExtraBold'>Nuestros<br /><Text as='span' color='rgb(255,230,0)'>Suministros Industriales</Text></Text></Box>
                                </Flex>
                            </Box>
                        </HStack>
                        <Center><Text textAlign='center' letterSpacing='0.10vw' lineHeight='15px' fontFamily='Roboto-Regular' w='93%' fontSize='12px' fontWeight='bold'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text></Center>
                        <hr />
                        <VStack w='100%' marginBottom='15%' >
                            <HStack w='96%' justify='center' columnGap={0}>
                                <VStack w='50%' textAlign='center' marginBottom='3%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='1px'>
                                    <Image w='30%' src={plomeria} alt='plomeria'></Image>
                                    <Text textAlign='center'>Plomería <Text as='span' visibility='hidden'>dasdad</Text></Text>
                                    <Spacer />
                                    <Image w='30%' src={herramientas} alt='herramientas'></Image>
                                    <Text textAlign='center'>Herramientas <Text as='span' visibility='hidden'>dasda</Text></Text>
                                    <Spacer />
                                    <Image w='30%' src={materialelectrico} alt='materialelectrico'></Image>
                                    <Text textAlign='center'>Material Eléctrico</Text>
                                </VStack>
                                <VStack w='50%' textAlign='center' marginBottom='3%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='1px'>
                                    <Image w='30%' src={calefaccion} alt='calefaccion'></Image>
                                    <Text textAlign='center'>Calefacción-Refrigeración</Text>
                                    <Spacer />
                                    <Image w='30%' src={seguridad} alt='seguridad'></Image>
                                    <Text textAlign='center'>Seguridad Industrial</Text>
                                    <Spacer />
                                    <Image w='30%' src={articulos} alt='articulos'></Image>
                                    <Text textAlign='center' marginLeft='5%'>Artículos de Oficina</Text>
                                </VStack>
                                <VStack w='50%' textAlign='center' marginBottom='3%' color='rgb(100,100,100)' fontFamily='Roboto-Regular' fontSize='12px' letterSpacing='1px'>
                                    <Image w='30%' src={limpieza} alt='herramientas'></Image>
                                    <Text textAlign='center' marginLeft='2.3%'>Limpieza <Text as='span' visibility='hidden'>dasdas</Text></Text>
                                    <Spacer />
                                    <Image w='30%' src={materialconstruccion} alt='materialconstruccion'></Image>
                                    <Text textAlign='center' marginLeft='1%'>Material para Construcción</Text>
                                    <Spacer />
                                    <Image w='30%' src={pintura} alt='pintura'></Image>
                                    <Text textAlign='center' marginLeft='0'>Pintura y Adhesivos</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                        <hr />
                        <VStack w='100%' height='auto' justify='center'>
                            <VStack w='100%'>
                                <VStack marginLeft='2%' w='93%' alignItems='left' textAlign='left' fontFamily='Roboto-Regular' letterSpacing='0.8px'>
                                    <Text letterSpacing='1.25vw' fontFamily='Roboto-Light' fontWeight='bold' fontSize='16px'>GARANTÍA DE<br /><Heading fontSize='16px'>CÁLIDAD</Heading></Text>
                                    <Text fontSize='12px' lineHeight='15px' color='rgb(100,100,100)'>
                                        Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br /><br />
                                        Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br /><br />
                                        Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                                    </Text>
                                </VStack>
                            </VStack>
                        </VStack>
                        <hr />
                        <HStack width='100%' justify='center'>
                            <HStack w='95%' align='left' textAlign='center'>
                                <VStack w='100%' lineHeight='15px'>
                                    <Image width='24%' src={impulsamos} alt='impulsamos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>IMPULSAMOS</Text>
                                    </HStack>
                                    <HStack w='100%' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                                    </HStack>
                                    <Spacer />
                                    <Image width='24%' src={optimizamos} alt='conectamos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>OPTIMIZAMOS</Text>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                                    </HStack>
                                    <Spacer />
                                    <Image width='24%' src={conectamos} alt='conectamos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>CONECTAMOS</Text>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                                    </HStack>
                                    <Spacer />
                                    <Image width='24%' src={creamos} alt='creamos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>CREAMOS</Text>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>Procesos eficientes, estables y confiables.</Text>
                                    </HStack>
                                </VStack>
                                <VStack w='100%' lineHeight='15px'>
                                    <Image width='24%' src={suministramos} alt='suministramos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>SUMINISTRAMOS</Text>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                                    </HStack>
                                    <Spacer />
                                    <Image width='24%' src={apoyamos} alt='apoyamos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>APOYAMOS</Text>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                                    </HStack>
                                    <Spacer />
                                    <Image width='24%' src={cubrimos} alt='cubrimos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>CUBRIMOS</Text>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                                    </HStack>
                                    <Spacer />
                                    <Image width='24%' src={adaptamos} alt='adaptamos'></Image>
                                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.36vw' alignItems='start'>
                                        <Text w='100%' margin='8% 0 6% 0'>ADAPTAMOS</Text>
                                    </HStack>
                                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(100,100,100)' fontSize='12px' letterSpacing='0.08vw'>
                                        <Text w='100%'>Nuestro sistema de trabajo a tus necesidades.</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </HStack>
                        <hr />
                        <VStack>
                            <Heading fontSize='16px' letterSpacing='2px'>BENEFICIOS</Heading>
                            <Text fontSize='13px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas</b>. </Text>
                        </VStack>
                        <Foot />
                    </Stack>
                </div>
            </ChakraProvider >
        </>
    )
}