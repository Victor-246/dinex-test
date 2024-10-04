import '../App.css';
import React from 'react';
import { Helmet } from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer , Box , Flex, HStack, VStack, Stack, Center , Image , Text , Button , extendTheme, Heading, AspectRatio , Link , isExternal} from '@chakra-ui/react';

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
import apoyamos from    '../media/images/apoyamos.png';
import adaptamos from '../media/images/adaptamos.png';
import Catalogo from '../components/catalogo.js';

export default function Suministros () {
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
        <Stack textAlign='center' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <Heading letterSpacing='0.20VW' margin='2% 0 2% 0'>SUMINISTROS INDUSTRIALES</Heading>
            <Center><Text letterSpacing='0.10VW' fontFamily='Roboto-Regular' w='75%' fontSize='29px' fontWeight='bold'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text></Center>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='99%'>
                    <HStack w='86.5%' justify='center'>
                        <Image w='7%' src={plomeria} alt='plomeria'></Image>
                        <Spacer/>
                        <Image w='7%' src={herramientas} alt='herramientas'></Image>
                        <Spacer/>
                        <Image w='7%' src={materialelectrico} alt='materialelectrico'></Image>
                        <Spacer/>
                        <Image w='7%' src={calefaccion} alt='calefaccion'></Image>
                        <Spacer/>
                        <Image w='7%'src={seguridad} alt='seguridad'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='27px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Plomería</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Herramientas</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material Eléctrico</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Calefacción-Refrigeración</Text>    
                        <Text w='100%' margin='8% 0 6% 0'>Seguridad Industrial</Text>
                    </HStack>
                    <HStack w='82.8%' justify='center'>
                        <Image w='7.5%' src={articulos} alt='articulos'></Image>
                        <Spacer/>
                        <Image w='7.5%' src={limpieza} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='7.5%' src={materialconstruccion} alt='adaptamos'></Image>
                        <Spacer/>
                        <Image w='7.5%' src={pintura} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='27px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Artículos de Oficina</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Limpieza</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material para Construcción</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Pintura y Adhesivos</Text>
                    </HStack>
                </VStack>
            </HStack>
            <hr/>
            <VStack w='100%' height='auto' justify='center'>
                <VStack w='100%'>
                    <VStack marginLeft='2%' w='93%' alignItems='left' textAlign='left' fontFamily='Roboto-Regular' letterSpacing='0.8px'>
                        <Text w='fit-content' marginLeft='35%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='46px'>GARANTÍA DE<br/><Heading fontSize='52px'>CÁLIDAD</Heading></Text>
                        <Text fontSize='36px' lineHeight='38px' letterSpacing='1px' color='rgb(130,130,130)'>
                            <Image float="left" width='30%' margin='0 1% 1% 0' height='fit-content' src={comunicate} alt='comunicate'></Image>Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br/><br/>
                            Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br/><br/>
                            Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                        </Text><br/>
                    </VStack>
                </VStack>
            </VStack>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='96%'>
                    <HStack w='85%' justify='center'>
                        <Image w='11%' src={impulsamos} alt='impulsamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={optimizamos} alt='optimizamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={conectamos} alt='conectamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={creamos} alt='creamos'></Image>    
                    </HStack>
                    <HStack margin='-7% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='28px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>IMPULSAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>OPTIMIZAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CONECTAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CREAMOS</Text>    
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='28px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                        <Text w='100%'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                        <Text w='100%'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                        <Text w='100%'>Procesos eficientes, estables y confiables.</Text>     
                    </HStack><br/>
                    <HStack w='85%' justify='center'>
                        <Image w='11%' src={suministramos} alt='suministramos'></Image>
                        <Spacer/>
                        <Image w='11%' src={apoyamos} alt='apoyamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={cubrimos} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='11%' src={adaptamos} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-7% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='28px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>SUMINISTRAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>APOYAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CUBRIMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>ADAPTAMOS</Text>
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='28px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                        <Text w='100%'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                        <Text w='100%'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                        <Text w='100%'>Nuestro sistema de trabajo a tus necesidades.</Text>
                    </HStack>
                </VStack>
            </HStack>
            <hr/>
            <Catalogo />
            <VStack marginTop='8%'>
                <Heading fontSize='46px' letterSpacing='2px'>BENEFICIOS</Heading>
                <Text fontSize='38px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas.</b></Text>
            </VStack>
            <Foot />    
        </Stack>
        </div>
        <div class="desktopsm">
        <Header />
        <Stack textAlign='center' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <Heading letterSpacing='0.20' margin='2% 0 2% 0'>SUMINISTROS INDUSTRIALES</Heading>
            <Center><Text letterSpacing='0.10VW' fontFamily='Roboto-Regular' w='75%' fontSize='23px' fontWeight='bold'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text></Center>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='99%'>
                    <HStack w='87%' justify='center'>
                        <Image w='7%' src={plomeria} alt='plomeria'></Image>
                        <Spacer/>
                        <Image w='7%' src={herramientas} alt='herramientas'></Image>
                        <Spacer/>
                        <Image w='7%' src={materialelectrico} alt='materialelectrico'></Image>
                        <Spacer/>
                        <Image w='7%' src={calefaccion} alt='calefaccion'></Image>
                        <Spacer/>
                        <Image w='7%'src={seguridad} alt='seguridad'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='19px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Plomería</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Herramientas</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material Eléctrico</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Calefacción-Refrigeración</Text>    
                        <Text w='100%' margin='8% 0 6% 0'>Seguridad Industrial</Text>
                    </HStack>
                    <HStack w='82.5%' justify='center'>
                        <Image w='7.5%' src={articulos} alt='articulos'></Image>
                        <Spacer/>
                        <Image w='7.5%' src={limpieza} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='7.5%' src={materialconstruccion} alt='adaptamos'></Image>
                        <Spacer/>
                        <Image w='7.5%' src={pintura} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='19px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Artículos de Oficina</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Limpieza</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material para Construcción</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Pintura y Adhesivos</Text>
                    </HStack>
                </VStack>
            </HStack>
            <hr/>
            <VStack w='100%' height='auto' justify='center'>
                <VStack w='100%'>
                    <VStack marginLeft='2%' w='93%' alignItems='left' textAlign='left' fontFamily='Roboto-Regular' letterSpacing='0.8px'>
                        <Text w='fit-content' marginLeft='35%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='36px'>GARANTÍA DE<br/><Heading>CÁLIDAD</Heading></Text>
                        <Text fontSize='22px' lineHeight='27px' letterSpacing='1px' color='rgb(130,130,130)'>
                            <Image float="left" width='28%' margin='0 1% 1% 0' height='fit-content' src={comunicate} alt='comunicate'></Image>Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br/><br/>
                            Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br/><br/>
                            Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                        </Text><br/>
                    </VStack>
                </VStack>
            </VStack>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='96%'>
                    <HStack w='85%' justify='center'>
                        <Image w='11%' src={impulsamos} alt='impulsamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={optimizamos} alt='optimizamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={conectamos} alt='conectamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={creamos} alt='creamos'></Image>    
                    </HStack>
                    <HStack margin='-7% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='19px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>IMPULSAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>OPTIMIZAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CONECTAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CREAMOS</Text>    
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='19px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                        <Text w='100%'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                        <Text w='100%'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                        <Text w='100%'>Procesos eficientes, estables y confiables.</Text>     
                    </HStack><br/>
                    <HStack w='85%' justify='center'>
                        <Image w='11%' src={suministramos} alt='suministramos'></Image>
                        <Spacer/>
                        <Image w='11%' src={apoyamos} alt='apoyamos'></Image>
                        <Spacer/>
                        <Image w='11%' src={cubrimos} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='11%' src={adaptamos} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-7% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='19px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>SUMINISTRAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>APOYAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CUBRIMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>ADAPTAMOS</Text>
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='19px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                        <Text w='100%'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                        <Text w='100%'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                        <Text w='100%'>Nuestro sistema de trabajo a tus necesidades.</Text>
                    </HStack>
                </VStack>
            </HStack>   
            <hr/>
            <Catalogo />
            <VStack marginTop='5%'>
                <Heading fontSize='36px' letterSpacing='2px'>BENEFICIOS</Heading>
                <Text fontSize='28px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas.</b></Text>
            </VStack>
            <Foot />    
        </Stack>
        </div>
        <div class="laptop">
        <Header />
        <Stack textAlign='center' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <Heading letterSpacing='0.20vw' margin='2% 0 2% 0'>SUMINISTROS INDUSTRIALES</Heading>
            <Center><Text letterSpacing='0.10vw' fontFamily='Roboto-Regular' w='75%' fontSize='21px' fontWeight='bold'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text></Center>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='99%'>
                    <HStack w='90%' justify='center'>
                        <Image w='10%' src={plomeria} alt='plomeria'></Image>
                        <Spacer/>
                        <Image w='10%' src={herramientas} alt='herramientas'></Image>
                        <Spacer/>
                        <Image w='10%' src={materialelectrico} alt='materialelectrico'></Image>
                        <Spacer/>
                        <Image w='10%' src={calefaccion} alt='calefaccion'></Image>
                        <Spacer/>
                        <Image w='10%'src={seguridad} alt='seguridad'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Plomería</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Herramientas</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material Eléctrico</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Calefacción-Refrigeración</Text>    
                        <Text w='100%' margin='8% 0 6% 0'>Seguridad Industrial</Text>
                    </HStack>
                    <HStack w='85%' justify='center'>
                        <Image w='10%' src={articulos} alt='articulos'></Image>
                        <Spacer/>
                        <Image w='10%' src={limpieza} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='10%' src={materialconstruccion} alt='adaptamos'></Image>
                        <Spacer/>
                        <Image w='10%' src={pintura} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Artículos de Oficina</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Limpieza</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material para Construcción</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Pintura y Adhesivos</Text>
                    </HStack>
                </VStack>
            </HStack>   
            <hr/>
            <VStack w='100%' height='auto' justify='center'>
                <VStack w='100%'>
                    <VStack marginLeft='2%' w='93%' alignItems='left' textAlign='left' fontFamily='Roboto-Regular' letterSpacing='0.8px'>
                        <Text w='fit-content' marginLeft='33%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='32px'>GARANTÍA DE<br/><Heading>CÁLIDAD</Heading></Text>
                        <Text fontSize='18px' lineHeight='27px' letterSpacing='1px' color='rgb(130,130,130)'>
                            <Image float="left" width='27%' margin='0 1% 1% 0' height='fit-content' src={comunicate} alt='comunicate'></Image>Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br/><br/>
                            Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br/><br/>
                            Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                        </Text><br/>
                    </VStack>
                </VStack>
            </VStack>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='96%'>
                    <HStack w='85%' justify='center'>
                        <Image w='12%' src={impulsamos} alt='impulsamos'></Image>
                        <Spacer/>
                        <Image w='12%' src={optimizamos} alt='optimizamos'></Image>
                        <Spacer/>
                        <Image w='12%' src={conectamos} alt='conectamos'></Image>
                        <Spacer/>
                        <Image w='12%' src={creamos} alt='creamos'></Image>    
                    </HStack>
                    <HStack margin='-7% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>IMPULSAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>OPTIMIZAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CONECTAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CREAMOS</Text>    
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                        <Text w='100%'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                        <Text w='100%'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                        <Text w='100%'>Procesos eficientes, estables y confiables.</Text>     
                    </HStack><br/>
                    <HStack w='85%' justify='center'>
                        <Image w='12%' src={suministramos} alt='suministramos'></Image>
                        <Spacer/>
                        <Image w='12%' src={apoyamos} alt='apoyamos'></Image>
                        <Spacer/>
                        <Image w='12%' src={cubrimos} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='12%' src={adaptamos} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-7% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>SUMINISTRAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>APOYAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CUBRIMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>ADAPTAMOS</Text>
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                        <Text w='100%'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                        <Text w='100%'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                        <Text w='100%'>Nuestro sistema de trabajo a tus necesidades.</Text>
                    </HStack>
                </VStack>
            </HStack> 
            <hr/>
            <Catalogo />
            <VStack marginTop='10%'>
                <Heading fontSize='30px' letterSpacing='0.21vw'>BENEFICIOS</Heading>
                <Text fontSize='22px' letterSpacing='0.09vw' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas.</b></Text>
            </VStack>
            <Foot />    
        </Stack>
        </div>
        <div class="tablet">
        <Header />
        <Stack textAlign='center' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <Heading letterSpacing='0.20vw' margin='2% 0 2% 0'>SUMINISTROS INDUSTRIALES</Heading>
            <Center><Text letterSpacing='0.13vw' fontFamily='Roboto-Regular' w='95%' fontSize='20px' fontWeight='bold'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text></Center>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='99%'>
                    <HStack w='90%' justify='center'>
                        <Image w='10%' src={plomeria} alt='plomeria'></Image>
                        <Spacer/>
                        <Image w='10%' src={herramientas} alt='herramientas'></Image>
                        <Spacer/>
                        <Image w='10%' src={materialelectrico} alt='materialelectrico'></Image>
                        <Spacer/>
                        <Image w='10%' src={calefaccion} alt='calefaccion'></Image>
                        <Spacer/>
                        <Image w='10%'src={seguridad} alt='seguridad'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='15px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Plomería</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Herramientas</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material Eléctrico</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Calefacción-Refrigeración</Text>    
                        <Text w='100%' margin='8% 0 6% 0'>Seguridad Industrial</Text>
                    </HStack>
                    <HStack w='85%' justify='center'>
                        <Image w='10%' src={articulos} alt='articulos'></Image>
                        <Spacer/>
                        <Image w='10%' src={limpieza} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='10%' src={materialconstruccion} alt='adaptamos'></Image>
                        <Spacer/>
                        <Image w='10%' src={pintura} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-7% 0 0 0' w='100%' alignItems='start' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='15px' letterSpacing='0.16vw'>
                        <Text w='100%' margin='8% 0 6% 0'>Artículos de Oficina</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Limpieza</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Material para Construcción</Text>
                        <Text w='100%' margin='8% 0 6% 0'>Pintura y Adhesivos</Text>
                    </HStack>
                </VStack>
            </HStack>   
            <hr/>
            <VStack w='100%' height='auto' justify='center'>
                <VStack w='100%'>
                    <VStack marginLeft='2%' w='93%' alignItems='left' textAlign='left' fontFamily='Roboto-Regular' letterSpacing='0.8px'>
                        <Text w='fit-content' marginLeft='5%' letterSpacing='4px' fontFamily='Roboto-Light' fontWeight='bold' fontSize='36px'>GARANTÍA DE<br/><Heading>CÁLIDAD</Heading></Text>
                        <Text fontSize='20px' lineHeight='27px' letterSpacing='1px' color='rgb(130,130,130)'>
                            Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br/><br/>
                            <Image float="left" width='32%' margin='0 1% 1% 0' height='fit-content' src={comunicate} alt='comunicate'></Image>Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br/><br/>
                            Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                        </Text>
                    </VStack>
                </VStack>
            </VStack>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='96%'>
                    <HStack w='88%' justify='center'>
                        <Image w='14%' src={impulsamos} alt='impulsamos'></Image>
                        <Spacer/>
                        <Image w='14%' src={optimizamos} alt='optimizamos'></Image>
                        <Spacer/>
                        <Image w='14%' src={conectamos} alt='conectamos'></Image>
                        <Spacer/>
                        <Image w='14%' src={creamos} alt='creamos'></Image>    
                    </HStack>
                    <HStack margin='-6% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='15px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>IMPULSAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>OPTIMIZAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CONECTAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CREAMOS</Text>    
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='15px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                        <Text w='100%'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>
                        <Text w='100%'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                        <Text w='100%'>Procesos eficientes, estables y confiables.</Text>     
                    </HStack><br/>
                    <HStack w='88%' justify='center'>
                        <Image w='14%' src={suministramos} alt='suministramos'></Image>
                        <Spacer/>
                        <Image w='14%' src={apoyamos} alt='apoyamos'></Image>
                        <Spacer/>
                        <Image w='14%' src={cubrimos} alt='cubrimos'></Image>
                        <Spacer/>
                        <Image w='14%' src={adaptamos} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-6% 0 -6% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='15px' letterSpacing='0.32vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>SUMINISTRAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>APOYAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CUBRIMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>ADAPTAMOS</Text>
                    </HStack>
                    <HStack w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='15px' letterSpacing='0.07vw' alignItems='start'>
                        <Text w='100%'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                        <Text w='100%'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                        <Text w='100%'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                        <Text w='100%'>Nuestro sistema de trabajo a tus necesidades.</Text>
                    </HStack>
                </VStack>
            </HStack>  
            <hr/>
            <Catalogo />
            <VStack marginTop='15%'>
                <Heading fontSize='28px' letterSpacing='2px'>BENEFICIOS</Heading>
                <Text fontSize='20px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas</b></Text>
            </VStack>
            <Foot />    
        </Stack>
        </div>
        <div class="mobile">
        <Header />
        <Stack textAlign='center' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <Heading letterSpacing='0.20vw' margin='2% 0 2% 0'>SUMINISTROS INDUSTRIALES</Heading>
            <Center><Text letterSpacing='0.15vw' fontFamily='Roboto-Regular' w='95%' fontSize='16px' fontWeight='bold'>Nuestra misión es solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text></Center>
            <hr/>
            <VStack w='100%' marginBottom='15%' >
                <HStack w='96%' justify='center' columnGap={0}>
                    <VStack w='50%' textAlign='center' marginBottom='3%' color='rgb(150,150,150)' fontFamily='Roboto-Regular' fontSize='22px' letterSpacing='1px'>
                        <Image w='30%' src={plomeria} alt='plomeria'></Image>
                        <Text fontSize='17px' textAlign='center'>Plomería</Text>
                        <Spacer />
                        <Image w='30%' src={herramientas} alt='herramientas'></Image>
                        <Text fontSize='17px' textAlign='center'>Herramientas</Text>
                        <Spacer />
                        <Image w='30%' src={materialelectrico} alt='materialelectrico'></Image>
                        <Text fontSize='17px' textAlign='center'>Material Eléctrico</Text>
                        <Spacer />
                        <Image w='30%' src={calefaccion} alt='calefaccion'></Image>
                        <Text fontSize='17px' textAlign='center'>Calefacción-Refrigeración</Text>
                        <Spacer />
                        <Image w='30%' src={seguridad} alt='seguridad'></Image>
                        <Text fontSize='17px' textAlign='center'>Seguridad Industrial</Text>
                    </VStack>
                    <VStack w='50%' textAlign='center' marginBottom='3%' color='rgb(150,150,150)' fontFamily='Roboto-Regular' fontSize='22px' letterSpacing='1px'> 
                        <Image w='30%' src={articulos} alt='articulos'></Image>
                        <Text fontSize='17px' textAlign='center' marginLeft='5%'>Artículos de Oficina</Text>
                        <Spacer />
                        <Image w='30%' src={limpieza} alt='herramientas'></Image>
                        <Text fontSize='17px' textAlign='center' marginLeft='2.3%'>Limpieza</Text>
                        <Spacer />
                        <Image w='30%' src={materialconstruccion} alt='materialconstruccion'></Image>
                        <Text fontSize='17px' textAlign='center' marginLeft='1%'>Material para Construcción</Text>
                        <Spacer />
                        <Image w='30%' src={pintura} alt='pintura'></Image>
                        <Text fontSize='17px' textAlign='center' marginLeft='0'>Pintura y Adhesivos</Text>
                    </VStack>
                </HStack>
            </VStack>
            <hr/>
            <VStack w='100%' height='auto' justify='center'>
                <VStack w='100%'>
                    <VStack marginLeft='2%' w='93%' alignItems='left' textAlign='left' fontFamily='Roboto-Regular' letterSpacing='0.8px'>
                        <Text letterSpacing='1.25vw' fontFamily='Roboto-Light' fontWeight='bold' fontSize='30px'>GARANTÍA DE<br/><Heading>CÁLIDAD</Heading></Text>
                        <Text fontSize='17px' lineHeight='30px' color='rgb(130,130,130)'>
                            Aseguramos nuestro servicio de control de calidad de tal manera que le permita garantizar que sus materiales, productos, maquinaria, equipamiento e instalaciones industriales han sido producidas de conformidad con todos los requisitos especificados.<br/><br/>
                            Nuestro proceso de garantía es llevado a cabo a través de una inspección rigurosa en los medios de producción para evaluar la calidad de nuestros productos junto al cumplimiento de todas las especificaciones contractuales, regulaciones obligatorias y normas de calidad.<br/><br/>
                            Utiliza nuestros canales de contacto para descubrir como nuestros servicios con calidad de punta pueden ayudarle a asegurar suministros industriales listos para su operación.
                        </Text><br/>
                        <Image float="left" width='100%' height='fit-content' src={comunicate} alt='comunicate'></Image>
                    </VStack>
                </VStack>
            </VStack>
            <hr/>
            <HStack width='100%' justify='center'>
                <VStack w='95%'>
                    <HStack w='71%' justify='center'>
                        <Image width='28%' src={impulsamos} alt='impulsamos'></Image>
                        <Spacer />
                        <Image width='28%' src={optimizamos} alt='optimizamos'></Image>
                    </HStack>
                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.36vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>IMPULSAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>OPTIMIZAMOS</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='16px' letterSpacing='0.08vw'>
                        <Text w='100%'>A las empresas cuyo desempeño comercial depende de cadenas de suministros.</Text>
                        <Text w='100%'>Tu suministro de principio a fin con nuestra experiencia en logística a nivel nacional.</Text>            
                    </HStack><br/>
                    <HStack w='71%' justify='center'>
                        <Image width='28%' src={conectamos} alt='conectamos'></Image>
                        <Spacer />
                        <Image width='28%' src={creamos} alt='creamos'></Image>         
                    </HStack>
                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.36vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>CONECTAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>CREAMOS</Text>       
                    </HStack>
                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='16px' letterSpacing='0.08vw'>
                        <Text w='100%'>Las operaciones de forma eficiente al alinear nuestra estrategia comercial con tus objetivos.</Text>
                        <Text w='100%'>Procesos eficientes, estables y confiables.</Text>     
                    </HStack><br/>
                    <HStack w='71%' justify='center'>
                        <Image width='28%' src={suministramos} alt='suministramos'></Image>
                        <Spacer />
                        <Image width='28%' src={apoyamos} alt='apoyamos'></Image> 
                    </HStack>
                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.36vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>SUMINISTRAMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>APOYAMOS</Text>
                    </HStack>
                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='16px' letterSpacing='0.08vw'>
                        <Text w='100%'>Entrega de soluciones industriales inteligentes y optimizadas.</Text>
                        <Text w='100%'>Para lograr sus objetivos y obtener una ventaja competitiva dentro de su sector industrial.</Text>
                    </HStack><br/>
                    <HStack w='71%' alignItems='center' justify='center'>
                        <Image width='28%' src={cubrimos} alt='cubrimos'></Image>
                        <Spacer />
                        <Image width='28%' src={adaptamos} alt='adaptamos'></Image>
                    </HStack>
                    <HStack margin='-5% 0 -5% 0' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' color='rgb(140,140,140)' fontSize='17px' letterSpacing='0.36vw' alignItems='start'>
                        <Text w='100%' margin='8% 0 6% 0'>CUBRIMOS</Text>
                        <Text w='100%' margin='8% 0 6% 0'>ADAPTAMOS</Text>
                    </HStack>
                    <HStack w='100%' justify='center' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='16px' letterSpacing='0.08vw'>
                        <Text w='100%'>Una amplia gama de servicios a lo largo de la cadena industrial.</Text>
                        <Text w='100%'>Nuestro sistema de trabajo a tus necesidades.</Text>
                    </HStack>
                </VStack>
                </HStack>
            <hr/>
            <Catalogo />
            <VStack marginTop='15%'>
                <Heading fontSize='26px' letterSpacing='2px'>BENEFICIOS</Heading>
                <Text fontSize='18px' letterSpacing='0.8px' fontFamily='Roboto-Light'>Le damos a tu industria el giro que <b>necesitas</b>. </Text>
            </VStack>
            <Foot />    
        </Stack>
        </div>
    </ChakraProvider>
    </>
    )
}