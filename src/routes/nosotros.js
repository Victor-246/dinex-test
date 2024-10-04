import React from "react";
import '../App.css';
import { Helmet } from "react-helmet";

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer , Box , Flex, HStack, VStack, Stack, Center , Image , Text , Button , extendTheme, Heading, AspectRatio} from '@chakra-ui/react';

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
import catalogoportada from '../media/images/catalalogo-portada.png'

export default function Nosotros() {
    return(
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
                <br/>
                <Stack w='100%' alignItems='center'>
                    <Box fontWeight='bold' textAlign='center' w='75%' letterSpacing='0.08vw'>
                        <Heading>NOSOTROS</Heading>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='32px'>
                            MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN
                        </Text>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='28px'>
                            Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                        </Text>
                        <br/>
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
                        <Spacer/>
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
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group19} alt='group19'></Image>
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group20} alt='group20'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='32px' letterSpacing='0.08vw'>
                        <Text w='100%'>Servicios personalizados a la medida de tu empresa</Text>
                        <Spacer/>
                        <Text w='100%'>Ajustamos la solución a tu presupuesto</Text>
                        <Spacer/>
                        <Text w='100%'>Informes detallados de la ruta y envío</Text>
                    </HStack>
                    <HStack w='96%' justify='center'>
                        <Image w='30%' p='8.5%' src={group171} alt='group171'></Image>
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group22} alt='group22'></Image>
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group23} alt='group23'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start'  fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='32px' letterSpacing='0.08vw'>
                        <Text w='100%'>Feedback en actividades de pre-venta y servicio al cliente</Text>
                        <Spacer/>
                        <Text w='100%'>Variedad de productos listos para tu operación</Text>
                        <Spacer/>
                        <Text w='100%'>Coordinación y planificación del envío</Text>
                    </HStack>
                </VStack>
                </HStack>    
                <hr/>
                <Catalogo />
                <Foot />
            </Stack>
            </div>
            <div class='desktopsm'>
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/>
                <Stack w='100%' alignItems='center'>
                    <Box fontWeight='bold' textAlign='center' w='75%' letterSpacing='0.10vw'>
                        <Heading>NOSOTROS</Heading>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='26px'>
                            MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN
                        </Text>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='21px'>
                            Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                        </Text>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='21px'>
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
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={vision} alt='vision'></Image>
                    </HStack>
                    <HStack margin='-5% 0 -2% 0' w='100%' fontSize='28px' fontWeight='bolder' letterSpacing='0.12vw'>
                        <Text w='100%' marginBottom='2%'>MISIÓN</Text>
                        <Text w='100%' marginBottom='2%'>VISIÓN</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' textAlign='center' letterSpacing='0.10vw' fontFamily='Roboto-Regular' fontSize='22px' color='rgb(119,119,119)'>
                        <Text w='100%'>Solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.</Text>
                        <Text w='100%'>Convertirnos en un socio estratégico en la industria y mantenernos como la mejor alternativa comercial para nuestros clientes, siempre basando nuestras operaciones en la honestidad, lealtad y confiabilidad.</Text>
                    </HStack>
                </VStack>
                </HStack> 
                <hr />
                <Heading>VALORES AGREGADOS</Heading>
                <HStack width='100%' justify='center'>
                <VStack w='89%'>
                    <HStack w='98%' justify='center'>
                        <Image w='30%' p='8.5%' src={group24} alt='group24'></Image>
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group19} alt='group19'></Image>
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group20} alt='group20'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='22px' letterSpacing='0.10vw'>
                        <Text w='100%'>Servicios personalizados a la medida de tu empresa</Text>
                        <Spacer/>
                        <Text w='100%'>Ajustamos la solución a tu presupuesto</Text>
                        <Spacer/>
                        <Text w='100%'>Informes detallados de la ruta y envío</Text>
                    </HStack>
                    <HStack w='98%' justify='center'>
                        <Image w='30%' p='8.5%' src={group171} alt='group171'></Image>
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group22} alt='group22'></Image>
                        <Spacer/>
                        <Image w='30%' p='8.5%' src={group23} alt='group23'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start'  fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='22px' letterSpacing='0.10vw'>
                        <Text w='100%'>Feedback en actividades de pre-venta y servicio al cliente</Text>
                        <Spacer/>
                        <Text w='100%'>Variedad de productos listos para tu operación</Text>
                        <Spacer/>
                        <Text w='100%'>Coordinación y planificación del envío</Text>
                    </HStack>
                </VStack>
                </HStack>    
                <hr/>
                <Catalogo />
                <Foot />
            </Stack>
            </div>
            <div class='laptop'>
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/>
                <Stack w='100%' alignItems='center' letterSpacing='0.10vw'>
                    <Box fontWeight='bold' textAlign='center' w='75%'>
                        <Heading>NOSOTROS</Heading>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='24px'>
                            MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN
                        </Text>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='20px'>
                            Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                        </Text>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='20px'>
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
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={vision} alt='vision'></Image>
                    </HStack>
                    <HStack margin='-5% 0 -2% 0' w='100%' fontSize='26px' fontWeight='bolder' letterSpacing='0.14vw'>
                        <Text w='100%' marginBottom='2%'>MISIÓN</Text>
                        <Text w='100%' marginBottom='2%'>VISIÓN</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' textAlign='center' letterSpacing='0.10vw' fontFamily='Roboto-Regular' fontSize='20px' color='rgb(119,119,119)'>
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
                        <Image w='33%' p='8.5%' src={group24} alt='group24'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group19} alt='group19'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group20} alt='group20'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='18px' letterSpacing='0.10vw'>
                        <Text w='100%'>Servicios personalizados a la medida de tu empresa</Text>
                        <Text w='100%'>Ajustamos la solución a tu presupuesto</Text>
                        <Text w='100%'>Informes detallados de la ruta y envío</Text>
                    </HStack>
                    <HStack w='96%' justify='center'>
                        <Image w='33%' p='8.5%' src={group171} alt='group171'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group22} alt='group22'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group23} alt='group23'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='18px' letterSpacing='0.10vw'>
                        <Text w='100%'>Feedback en actividades de pre-venta y servicio al cliente</Text>
                        <Text w='100%'>Variedad de productos listos para tu operación</Text>
                        <Text w='100%'>Coordinación y planificación del envío</Text>
                    </HStack>
                </VStack>
                </HStack>    
                <hr/>
                <Catalogo />
                <Foot />
            </Stack>
            </div>
            <div class="tablet">
            <meta name='viewport' content='width=device-width , initial-scale=1' />
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/>
                <Stack w='100%' alignItems='center'>
                    <Box fontWeight='bold' textAlign='left' w='95%' fontFamily='Roboto-Regular' letterSpacing='0.08vw'>
                        <Heading textAlign='center'>NOSOTROS</Heading>
                        <br/>
                        <Text textAlign='center' fontSize='20px'>
                            MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN
                        </Text>
                        <br/>
                        <Text textAlign='center' fontSize='18px'>
                            Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                        </Text>
                        <br/>
                        <Text textAlign='center' fontSize='18px'>
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
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={vision} alt='vision'></Image>
                    </HStack>
                    <HStack margin='-5% 0 -2% 0' w='100%' fontSize='26px' fontWeight='bolder' letterSpacing='0.14vw'>
                        <Text w='100%' marginBottom='2%'>MISIÓN</Text>
                        <Text w='100%' marginBottom='2%'>VISIÓN</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' textAlign='center' letterSpacing='0.10vw' fontFamily='Roboto-Regular' fontSize='20px' color='rgb(119,119,119)'>
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
                        <Image w='33%' p='8.5%' src={group24} alt='group24'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group19} alt='group19'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group20} alt='group20'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start'  fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='18px' letterSpacing='0.10vw'>
                        <Text w='100%'>Servicios personalizados a la medida de tu empresa</Text>
                        <Text w='100%'>Ajustamos la solución a tu presupuesto</Text>
                        <Text w='100%'>Informes detallados de la ruta y envío</Text>
                    </HStack>
                    <HStack w='96%' justify='center'>
                        <Image w='33%' p='8.5%' src={group171} alt='group171'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group22} alt='group22'></Image>
                        <Spacer/>
                        <Image w='33%' p='8.5%' src={group23} alt='group23'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start'  fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontSize='18px' letterSpacing='0.10vw'>
                        <Text w='100%'>Feedback en actividades de pre-venta y servicio al cliente</Text>
                        <Text w='100%'>Variedad de productos listos para tu operación</Text>
                        <Text w='100%'>Coordinación y planificación del envío</Text>
                    </HStack>
                </VStack>
                </HStack>  
                <hr/>
                <Catalogo />
                <Foot />
            </Stack>
            </div>
            <div class="mobile">
            <meta name='viewport' content='width=device-width , initial-scale=1' />
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/>
                <Stack w='100%' alignItems='center'>
                    <Box fontWeight='bold' textAlign='left' w='95%' letterSpacing='0.10vw'>
                        <Heading textAlign='center'>NOSOTROS</Heading>
                        <br/>
                        <Text fontFamily='Roboto-Regular' textAlign='center' fontSize='18px'>
                            MANTENEMOS TU OPERACIÓN EN CONSTANTE ACTUALIZACIÓN
                        </Text>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='16px'>
                            Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.
                        </Text>
                        <br/>
                        <Text fontFamily='Roboto-Regular' fontSize='16px'>
                            Nos ajustamos a sus necesidades presupuestales con alternativas completamente funcionales brindando envíos nacionales con rapidez y eficiencia que le permitirán operar sin interrupciones.
                        </Text>
                    </Box>
                </Stack>
                <hr />
                <Image src={group18} alt='group18' marginBottom='5%'></Image>
                <VStack width='100%'>
                    <VStack w='90%' marginTop='1%'>
                        <Image w='30%' marginBottom='1%' src={mision} alt='mision.png'></Image>
                        <Heading marginBottom='1%' fontSize='20px' letterSpacing='0.08vw'>MISIÓN</Heading>
                        <Text textAlign='center' letterSpacing='0.08vw' fontFamily='Roboto-Regular' fontSize='16px' color='rgb(119,119,119)'>
                            Solucionar cualquier tipo de requerimiento dentro de la cadena de suministro, ofreciendo óptimas alternativas enfocadas en las necesidades de nuestros clientes.
                        </Text>
                    </VStack>
                    <Spacer />
                    <VStack w='90%' marginTop='1%'>
                        <Image w='30%' marginBottom='1%' src={vision} alt='vision.png'></Image>
                        <Heading marginBottom='1%' fontSize='20px' letterSpacing='0.08vw'>VISIÓN</Heading>
                        <Text textAlign='center' letterSpacing='0.08vw' fontFamily='Roboto-Regular' fontSize='16px' color='rgb(119,119,119)'>
                            Convertirnos en un socio estratégico en la industria y mantenernos como la mejor alternativa comercial para nuestros clientes, siempre basando nuestras operaciones en la honestidad, lealtad y confiabilidad.
                        </Text>
                    </VStack>
                </VStack>
                <hr />
                <Center><Heading w='90%' >VALORES AGREGADOS</Heading></Center>
                <HStack width='100%' justify='center'>
                <VStack w='90%' justify='center'>
                    <HStack w='85%' justify='center'>
                        <Image w='40%' p='8.5%' src={group24} alt='group24'></Image>
                        <Spacer/>
                        <Image w='40%' p='8.5%' src={group19} alt='group19'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(150,150,150)' fontSize='16px' letterSpacing='0.04vw'>
                        <Text w='100%'>Servicios personalizados a la medida de tu empresa</Text>
                        <Text w='100%'>Ajustamos la solución a tu presupuesto</Text>
                    </HStack>
                    <HStack w='85%' justify='center'>
                        <Image w='40%' p='8.5%' src={group20} alt='group20'></Image>
                        <Spacer />
                        <Image w='40%' p='8.5%' src={group171} alt='group171'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(150,150,150)' fontSize='16px' letterSpacing='0.04vw'>
                        <Text w='100%'>Informes detallados de la ruta y envío</Text>
                        <Text w='100%'>Feedback en actividades de pre-venta y servicio al cliente</Text>
                    </HStack>
                    <HStack w='85%' justify='center'>
                        <Image w='40%' p='8.5%' src={group22} alt='group22'></Image>
                        <Spacer/>
                        <Image w='40%' p='8.5%' src={group23} alt='group23'></Image>
                    </HStack>
                    <HStack w='100%' margin='-6% 0 -2% 0' alignItems='start' fontFamily='Roboto-Regular' color='rgb(150,150,150)' fontSize='16px' letterSpacing='0.04vw'>
                        <Text w='100%'>Variedad de productos listos para tu operación</Text>
                        <Text w='100%'>Coordinación y planificación del envío</Text>
                    </HStack>
                </VStack>
                </HStack>
                <hr/>
                <Catalogo />
                <Foot />
            </Stack>
            </div>
        </ChakraProvider>
        </>
    );
}