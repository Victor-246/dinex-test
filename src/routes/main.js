import '../App.css';
import React from 'react';
import Helmet from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer , Box , Flex, HStack, VStack, Stack, Center , Image , Text , Button , extendTheme, Heading, AspectRatio , Link , isExternal} from '@chakra-ui/react';

/* Components */
import Header from '../components/header.js';
import Foot from '../components/foot.js';
import Whatsapp from '../components/whatsapp.js';
import Catalago from '../components/catalogo.js';

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

export default function Main() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title> DINEX - Servicios Industriales</title>
    </Helmet>
    <ChakraProvider>
      <div class="desktoplg">
      <Header/>
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
            <br/>
            <Text color='rgb(100,100,100)'>
            Ofrecemos soluciones eficientes y a tu medida.<br/>
            <br/>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés.
            <br/><br/>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.
            </Text>
          </Box>
          <Box width='33%'><Box borderWidth='4px' borderColor='rgb(255,230,0)'><Image src={envios} alt='envios'></Image></Box></Box>
        </HStack>
        <hr/>
        <HStack w='100%' justify='center'>
          <HStack w='96%'>
            <VStack spacing={4} w='100%' justify='center' textAlign='center' fontSize='28px'>
              <Heading fontWeight='regular' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Heading>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                <Image w='15%' src={suministros} alt='suministros'></Image>
                <Text color='rgb(119,119,119)'><b>Suministros Industriales, Material y Refacciones</b> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
              </HStack>
              <Spacer/>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                <Image w='15%' src={mantenimiento} alt='mantenimiento'></Image>
                <Text color='rgb(119,119,119)'><b>Mantenimiento, Instalación y Reparación</b> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
              </HStack>
              <Spacer/>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                <Image w='15%' src={maquinando} alt='maquinando'></Image>
                <Text color='rgb(119,119,119)'><b>Maquinados y Fabricación</b> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
              </HStack>
              <Spacer/>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                <Image w='15%' src={logisticos} alt='logisticos'></Image>
                <Text color='rgb(119,119,119)'><b>Servicios Logísticos</b> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
              </HStack>
            </VStack>
            <Spacer/>
            <Flex w='80%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
          </HStack>
        </HStack>
        <hr/>
        <Catalago />
        <hr/>
        <VStack width='100%'>
          <Heading fontSize='50px' letterSpacing='0.16vw'>SOCIOS COMERCIALES</Heading>
          <Text letterSpacing='0.10vw' fontSize='32px' width='70%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
          <HStack width='100%' justify='center'>
              <VStack w='90%'>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={threem} alt='threem'></Image>
                    <Spacer/>
                    <Image w='16%' src={tuk} alt='tuk'></Image>
                    <Spacer/>
                    <Image w='16%' src={dewalt} alt='dewalt'></Image>
                    <Spacer/>
                    <Image w='16%' src={xerox} alt='xerox'></Image>    
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={honeywell} alt='honeywell'></Image>
                    <Spacer/>
                    <Image w='16%' src={maqpack} alt='maqpack'></Image>
                    <Spacer/>
                    <Image w='16%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer/>
                    <Image w='16%' src={jhonson} alt='jhonson'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={fromm} alt='fromm'></Image>
                    <Spacer/>
                    <Image w='16%' src={dupont} alt='dupont'></Image>
                    <Spacer/>
                    <Image w='16%' src={zebra} alt='zebra'></Image>
                    <Spacer/>
                    <Image w='16%' src={wd40} alt='wd40'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={gojo} alt='gojo'></Image>
                    <Spacer/>
                    <Image w='16%' src={pandg} alt='pandg'></Image>
                    <Spacer/>
                    <Image w='16%' src={surtek} alt='surtek'></Image>
                    <Spacer/>
                    <Image w='16%' src={steelpro} alt='steelpro'></Image>
                </HStack>
            </VStack>
          </HStack> 
        </VStack>
        <Foot/>
      </Stack>
      </div>
      <div class="desktopsm">
      <Header/>
      <Stack columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
        <Whatsapp />
        <Box height='100%' position='relative' columnGap='0'>
          <AspectRatio maxH='100%' ratio={1} pointerEvents='none' columnGap='0' >
            <video preload="metadata" autoPlay loop>
              <source src={dinexfondo} typeof='video/mp4' />
            </video>
          </AspectRatio>
          <Heading textAlign='center' position='absolute' top='40%' left='5%' width='90%' color='white' fontWeight='bold' fontSize='40px' fontFamily='Montserrat-Medium'>         
            RESOLVEMOS TODAS TUS NECESIDADES INDUSTRIALES PARA QUE TU FÁBRICA SIGA OPERANDO ÓPTIMAMENTE
          </Heading>
        </Box>
        <Center><Heading bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='5%' w='100%' fontSize='32px' fontFamily='artegra-600' textAlign='center'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
        <HStack w='100%' bgColor='rgb(255,255,255)' columnGap={0} margin='1% 0% 3% 0%'>
          <HStack w='90%'>
            <Image w='17%' src={Hammond} alt='Hammond'></Image>
            <Spacer />
            <Image w='17%' src={Timsa} alt='Timsa'></Image>
            <Spacer />
            <Image w='17%' src={Amazon} alt='Amazon' ></Image>
            <Spacer />
            <Image w='17%' src={Schneider} alt='Schneider' ></Image>
            <Spacer />
            <Image w='17%' src={Sisamex} alt='Sisamex'></Image>
            <Spacer />
            <Image w='17%' src={BMP} alt='BMP'></Image>
          </HStack>
        </HStack>
        <HStack bgColor='rgb(255,255,255)'>
          <Box width='33%'><Image src={experiencia} alt='experiencia'></Image></Box>
          <Box letterSpacing='0.08vw' width='50%' fontFamily='Roboto-Regular' fontSize='22px'>
            <Text fontWeight='bolder'>
              Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.
            </Text>
            <br/>
            <Text color='rgb(100,100,100)'>
            Ofrecemos soluciones eficientes y a tu medida.<br/>
            <br/>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés. 
            <br/><br/>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.
            </Text>
          </Box>
          <Box width='33%'><Box borderWidth='4px' borderColor='rgb(255,230,0)'><Image src={envios} alt='envios'></Image></Box></Box>
        </HStack>
        <hr/>
        <HStack w='100%' justify='center'>
        <HStack w='96%'>
          <VStack spacing={4} w='100%' justify='center' textAlign='center' fontSize='22px'>
            <Heading fontWeight='regular' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Heading>
            <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
              <Image w='15%' src={suministros} alt='suministros'></Image>
              <Text color='rgb(119,119,119)'><b>Suministros Industriales, Material y Refacciones</b> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
            </HStack>
            <Spacer/>
            <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
              <Image w='15%' src={mantenimiento} alt='mantenimiento'></Image>
              <Text color='rgb(119,119,119)'><b>Mantenimiento, Instalación y Reparación</b> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
            </HStack>
            <Spacer/>
            <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
              <Image w='15%' src={maquinando} alt='maquinando'></Image>
              <Text color='rgb(119,119,119)'><b>Maquinados y Fabricación</b> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
            </HStack>
            <Spacer/>
            <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
              <Image w='15%' src={logisticos} alt='logisticos'></Image>
              <Text color='rgb(119,119,119)'><b>Servicios Logísticos</b> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
            </HStack>
          </VStack>
          <Spacer/>
          <Flex w='80%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
        </HStack>
        </HStack>
        <hr/>
        <Catalago />
        <hr/>
        <VStack width='100%'>
          <Heading letterSpacing='0.16vw'>SOCIOS COMERCIALES</Heading>
          <Text letterSpacing='0.10vw' fontSize='24px' width='70%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
          <HStack width='100%' justify='center'>
              <VStack w='90%'>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={threem} alt='threem'></Image>
                    <Spacer/>
                    <Image w='16%' src={tuk} alt='tuk'></Image>
                    <Spacer/>
                    <Image w='16%' src={dewalt} alt='dewalt'></Image>
                    <Spacer/>
                    <Image w='16%' src={xerox} alt='xerox'></Image>    
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={honeywell} alt='honeywell'></Image>
                    <Spacer/>
                    <Image w='16%' src={maqpack} alt='maqpack'></Image>
                    <Spacer/>
                    <Image w='16%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer/>
                    <Image w='16%' src={jhonson} alt='jhonson'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={fromm} alt='fromm'></Image>
                    <Spacer/>
                    <Image w='16%' src={dupont} alt='dupont'></Image>
                    <Spacer/>
                    <Image w='16%' src={zebra} alt='zebra'></Image>
                    <Spacer/>
                    <Image w='16%' src={wd40} alt='wd40'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='16%' src={gojo} alt='gojo'></Image>
                    <Spacer/>
                    <Image w='16%' src={pandg} alt='pandg'></Image>
                    <Spacer/>
                    <Image w='16%' src={surtek} alt='surtek'></Image>
                    <Spacer/>
                    <Image w='16%' src={steelpro} alt='steelpro'></Image>
                </HStack>
            </VStack>
          </HStack> 
        </VStack>
        <Foot/>
      </Stack>
      </div>
      <div class="laptop">
      <Header/>
      <Stack columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
        <Whatsapp />
        <Box height='100%' position='relative' columnGap='0'>
          <AspectRatio maxH='100%' ratio={1} pointerEvents='none' columnGap='0' >
            <video preload="metadata" autoPlay loop>
              <source src={dinexfondo} typeof='video/mp4' />
            </video>
          </AspectRatio>
          <Heading textAlign='center' position='absolute' top='40%' left='5%' width='90%' color='white' fontWeight='bold' fontSize='40px' fontFamily='Montserrat-Medium'>         
            RESOLVEMOS TODAS TUS NECESIDADES INDUSTRIALES PARA QUE TU FÁBRICA SIGA OPERANDO ÓPTIMAMENTE
          </Heading>
        </Box>
        <Center><Heading bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='5%' w='100%' fontSize='24px' fontFamily='artegra-600' textAlign='center'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
        <HStack w='100%' bgColor='rgb(255,255,255)' columnGap={0} margin='1% 0% 2% 0%'>
          <HStack w='90%'>
            <Image w='17%' src={Hammond} alt='Hammond'></Image>
            <Spacer />
            <Image w='17%' src={Timsa} alt='Timsa'></Image>
            <Spacer />
            <Image w='17%' src={Amazon} alt='Amazon' ></Image>
            <Spacer />
            <Image w='17%' src={Schneider} alt='Schneider' ></Image>
            <Spacer />
            <Image w='17%' src={Sisamex} alt='Sisamex'></Image>
            <Spacer />
            <Image w='17%' src={BMP} alt='BMP'></Image>
          </HStack>
        </HStack>
        <HStack bgColor='rgb(255,255,255)'>
          <Box width='33%'><Image src={experiencia} alt='experiencia'></Image></Box>
          <Box width='50%' letterSpacing='0.08vw' fontFamily='Roboto-Regular' fontSize='18px'>
            <Text fontWeight='bold'>
              Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.
            </Text>
            <br/>
            <Text color='rgb(100,100,100)'>
            Ofrecemos soluciones eficientes y a tu medida.<br/>
            <br/>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés. 
            <br/><br/>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.
            </Text>
          </Box>
          <Box width='33%'><Box borderWidth='4px' borderColor='rgb(255,230,0)'><Image src={envios} alt='envios'></Image></Box></Box>
        </HStack>
        <hr/>
        <HStack w='100%' justify='center'>
          <HStack w='96%'>
            <VStack spacing={4} w='100%' justify='center' textAlign='center' fontSize='19px'>
              <Heading fontWeight='regular' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Heading>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                <Image w='15%' src={suministros} alt='suministros'></Image>
                <Text color='rgb(119,119,119)'><b>Suministros Industriales, Material y Refacciones</b> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
              </HStack>
              <Spacer/>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                <Image w='15%' src={mantenimiento} alt='mantenimiento'></Image>
                <Text color='rgb(119,119,119)'><b>Mantenimiento, Instalación y Reparación</b> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
              </HStack>
              <Spacer/>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.09vw'>
                <Image w='15%' src={maquinando} alt='maquinando'></Image>
                <Text color='rgb(119,119,119)'><b>Maquinados y Fabricación</b> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
              </HStack>
              <Spacer/>
              <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.09vw'>
                <Image w='15%' src={logisticos} alt='logisticos'></Image>
                <Text color='rgb(119,119,119)'><b>Servicios Logísticos</b> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
              </HStack>
            </VStack>
            <Spacer/>
            <Flex w='80%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
          </HStack>
        </HStack>
        <hr/>
        <Catalago />
        <hr/>
        <VStack width='100%'>
          <Heading letterSpacing='0.16vw'>SOCIOS COMERCIALES</Heading>
          <Text letterSpacing='0.10vw' fontSize='24px' width='90%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
          <HStack width='100%' justify='center'>
              <VStack w='90%'>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={threem} alt='threem'></Image>
                    <Spacer/>
                    <Image w='19%' src={tuk} alt='tuk'></Image>
                    <Spacer/>
                    <Image w='19%' src={dewalt} alt='dewalt'></Image>
                    <Spacer/>
                    <Image w='19%' src={xerox} alt='xerox'></Image>    
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={honeywell} alt='honeywell'></Image>
                    <Spacer/>
                    <Image w='19%' src={maqpack} alt='maqpack'></Image>
                    <Spacer/>
                    <Image w='19%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer/>
                    <Image w='19%' src={jhonson} alt='jhonson'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={fromm} alt='fromm'></Image>
                    <Spacer/>
                    <Image w='19%' src={dupont} alt='dupont'></Image>
                    <Spacer/>
                    <Image w='19%' src={zebra} alt='zebra'></Image>
                    <Spacer/>
                    <Image w='19%' src={wd40} alt='wd40'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={gojo} alt='gojo'></Image>
                    <Spacer/>
                    <Image w='19%' src={pandg} alt='pandg'></Image>
                    <Spacer/>
                    <Image w='19%' src={surtek} alt='surtek'></Image>
                    <Spacer/>
                    <Image w='19%' src={steelpro} alt='steelpro'></Image>
                </HStack>
            </VStack>
          </HStack> 
        </VStack>
        <Foot/>
      </Stack>
      </div>
      <div class="tablet">
      <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
      <Header/>
      <Stack overflowX='hidden' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
        <Whatsapp />
        <Box height='100%' position='relative' columnGap='0'>
          <AspectRatio maxH='100%' ratio={1} pointerEvents='none' columnGap='0' >
            <video preload="metadata" autoPlay loop>
              <source src={dinexfondo} typeof='video/mp4' />
            </video>
          </AspectRatio>
          <Heading textAlign='center' position='absolute' top='40%' left='5%' width='90%' color='white' fontWeight='bold' fontSize='26px' letterSpacing='1px' fontFamily='Montserrat-Medium'>         
            RESOLVEMOS TODAS TUS NECESIDADES INDUSTRIALES PARA QUE TU FÁBRICA SIGA OPERANDO ÓPTIMAMENTE
          </Heading>
        </Box>
        <Center><Heading w='100%' bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='5%' fontSize='18px' fontFamily='artegra-600' textAlign='center'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
        <HStack w='100%' bgColor='rgb(255,255,255)' columnGap={0}  margin='1% 0% 2% 0%'>
          <HStack w='90%'>
            <Image w='16.5%' src={Hammond} alt='Hammond'></Image>
            <Spacer />
            <Image w='16.5%' src={Timsa} alt='Timsa'></Image>
            <Spacer />
            <Image w='16.5%' src={Amazon} alt='Amazon' ></Image>
            <Spacer />
            <Image w='16.5%' src={Schneider} alt='Schneider' ></Image>
            <Spacer />
            <Image w='16.5%' src={Sisamex} alt='Sisamex'></Image>
            <Spacer />
            <Image w='16.5%' src={BMP} alt='BMP'></Image>
          </HStack>
        </HStack>
        <VStack bgColor='rgb(255,255,255)'>
          <Box width='95%' fontFamily='Roboto-Regular'>
            <Image w='40%' float='left' src={experiencia} alt='experiencia'></Image>
            <Text textAlign='left' letterSpacing='0.10VW' fontWeight='bold' fontSize='20px'>
                Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.
            </Text>
            <br/>
            <Text fontSize='20px' letterSpacing='0.06VW' color='rgb(100,100,100)'>
            Ofrecemos soluciones eficientes y a tu medida.<br/>
            <br/>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés. 
            <br/><br/>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.
            </Text>
          </Box>
        </VStack>
        <hr/>
        <VStack>
        <VStack spacing={4} w='100%' justify='center' textAlign='center' fontSize='19px'>
          <Heading fontWeight='regular' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Heading>
          <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.12vw'>
            <Image w='12%' src={suministros} alt='suministros'></Image>
            <Text color='rgb(119,119,119)'><b>Suministros Industriales, Material y Refacciones</b> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
          </HStack>
          <Spacer/>
          <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.12vw'>
            <Image w='12%' src={mantenimiento} alt='mantenimiento'></Image>
            <Text color='rgb(119,119,119)'><b>Mantenimiento, Instalación y Reparación</b> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
          </HStack>
          <Spacer/>
          <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.12vw'>
            <Image w='12%' src={maquinando} alt='maquinando'></Image>
            <Text color='rgb(119,119,119)'><b>Maquinados y Fabricación</b> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
          </HStack>
          <Spacer/>
          <HStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.12vw'>
            <Image w='12%' src={logisticos} alt='logisticos'></Image>
            <Text color='rgb(119,119,119)'><b>Servicios Logísticos</b> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
          </HStack>
        </VStack>
        <Spacer/>
        <Flex w='60%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
        </VStack>
        <hr/>
        <Catalago />
        <hr/>
        <VStack width='100%'>
          <Heading letterSpacing='0.16vw'>SOCIOS COMERCIALES</Heading>
          <Text letterSpacing='0.10vw' fontSize='20px' width='90%' textAlign='center' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
          <HStack width='100%' justify='center'>
              <VStack w='90%'>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={threem} alt='threem'></Image>
                    <Spacer/>
                    <Image w='19%' src={tuk} alt='tuk'></Image>
                    <Spacer/>
                    <Image w='19%' src={dewalt} alt='dewalt'></Image>
                    <Spacer/>
                    <Image w='19%' src={xerox} alt='xerox'></Image>    
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={honeywell} alt='honeywell'></Image>
                    <Spacer/>
                    <Image w='19%' src={maqpack} alt='maqpack'></Image>
                    <Spacer/>
                    <Image w='19%' src={rubbermaid} alt='rubbermaid'></Image>
                    <Spacer/>
                    <Image w='19%' src={jhonson} alt='jhonson'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={fromm} alt='fromm'></Image>
                    <Spacer/>
                    <Image w='19%' src={dupont} alt='dupont'></Image>
                    <Spacer/>
                    <Image w='19%' src={zebra} alt='zebra'></Image>
                    <Spacer/>
                    <Image w='19%' src={wd40} alt='wd40'></Image>
                </HStack>
                <HStack justify='center' w='100%'>
                    <Image w='19%' src={gojo} alt='gojo'></Image>
                    <Spacer/>
                    <Image w='19%' src={pandg} alt='pandg'></Image>
                    <Spacer/>
                    <Image w='19%' src={surtek} alt='surtek'></Image>
                    <Spacer/>
                    <Image w='19%' src={steelpro} alt='steelpro'></Image>
                </HStack>
            </VStack>
          </HStack> 
        </VStack>
        <Foot/>
      </Stack>
      </div>
      <div class="mobile">
      <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
      <Header/>
      <Stack overflowX='hidden' columnGap='0' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
        <Whatsapp />
        <Box height='100%' position='relative' columnGap='0'>
          <AspectRatio maxH='100%' ratio={1} pointerEvents='none' columnGap='0' >
            <video preload="metadata" autoPlay loop>
              <source src={dinexfondo} typeof='video/mp4' />
            </video>
          </AspectRatio>
          <Heading textAlign='center' position='absolute' top='40%' left='5%' width='90%' color='white' fontWeight='bold' fontSize='14px' letterSpacing='1px' fontFamily='Montserrat-Medium'>         
            RESOLVEMOS TODAS TUS NECESIDADES INDUSTRIALES PARA QUE TU FÁBRICA SIGA OPERANDO ÓPTIMAMENTE
          </Heading>
        </Box>
        <Center><Heading bgColor='rgb(23,25,38)' color='rgb(255,230,0)' padding='5%' fontSize='13px' fontFamily='artegra-600' textAlign='center' marginBottom='5%'>EJECUTIVOS  PERSONALES Y DEDICADOS A SU CUENTA NOS DISTINGUEN</Heading></Center>
        <VStack bgColor='rgb(255,255,255)'>
          <Box width='90%' fontFamily='Roboto-Regular' letterSpacing='0.14vw'>
            <Image w='50%' float='left' src={experiencia} alt='experiencia'></Image>
            <Text textAlign='justify' fontWeight='bolder' fontSize='16px'>
                Orientados a resolver tus necesidades con servicios industriales de forma rapida y confiable que te permitiran operar sin interrupciones.
            </Text>
            <br/>
            <Text fontSize='16px' color='rgb(100,100,100)'>
            Ofrecemos soluciones eficientes y a tu medida.<br/>
            <br/>Nos enfocamos en que recibas tus productos en el momento en el que los necesitas y donde quiera que estés. 
            <br/><br/>Nuestro servicio pone énfasis en que tus productos viajen con la calidad y cuidados óptimos para llegar a tus manos.
            </Text>
          </Box>
        </VStack>
        <hr/>
        <VStack>
        <VStack spacing={4} w='100%' justify='center' textAlign='center'>
          <Text fontSize='24px' textAlign='center' fontFamily='artegra-400'>NUESTROS <Text as='b'>SERVICIOS</Text></Text>
          <VStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.20vw'>
            <Image w='21%' src={suministros} alt='suministros'></Image>
            <Text fontSize='17px' color='rgb(119,119,119)'><b>Suministros Industriales, Material y Refacciones</b> de equipo eléctrico, herramientas y consumibles para oficina.</Text>
          </VStack>
          <Spacer/>
          <VStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.20vw'>
            <Image w='21%' src={mantenimiento} alt='mantenimiento'></Image>
            <Text fontSize='17px' color='rgb(119,119,119)'><b>Mantenimiento, Instalación y Reparación</b> de equipo hidráulico y neumático, equipo de refrigeración y aire acondicionado.</Text>
          </VStack>
          <Spacer/>
          <VStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.20vw'>
            <Image w='21%' src={maquinando} alt='maquinando'></Image>
            <Text fontSize='17px' color='rgb(119,119,119)'><b>Maquinados y Fabricación</b> de piezas, incluye modelado y diseño de partes, rectificados y trabajos con taladro fresador.</Text>
          </VStack>
          <Spacer/>
          <VStack w='93%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.20vw'>
            <Image w='21%' src={logisticos} alt='logisticos'></Image>
            <Text fontSize='17px' color='rgb(119,119,119)'><b>Servicios Logísticos</b> que incluyen almacenamiento de material y transportación de mercancías puerta a puerta.</Text>
          </VStack>
        </VStack>
        <Spacer/>
        <Flex w='95%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
        </VStack>
        <hr/>
        <Catalago />
        <hr/>
        <VStack textAlign='center' width='100%'>
          <Heading letterSpacing='0.16vw' fontSize='24px'>SOCIOS COMERCIALES</Heading>
          <Text letterSpacing='0.10vw' fontSize='18px' width='90%' textAlign='justify' color='rgb(129,129,129)'>Nuestros socios comerciales poseen una vasta experiencia  brindando servicios con la más alta calidad del mercado industrial.</Text>
            <VStack justify='center' w='90%'>
              <HStack justify='center' w='100%'>
                <Image w='45%' src={threem} alt='threem'></Image>
                <Image w='45%' src={dewalt} alt='dewalt'></Image>
              </HStack>
              <Spacer/>
              <HStack justify='center' w='100%'>
                <Image w='45%' src={honeywell} alt='honeywell'></Image>
                <Image w='45%' src={rubbermaid} alt='rubbermaid'></Image>    
              </HStack>
              <Spacer/>
              <HStack justify='center' w='100%'>
                <Image w='45%' src={fromm} alt='fromm'></Image>
                <Image w='45%' src={zebra} alt='zebra'></Image>
              </HStack>
              <Spacer/>
              <HStack justify='center' w='100%'>
                <Image w='45%' src={tuk} alt='tuk'></Image>
                <Image w='45%' src={xerox} alt='xerox'></Image>
              </HStack>
              <Spacer/>
              <HStack justify='center' w='100%'>
                <Image w='45%' src={maqpack} alt='maqpack'></Image>
                <Image w='45%' src={jhonson} alt='jhonson'></Image>
              </HStack>
              <Spacer/>
              <HStack justify='center' w='100%'>
                <Image w='45%' src={dupont} alt='dupont'></Image>
                <Image w='45%' src={wd40} alt='wd40'></Image>
              </HStack>
              <Spacer/>
              <HStack justify='center' w='100%'>
                <Image w='45%' src={pandg} alt='pandg'></Image>
                <Image w='45%' src={steelpro} alt='steelpro'></Image>
              </HStack>
            </VStack>
        </VStack>
        <Foot/>
      </Stack>
      </div>
    </ChakraProvider>
    </>
  );
}
