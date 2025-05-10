import '../App.css';
import React, { useState } from 'react';
import Helmet from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { Spacer, Box, Flex, HStack, VStack, Stack, Center, Image, Text, Button, extendTheme, Heading, AspectRatio, Link, isExternal, Alert, Input, ChakraProvider } from '@chakra-ui/react';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';
import { Provider } from '@chakra-ui/react/provider';

import { Link as ReactRouterLink } from 'react-router-dom'

/* Components */
import Header from '../components/header.js';
import Foot from '../components/foot.js';
import Whatsapp from '../components/whatsapp.js';
import Catalago from '../components/catalogo.js';
import Intro from '../components/intro.js';

/* Imagenes */
import Hammond from '../media/images/hps-logo-header-gris.png';
import Timsa from '../media/images/timsa.png';
import Amazon from '../media/images/image-46.png';
import Schneider from '../media/images/schneider-electric.png';
import Sisamex from '../media/images/sisamex.png';
import BMP from '../media/images/bmp-logis.png';
import experiencia from '../media/images/dienex-experiencia-1536x949.png';
import envios from '../media/images/envios-rapidos-600x600.png';
import suministros from '../media/images/icon-suministros.png';
import servicios from '../media/images/nuestros-servicios-1.png';
import mantenimiento from '../media/images/icon-mtto.png';
import maquinando from '../media/images/icon-maquinados.png';
import logisticos from '../media/images/icon-embalaje.png';
import catalogo from '../media/images/catalogo.png';
import catalogoportada from '../media/images/catalalogo-portada.png';
import worker from '../media/images/dinex-worker.png';
import threem from '../media/images/3m-164x164.png';
import tuk from '../media/images/tuk-164x164.png';
import dewalt from '../media/images/dewalt.png';
import xerox from '../media/images/xerox.png';
import honeywell from '../media/images/honeywell.png';
import maqpack from '../media/images/maqpack.png';
import rubbermaid from '../media/images/rubbermaid.png';
import jhonson from '../media/images/logo-jhonson.png';
import fromm from '../media/images/fromm.png';
import dupont from '../media/images/dupont.png';
import zebra from '../media/images/zebra.png';
import wd40 from '../media/images/wd40.png';
import gojo from '../media/images/gojo.png';
import pandg from '../media/images/pandg.png';
import surtek from '../media/images/surtek.png';
import steelpro from '../media/images/steelpro.png';
import dinexfondo from '../media/images/dinex-fondo.mp4';
import nosotros from '../media/images/nosotros.png';
import nosotrosyellow from '../media/images/nosotrosyellow.png';
import serviciosblue from '../media/images/serviciosblue.png'
import suministrosgreen from '../media/images/suministros industrialesgreen.png';
import contactopurple from '../media/images/contactopurple.png';
import maquinadospink from '../media/images/maquinadospink.jpg';
import { transform } from 'framer-motion';


export default function Main() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> DINEX | Sitio Oficial</title>
      </Helmet>
      <ChakraProvider>
        <div class="desktoplg">
          <Header />
          <Stack columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <Box height='100%' position='relative' columnGap='0'>
              <AspectRatio maxH='100%' ratio={1} pointerEvents='none' columnGap='0' >
                <video preload="metadata" autoPlay loop>
                  <source src={dinexfondo} typeof='video/mp4' />
                </video>
              </AspectRatio>
              <Heading textAlign='center' position='absolute' top='40%' left='5%' width='90%' color='white' fontWeight='bold' fontSize='56px' fontFamily='Montserrat-Medium'>
                RESOLVEMOS TODAS TUS NECESIDADES INDUSTRIALES PARA QUE TU FÁBRICA SIGA OPERANDO ÓPTIMAMENTE
              </Heading>
            </Box>
            <Center><Heading bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='5%' w='100%' fontSize='46px' fontFamily='artegra-600' textAlign='center'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
            <HStack w='100%' bgColor='rgb(255,255,255)' columnGap={0} margin='1% 0% 3% 0%'>
              <HStack w='90%'>
                <Image w='17.5%' src={Hammond} alt='Hammond'></Image>
                <Spacer />
                <Image w='17.5%' src={Timsa} alt='Timsa'></Image>
                <Spacer />
                <Image w='17.5%' src={Amazon} alt='Amazon' ></Image>
                <Spacer />
                <Image w='17.5%' src={Schneider} alt='Schneider' ></Image>
                <Spacer />
                <Image w='17.5%' src={Sisamex} alt='Sisamex'></Image>
                <Spacer />
                <Image w='17.5%' src={BMP} alt='BMP'></Image>
              </HStack>
            </HStack>        <HStack bgColor='rgb(255,255,255)'>
              <Box width='33%'><Image src={experiencia} alt='experiencia'></Image></Box>
              <Box width='50%' letterSpacing='0.08vw' fontFamily='Roboto-Regular' fontSize='36px'>
                <Text fontWeight='bold'>
                  Orientados a resolver tus necesidades con servicios industriales de forma rápida y confiable que te permitirán operar sin interrupciones.
                </Text>
                <br />
                <Text color='rgb(100,100,100)'>
                  Ofrecemos soluciones eficientes y a tu medida.<br />
                  <br />Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés.
                  <br /><br />Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.
                </Text>
              </Box>
              <Box width='33%'><Box borderWidth='4px' borderColor='rgb(255,230,0)'><Image src={envios} alt='envios'></Image></Box></Box>
            </HStack>
            <hr />
            <HStack w='100%' justify='center'>
              <HStack w='96%'>
                <VStack spacing={4} w='100%' justify='center' textAlign='center' fontSize='28px'>
                  <Heading fontWeight='regular' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Heading>
                  <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                    <Image w='15%' src={suministros} alt='suministros'></Image>
                    <Text color='rgb(119,119,119)'><b>Suministros Industriales, Material y Refacciones</b> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
                  </HStack>
                  <Spacer />
                  <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                    <Image w='15%' src={mantenimiento} alt='mantenimiento'></Image>
                    <Text color='rgb(119,119,119)'><b>Mantenimiento, Instalación y Reparación</b> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
                  </HStack>
                  <Spacer />
                  <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                    <Image w='15%' src={maquinando} alt='maquinando'></Image>
                    <Text color='rgb(119,119,119)'><b>Maquinados y Fabricación</b> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
                  </HStack>
                  <Spacer />
                  <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                    <Image w='15%' src={logisticos} alt='logisticos'></Image>
                    <Text color='rgb(119,119,119)'><b>Servicios Logísticos</b> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
                  </HStack>
                </VStack>
                <Spacer />
                <Flex w='80%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
              </HStack>
            </HStack>
            <hr />
            <Catalago />
            <hr />
            <VStack width='100%'>
              <Heading fontSize='50px' letterSpacing='0.16vw'>SOCIOS COMERCIALES</Heading>
              <Text letterSpacing='0.10vw' fontSize='32px' width='70%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
              <HStack width='100%' justify='center'>
                <VStack w='90%'>
                  <HStack justify='center' w='100%'>
                    <Image w='16%' src={threem} alt='threem'></Image>
                    <Spacer />
                    <Image w='16%' src={tuk} alt='tuk'></Image>
                    <Spacer />
                    <Image w='16%' src={dewalt} alt='dewalt'></Image>
                    <Spacer />
                    <Image w='16%' src={xerox} alt='xerox'></Image>
                  </HStack>
                  <HStack justify='center' w='100%'>
                    <Image w='16%' src={honeywell} alt='honeywell'></Image>
                    <Spacer />
                    <Image w='16%' src={maqpack} alt='maqpack'></Image>
                    <Spacer />
                    <Image w='16%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer />
                    <Image w='16%' src={jhonson} alt='jhonson'></Image>
                  </HStack>
                  <HStack justify='center' w='100%'>
                    <Image w='16%' src={fromm} alt='fromm'></Image>
                    <Spacer />
                    <Image w='16%' src={dupont} alt='dupont'></Image>
                    <Spacer />
                    <Image w='16%' src={zebra} alt='zebra'></Image>
                    <Spacer />
                    <Image w='16%' src={wd40} alt='wd40'></Image>
                  </HStack>
                  <HStack justify='center' w='100%'>
                    <Image w='16%' src={gojo} alt='gojo'></Image>
                    <Spacer />
                    <Image w='16%' src={pandg} alt='pandg'></Image>
                    <Spacer />
                    <Image w='16%' src={surtek} alt='surtek'></Image>
                    <Spacer />
                    <Image w='16%' src={steelpro} alt='steelpro'></Image>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
            <Foot />
          </Stack>
        </div>
        <div class="desktopsm">
          <meta name='viewport' content='width=device-width , initial-scale=1' />
          <Header />
          <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <VStack w='100%' justify='center' >
              <VStack h='50vh' p='1%' w='100%' bgColor='rgb(250,250,250)'>
                <HStack w='90%' spacing={10}>
                  <VStack bgColor='rgb(255,255,255)' m='0' w='100%' h='100%' fontFamily='Roboto-Regular' spacing={0} transitionDuration='0.3s' _hover={{transform: 'scale(1.1)'}}>
                    <Box m='0' h='40%' w='100%' bgImage={nosotrosyellow} bgPos='center' bgSize='cover' borderRadius='15px 15px 0 0'></Box>
                    <VStack m='0' p='5%' h='60%' w='100%' color='white' borderColor='#b7791f' borderWidth='5px' borderTop='0'>
                      <Button as={ReactRouterLink} to={'/nosotros'} variant='outline' colorScheme='yellow' size='lg'>Nosotros</Button>
                      <Text marginBottom='5%' fontSize='sm' color='rgb(100,100,100)'>¡Conócenos! Mas informacion sobre <Text color='#b7791f' as='span'>Dinex.</Text></Text>
                    </VStack>
                  </VStack>
                  <VStack bgColor='rgb(255,255,255)' m='0' w='100%' h='100%' fontFamily='Roboto-Regular' spacing={0} transitionDuration='0.3s' _hover={{transform: 'scale(1.1)'}}>
                    <Box m='0' h='40%' w='100%' bgImage={serviciosblue} bgPos='center' bgSize='cover' borderRadius='15px 15px 0 0'></Box>
                    <VStack m='0' p='5%' h='60%' w='100%' color='white' borderColor='#2b71ba' borderWidth='5px' borderTop='0'>
                      <Button as={ReactRouterLink} to={'/servicios'} variant='outline' colorScheme='blue' size='lg'>Servicios</Button>
                      <Text fontSize='sm' color='rgb(100,100,100)'>Estos son los <Text color='#2b71ba' as='span'>servicios</Text> que proporcionamos.</Text>
                    </VStack>
                  </VStack>
                  <VStack bgColor='rgb(255,255,255)' m='0' w='100%' h='100%' fontFamily='Roboto-Regular' spacing={0} transitionDuration='0.3s' _hover={{transform: 'scale(1.1)'}}>
                    <Box m='0' h='40%' w='100%' bgImage={suministrosgreen} bgPos='center' bgSize='cover' borderRadius='15px 15px 0 0'></Box>
                    <VStack m='0' p='5%' h='60%' w='100%' color='white' borderColor='#2f8564' borderWidth='5px' borderTop='0'>
                      <Button as={ReactRouterLink} to={'/suministros'} variant='outline' colorScheme='green' size='lg'>Suministros Industriales</Button>
                      <Text fontSize='sm' color='rgb(100,100,100)'>El que mejor se adapte, <Text color='#2f8564' as='span'>Suministros Industriales.</Text></Text>
                    </VStack>
                  </VStack>
                </HStack>
                <Spacer />
                <HStack w='80%' spacing={10}>
                  <VStack bgColor='rgb(255,255,255)' m='0' w='100%' h='100%' fontFamily='Roboto-Regular' spacing={0} transitionDuration='0.3s' _hover={{transform: 'scale(1.1)'}}>
                    <Box m='0' h='40%' w='100%' bgImage={contactopurple} bgPos='center' bgSize='cover' borderRadius='15px 15px 0 0'></Box>
                    <VStack m='0' p='5%' h='60%' w='100%' color='white' borderColor='#6b46c1' borderWidth='5px' borderTop='0'>
                      <Button as={ReactRouterLink} to={'/contacto'} variant='outline' colorScheme='purple' size='lg' >Contacto</Button>
                      <Text marginBottom='5%' fontSize='sm' color='rgb(100,100,100)'>¿Le interesa? <Text color='#6b46c1' as='span'>¡Contactanos!</Text></Text>
                    </VStack>
                  </VStack>
                  <VStack bgColor='rgb(255,255,255)' m='0' w='100%' h='100%' fontFamily='Roboto-Regular' spacing={0} transitionDuration='0.3s' _hover={{transform: 'scale(1.1)'}}>
                    <Box m='0' h='40%' w='100%' bgImage={maquinadospink} bgPos='center' bgSize='cover' borderRadius='15px 15px 0 0'></Box>
                    <VStack m='0' p='5%' h='60%' w='100%' color='white' borderColor='#b83280' borderWidth='5px' borderTop='0'>
                      <Button as={ReactRouterLink} to={'https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing'} isExternal target='_blank' variant='outline' colorScheme='pink' size='lg'>Catalogo</Button>
                      <Text fontSize='sm' color='#b83280'>¡Nuestro Catalogo! <Text color='rgba(100,100,100)' as='span'>Variedad y mas.</Text></Text>
                    </VStack>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
            <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' fontSize='18px' fontFamily='artegra-600' textAlign='center'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
            <VStack>
              <HStack width='95%' fontFamily='Roboto-Regular'>
                <Box w='30%'>
                  <Image w='100%' src={experiencia} alt='experiencia' />
                </Box>
                <Box w='100%' fontSize='18px'>
                  <Text lineHeight='20px' letterSpacing='0.06VW' fontWeight='bold' marginTop='2%'>Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Ofrecemos soluciones eficientes y a tu medida.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.</Text>
                </Box>
              </HStack>
            </VStack>
            <hr />
            <VStack width='100%'>
              <Heading letterSpacing='0.16vw' fontSize='16px'>SOCIOS COMERCIALES</Heading>
              <Text letterSpacing='0.10vw' fontSize='18px' width='90%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
              <HStack width='100%' justify='center'>
                <VStack w='90%' justify='center'>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={threem} alt='threem'></Image>
                    <Spacer />
                    <Image w='12%' src={tuk} alt='tuk'></Image>
                    <Spacer />
                    <Image w='12%' src={dewalt} alt='dewalt'></Image>
                    <Spacer />
                    <Image w='12%' src={xerox} alt='xerox'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={honeywell} alt='honeywell'></Image>
                    <Spacer />
                    <Image w='12%' src={maqpack} alt='maqpack'></Image>
                    <Spacer />
                    <Image w='12%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer />
                    <Image w='12%' src={jhonson} alt='jhonson'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={fromm} alt='fromm'></Image>
                    <Spacer />
                    <Image w='12%' src={dupont} alt='dupont'></Image>
                    <Spacer />
                    <Image w='12%' src={zebra} alt='zebra'></Image>
                    <Spacer />
                    <Image w='12%' src={wd40} alt='wd40'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={gojo} alt='gojo'></Image>
                    <Spacer />
                    <Image w='12%' src={pandg} alt='pandg'></Image>
                    <Spacer />
                    <Image w='12%' src={surtek} alt='surtek'></Image>
                    <Spacer />
                    <Image w='12%' src={steelpro} alt='steelpro'></Image>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
            <Foot />
          </Stack>
        </div>
        <div class="laptop">
          <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
          <Header />
          <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
              <HStack position='absolute' w='90%' top='25%'>
                <Button transform='scale(1.4)' transitionDuration='0.2s' backdropFilter='auto' backdropBlur='2px' borderRadius='100%' p='0' fontSize='20px' bgColor='rgba(0,0,0,0.7)' color='rgb(255,230,0)' borderColor='rgb(255,230,0)' borderWidth='2px' _hover={{ transform: 'scale(1.6)' }} _active={{ transform: 'scale(1)' }}><RiArrowLeftLine /></Button>
                <Spacer />
                <Button transform='scale(1.4)' transitionDuration='0.2s' backdropFilter='auto' backdropBlur='2px' borderRadius='100%' p='0' fontSize='20px' bgColor='rgba(0,0,0,0.7)' color='rgb(255,230,0)' borderColor='rgb(255,230,0)' borderWidth='2px' _hover={{ transform: 'scale(1.6)' }} _active={{ transform: 'scale(1)' }}><RiArrowRightLine /></Button>
              </HStack>
              <Box className='menu' objectFit='cover' bgImage={nosotros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
              <Box backdropFilter='auto' backdropBlur='3px' borderRadius='20px' bgColor='rgba(0,0,0,0.7)' p='2% 2% 3% 2%' position='absolute' top='47%' left='9%' width='80%'>
                <Heading color='white' fontWeight='bold' fontSize='18px' letterSpacing='0.8px' fontFamily='Montserrat-Medium'>
                  ¿Quien somos <Text as='span' color='rgb(255,230,0)'>Nosotros</Text>?<br /><br />
                </Heading>
                <Button p='2%' transitionDuration='0.3s' fontSize='17px' bgColor='rgba(255,230,0)' color='rgb(0,0,0)' borderColor='rgb(0,0,0)' borderWidth='2px' _hover={{ transform: 'scale(1.1)', bgColor: 'rgba(0,0,0,0.7)', color: 'rgb(255,230,0)', borderColor: 'rgb(255,230,0)', borderWidth: '2px' }} _active={{ transform: 'scale(0.8)' }}>Leer Mas</Button>
              </Box>
            </HStack>
            <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' fontSize='16px' fontFamily='artegra-600' textAlign='center'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
            <VStack>
              <HStack width='95%' fontFamily='Roboto-Regular'>
                <Box w='35%'>
                  <Image w='100%' src={experiencia} alt='experiencia' />
                </Box>
                <Box w='100%' fontSize='16px'>
                  <Text lineHeight='20px' letterSpacing='0.06VW' fontWeight='bold' marginTop='2%'>Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Ofrecemos soluciones eficientes y a tu medida.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.</Text>
                </Box>
              </HStack>
            </VStack>
            <hr />
            <VStack width='100%'>
              <Heading letterSpacing='0.16vw' fontSize='16px'>SOCIOS COMERCIALES</Heading>
              <Text letterSpacing='0.06vw' fontSize='16px' width='90%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
              <HStack width='100%' justify='center'>
                <VStack w='90%' justify='center'>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={threem} alt='threem'></Image>
                    <Spacer />
                    <Image w='12%' src={tuk} alt='tuk'></Image>
                    <Spacer />
                    <Image w='12%' src={dewalt} alt='dewalt'></Image>
                    <Spacer />
                    <Image w='12%' src={xerox} alt='xerox'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={honeywell} alt='honeywell'></Image>
                    <Spacer />
                    <Image w='12%' src={maqpack} alt='maqpack'></Image>
                    <Spacer />
                    <Image w='12%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer />
                    <Image w='12%' src={jhonson} alt='jhonson'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={fromm} alt='fromm'></Image>
                    <Spacer />
                    <Image w='12%' src={dupont} alt='dupont'></Image>
                    <Spacer />
                    <Image w='12%' src={zebra} alt='zebra'></Image>
                    <Spacer />
                    <Image w='12%' src={wd40} alt='wd40'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='12%' src={gojo} alt='gojo'></Image>
                    <Spacer />
                    <Image w='12%' src={pandg} alt='pandg'></Image>
                    <Spacer />
                    <Image w='12%' src={surtek} alt='surtek'></Image>
                    <Spacer />
                    <Image w='12%' src={steelpro} alt='steelpro'></Image>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
            <Foot />
          </Stack>
        </div>
        <div class="tablet">
          <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
          <Header />
          <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <HStack justify='center' margin='0' p='0' position='relative' columnGap='0'>
              <HStack position='absolute' w='90%' top='25%'>
                <Button transform='scale(1.4)' transitionDuration='0.2s' backdropFilter='auto' backdropBlur='2px' borderRadius='100%' p='0' fontSize='20px' bgColor='rgba(0,0,0,0.7)' color='rgb(255,230,0)' borderColor='rgb(255,230,0)' borderWidth='2px' _hover={{ transform: 'scale(1.6)' }} _active={{ transform: 'scale(1)' }}><RiArrowLeftLine /></Button>
                <Spacer />
                <Button transform='scale(1.4)' transitionDuration='0.2s' backdropFilter='auto' backdropBlur='2px' borderRadius='100%' p='0' fontSize='20px' bgColor='rgba(0,0,0,0.7)' color='rgb(255,230,0)' borderColor='rgb(255,230,0)' borderWidth='2px' _hover={{ transform: 'scale(1.6)' }} _active={{ transform: 'scale(1)' }}><RiArrowRightLine /></Button>
              </HStack>
              <Box className='menu' objectFit='cover' bgImage={nosotros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
              <Box backdropFilter='auto' backdropBlur='3px' borderRadius='20px' bgColor='rgba(0,0,0,0.7)' p='4% 2% 3% 2%' position='absolute' top='47%' left='9%' width='80%'>
                <Heading color='white' fontWeight='bold' fontSize='18px' letterSpacing='0.8px' fontFamily='Montserrat-Medium'>
                  ¿Quien somos <Text as='span' color='rgb(255,230,0)'>Nosotros</Text>?<br /><br />
                </Heading>
                <Button p='2%' transitionDuration='0.3s' fontSize='17px' bgColor='rgba(255,230,0)' color='rgb(0,0,0)' borderColor='rgb(0,0,0)' borderWidth='2px' _hover={{ transform: 'scale(1.1)', bgColor: 'rgba(0,0,0,0.7)', color: 'rgb(255,230,0)', borderColor: 'rgb(255,230,0)', borderWidth: '2px' }} _active={{ transform: 'scale(0.8)' }}>Leer Mas</Button>
              </Box>
            </HStack>
            <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='2%' marginBottom='1.5%' letterSpacing='0.10vw' fontSize='12px' fontFamily='artegra-600' textAlign='center'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
            <VStack>
              <HStack width='95%' fontFamily='Roboto-Regular'>
                <Box w='35%'>
                  <Image w='100%' src={experiencia} alt='experiencia' />
                </Box>
                <Box w='100%' fontSize='16px'>
                  <Text lineHeight='20px' letterSpacing='0.10VW' fontWeight='bold' marginTop='2%'>Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Ofrecemos soluciones eficientes y a tu medida.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés.</Text>
                  <Text lineHeight='20px' letterSpacing='0.06VW' color='rgb(100,100,100)' marginTop='2%'>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.</Text>
                </Box>
              </HStack>
            </VStack>
            <hr />
            <VStack width='100%'>
              <Heading letterSpacing='0.16vw' fontSize='16px'>SOCIOS COMERCIALES</Heading>
              <Text letterSpacing='0.10vw' fontSize='16px' width='90%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
              <HStack width='100%' justify='center'>
                <VStack w='90%' justify='center'>
                  <HStack justify='center' w='90%'>
                    <Image w='14%' src={threem} alt='threem'></Image>
                    <Spacer />
                    <Image w='14%' src={tuk} alt='tuk'></Image>
                    <Spacer />
                    <Image w='14%' src={dewalt} alt='dewalt'></Image>
                    <Spacer />
                    <Image w='14%' src={xerox} alt='xerox'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='14%' src={honeywell} alt='honeywell'></Image>
                    <Spacer />
                    <Image w='14%' src={maqpack} alt='maqpack'></Image>
                    <Spacer />
                    <Image w='14%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer />
                    <Image w='14%' src={jhonson} alt='jhonson'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='14%' src={fromm} alt='fromm'></Image>
                    <Spacer />
                    <Image w='14%' src={dupont} alt='dupont'></Image>
                    <Spacer />
                    <Image w='14%' src={zebra} alt='zebra'></Image>
                    <Spacer />
                    <Image w='14%' src={wd40} alt='wd40'></Image>
                  </HStack>
                  <HStack justify='center' w='90%'>
                    <Image w='14%' src={gojo} alt='gojo'></Image>
                    <Spacer />
                    <Image w='14%' src={pandg} alt='pandg'></Image>
                    <Spacer />
                    <Image w='14%' src={surtek} alt='surtek'></Image>
                    <Spacer />
                    <Image w='14%' src={steelpro} alt='steelpro'></Image>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
            <Foot />
          </Stack>
        </div>
        <div class="mobile">
          <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
          <Header />
          <Stack overflowX='hidden' objectFit='cover' display='block' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
            <Whatsapp />
            <HStack justify='center' position='relative' columnGap='0'>
              <HStack position='absolute' w='90%' top='25%'>
                <Button transform='scale(1.2)' transitionDuration='0.2s' backdropFilter='auto' backdropBlur='2px' borderRadius='100%' p='0' fontSize='20px' bgColor='rgba(0,0,0,0.7)' color='rgb(255,230,0)' borderColor='rgb(255,230,0)' borderWidth='2px' _hover={{ transform: 'scale(1.6)' }} _active={{ transform: 'scale(0.9)' }}><RiArrowLeftLine /></Button>
                <Spacer />
                <Button transform='scale(1.2)' transitionDuration='0.2s' backdropFilter='auto' backdropBlur='2px' borderRadius='100%' p='0' fontSize='20px' bgColor='rgba(0,0,0,0.7)' color='rgb(255,230,0)' borderColor='rgb(255,230,0)' borderWidth='2px' _hover={{ transform: 'scale(1.6)' }} _active={{ transform: 'scale(0.9)' }}><RiArrowRightLine /></Button>
              </HStack>
              <Box className='menu' objectFit='cover' display='block' bgImage={nosotros} bgRepeat='no-repeat' bgSize='cover' bgPosition='center' w='100%' h='50vh'></Box>
              <Box backdropFilter='auto' backdropBlur='2px' borderRadius='20px' bgColor='rgba(0,0,0,0.7)' p='6% 4% 5% 4%' position='absolute' top='56%' left='5%' width='90%'>
                <Heading color='white' fontWeight='bold' fontSize='16px' letterSpacing='0.8px' fontFamily='Montserrat-Medium'>
                  ¿Quien somos <Text as='span' color='rgb(255,230,0)'>Nosotros</Text>?<br /><br />
                  <Button p='5%' transitionDuration='0.3s' fontSize='14px' bgColor='rgba(255,230,0)' color='rgb(0,0,0)' borderColor='rgb(0,0,0)' borderWidth='2px' _focus={{ backdropFilter: 'auto', backdropBlur: '2px', fontSize: '14px', bgColor: 'rgba(0,0,0,0.7)', color: 'rgb(255,230,0)', borderColor: 'rgb(255,230,0)', borderWidth: '2px' }} _active={{ transform: 'scale(0.8)' }}>Leer Mas</Button>
                </Heading>
              </Box>
            </HStack>
            <Center><Heading bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='5%' w='100%' fontSize='9px' fontFamily='artegra-600' textAlign='center' marginBottom='5%'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
            <VStack bgColor='rgb(255,255,255)'>
              <Box width='90%' fontFamily='Roboto-Regular' letterSpacing='0.14vw'>
                <Image w='45%' float='left' src={experiencia} alt='experiencia'></Image>
                <Text fontWeight='bolder' fontSize='12px' lineHeight='15px'>
                  Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.
                </Text>
                <Text fontSize='12px' color='rgb(100,100,100)' lineHeight='15px' marginTop='2%'>Ofrecemos soluciones eficientes y a tu medida.</Text>
                <Text fontSize='12px' color='rgb(100,100,100)' lineHeight='15px' marginTop='2%'>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés.</Text>
                <Text fontSize='12px' color='rgb(100,100,100)' lineHeight='15px' marginTop='2%'>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.</Text>
              </Box>
            </VStack>
            <hr />
            <VStack textAlign='center' width='100%'>
              <Heading letterSpacing='0.16vw' fontSize='15px'>SOCIOS COMERCIALES</Heading>
              <Text letterSpacing='0.10vw' fontSize='13px' width='90%' textAlign='justify' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
              <VStack justify='center' w='90%'>
                <HStack justify='center' w='100%'>
                  <Image w='30%' src={threem} alt='threem'></Image>
                  <Image w='30%' src={dewalt} alt='dewalt'></Image>
                  <Image w='30%' src={pandg} alt='pandg'></Image>
                </HStack>
                <Spacer />
                <HStack justify='center' w='100%'>
                  <Image w='30%' src={honeywell} alt='honeywell'></Image>
                  <Image w='30%' src={rubbermaid} alt='rubbermaid'></Image>
                  <Image w='30%' src={steelpro} alt='steelpro'></Image>
                </HStack>
                <Spacer />
                <HStack justify='center' w='100%'>
                  <Image w='30%' src={fromm} alt='fromm'></Image>
                  <Image w='30%' src={zebra} alt='zebra'></Image>
                  <Image w='30%' src={dupont} alt='dupont'></Image>
                </HStack>
                <Spacer />
                <HStack justify='center' w='100%'>
                  <Image w='30%' src={tuk} alt='tuk'></Image>
                  <Image w='30%' src={xerox} alt='xerox'></Image>
                  <Image w='30%' src={wd40} alt='wd40'></Image>
                </HStack>
                <Spacer />
                <HStack justify='center' w='100%'>
                  <Image w='30%' src={maqpack} alt='maqpack'></Image>
                  <Image w='30%' src={jhonson} alt='jhonson'></Image>
                </HStack>
              </VStack>
            </VStack>
            <Foot />
          </Stack>
        </div>
      </ChakraProvider>
    </>
  );
}
