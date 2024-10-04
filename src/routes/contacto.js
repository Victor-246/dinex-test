import '../App.css';
import React from 'react';
import { Helmet } from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer , Box , Flex, HStack, VStack, Stack, Center , Image , Text , Button , extendTheme, Heading, AspectRatio, Input, Textarea, FormLabel, FormControl} from '@chakra-ui/react';

/* Hook Form */
import {useForm} from 'react-hook-form';

/* Emailjs */
import emailjs from 'emailjs-com';


/* Components */
import Header from '../components/header.js';
import Foot from '../components/foot.js';
import Whatsapp from '../components/whatsapp.js';

/* Imagenes */
import group2365 from '../media/images/group-2-3-65x65.png';
import monterrey from '../media/images/monterrey.png';
import cdmex from '../media/images/cd-mexico.png';
import guadalajara from '../media/images/guadalajara.png';
import dinexmapa from'../media/images/dienex-mapa-1536x1152.png';
import { Form } from 'react-router-dom';

export default function Contacto () {
      function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_y4ffpk1','template_kwx4qcd', e.target, '25CTB5vHrj6le9UH6')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title> CONTACTO - DINEX - Servicios Industriales</title>
        </Helmet>
        <ChakraProvider>
            <div class="desktoplg">
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/><Heading fontSize='55px' letterSpacing='0.30vw' fontFamily='Roboto-Regular'>CONTACTO</Heading><br/>
                <HStack width='100%' alignItems='center' justify='center'>
                <VStack w='96%'>
                    <HStack w='73%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='31px' letterSpacing='0.12vw'>
                        <Text w='100%' marginBottom='2%'>Cotizaciones - Seguimiento de pedidos</Text>
                        <Text w='100%' marginBottom='2%'>Información - Servicio a cliente</Text>
                        <Text w='100%' marginBottom='2%'>Contabilidad y Finanzas</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' fontSize='30px' letterSpacing='0.06vw'>
                        <Text w='100%'>ventas@din-ex.com</Text>
                        <Text w='100%'>contacto@din-ex.com</Text>
                        <Text w='100%'>facturacion@din-ex.com</Text>
                    </HStack>
                </VStack>
                </HStack> 
                <hr/>
                <HStack width='100%' alignItems='center' justify='center'>
                    <VStack w='96%'>
                    <HStack w='80%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='16%' src={monterrey} alt='monterrey'></Image>
                        <Spacer/>
                        <Image w='16%' src={cdmex} alt='cdmex'></Image>
                        <Spacer/>
                        <Image w='16%' src={guadalajara} alt='guadalajara'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' fontSize='32px' letterSpacing='0.12vw'>
                        <Text w='100%' marginBottom='2%'>Dinex Monterrey (matriz)</Text>
                        <Text w='100%' marginBottom='2%'>Dinex CDMX</Text>
                        <Text w='100%' marginBottom='2%'>Dinex Guadalajara</Text>
                    </HStack>
                    </VStack>
                </HStack> 
                <VStack justify='center'>
                    <Text fontSize='29px' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' letterSpacing='1px'>Contactos:</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='29px' fontFamily='Roboto-Regular' letterSpacing='0.12vw'><b>Servicio al cliente:</b> 812-894-3229</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='29px' fontFamily='Roboto-Regular' letterSpacing='0.12vw'><b>Contacto:</b> 812-867-5783</Text>
                </VStack><br/>
                <Center><Text letterSpacing='0.05vw' fontFamily='Roboto-Regular' w='85%' fontSize='33px' fontWeight='bold'>Si necesita más información sobre nuestros servicios, complete el siguiente formulario con sus datos, y nos pondremos en contacto con usted lo antes posible.</Text></Center>
                <hr/>
                <HStack columnGap='0' w='100%' justify='center'>
                    <VStack bgColor='rgb(252,208,47)' w='50%' h='100%' >
                        <Text letterSpacing='0.8px' fontWeight='bold' marginTop='2%' fontSize='34px' fontFamily='Roboto-Regular'>CONTÁCTANOS</Text>
                        <Text w='97%' letterSpacing='0.4px' fontSize='29px' fontFamily='Roboto-Regular'>Estamos para servirte, envíanos tus comentarios y dudas.</Text>
                        <VStack alignItems='left' textAlign='left' w='100%'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <FormLabel fontSize='26px' marginLeft='1%'>Nombre:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='26px' type='text' name="user_name" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='26px' marginLeft='1%'>Correo:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='26px' type='email' name="user_email" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='26px' marginLeft='1%'>Teléfono:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='26px' type='number' name="user_number"  bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='26px' marginLeft='1%'>Mensaje:</FormLabel>
                            <Textarea fontSize='26px' name="message" bgColor='white' width='75%' margin='0 1% 2.5% 1%' required h='55%' />
                            <Center><Input fontSize='30px' type='submit' value='Enviar' marginLeft='1%' borderRadius='0' bgColor='rgb(37,37,37)' color='white' h='fit-content' w='fit-content' /></Center>
                        </form>
                        </VStack>
                    </VStack>
                    <VStack bgColor='rgb(23,25,38)' w='50%' h='100%' textAlign='center'>
                        <Text letterSpacing='0.8px' marginTop='8%' fontSize='33px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Cada vez más cerca de ti</Text>
                        <Image w='fit-content' src={dinexmapa} alt='dinexmapa'></Image>
                        <Text letterSpacing='0.8px' marginBottom='18%' fontSize='33px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Contacta a nuestros proveedores en los diferentes puntos alrededor de la República Mexicana</Text>
                    </VStack>
                </HStack>
                <Foot />
            </Stack>
            </div>
            <div class="desktopsm">
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/><Heading letterSpacing='0.30vw' fontFamily='Roboto-Regular'>CONTACTO</Heading><br/>
                <HStack width='100%' alignItems='center' justify='center'>
                <VStack w='96%'>
                    <HStack w='73%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='21px' letterSpacing='0.12vw'>
                        <Text w='100%' marginBottom='2%'>Cotizaciones - Seguimiento de pedidos</Text>
                        <Text w='100%' marginBottom='2%'>Información - Servicio a cliente</Text>
                        <Text w='100%' marginBottom='2%'>Contabilidad y Finanzas</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' fontSize='20px' letterSpacing='0.06vw'>
                        <Text w='100%'>ventas@din-ex.com</Text>
                        <Text w='100%'>contacto@din-ex.com</Text>
                        <Text w='100%'>facturacion@din-ex.com</Text>
                    </HStack>
                </VStack>
                </HStack> 
                <hr/>
                <HStack width='100%' alignItems='center' justify='center'>
                    <VStack w='96%'>
                    <HStack w='80%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='16%' src={monterrey} alt='monterrey'></Image>
                        <Spacer/>
                        <Image w='16%' src={cdmex} alt='cdmex'></Image>
                        <Spacer/>
                        <Image w='16%' src={guadalajara} alt='guadalajara'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' fontSize='22px' letterSpacing='0.12vw'>
                        <Text w='100%' marginBottom='2%'>Dinex Monterrey (matriz)</Text>
                        <Text w='100%' marginBottom='2%'>Dinex CDMX</Text>
                        <Text w='100%' marginBottom='2%'>Dinex Guadalajara</Text>
                    </HStack>
                    </VStack>
                </HStack> 
                <VStack justify='center'>
                    <Text fontSize='19px' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' letterSpacing='1px'>Contactos:</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='19px' fontFamily='Roboto-Regular' letterSpacing='0.12vw'><b>Servicio al cliente:</b> 812-894-3229</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='19px' fontFamily='Roboto-Regular' letterSpacing='0.12vw'><b>Contacto:</b> 812-867-5783</Text>
                </VStack><br/>
                <Center><Text letterSpacing='0.05vw' fontFamily='Roboto-Regular' w='85%' fontSize='23px' fontWeight='bold'>Si necesita más información sobre nuestros servicios, complete el siguiente formulario con sus datos, y nos pondremos en contacto con usted lo antes posible.</Text></Center>
                <hr/>
                <HStack columnGap='0' w='100%' justify='center'>
                    <VStack bgColor='rgb(252,208,47)' w='50%' h='100%' >
                        <Text letterSpacing='0.8px' fontWeight='bold' marginTop='2%' fontSize='24px' fontFamily='Roboto-Regular'>CONTÁCTANOS</Text>
                        <Text w='97%' letterSpacing='0.4px' fontSize='19px' fontFamily='Roboto-Regular'>Estamos para servirte, envíanos tus comentarios y dudas.</Text>
                        <VStack alignItems='left' textAlign='left' w='100%'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <FormLabel fontSize='16px' marginLeft='1%'>Nombre:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='16px' type='text' name="user_name" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='16px' marginLeft='1%'>Correo:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='16px' type='email' name="user_email" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='16px' marginLeft='1%'>Teléfono:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='16px' type='number' name="user_number"  bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='16px' marginLeft='1%'>Mensaje:</FormLabel>
                            <Textarea fontSize='16px' name="message" bgColor='white' width='75%' margin='0 1% 2.5% 1%' required h='55%' />
                            <Center><Input fontSize='20px' type='submit' value='Enviar' marginLeft='1%' borderRadius='0' bgColor='rgb(37,37,37)' color='white' h='fit-content' w='fit-content' /></Center>
                        </form>
                        </VStack>
                    </VStack>
                    <VStack bgColor='rgb(23,25,38)' w='50%' h='100%' textAlign='center'>
                        <Text letterSpacing='0.8px' marginTop='8%' fontSize='23px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Cada vez más cerca de ti</Text>
                        <Image w='fit-content' src={dinexmapa} alt='dinexmapa'></Image>
                        <Text letterSpacing='0.8px' marginBottom='18%' fontSize='23px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Contacta a nuestros proveedores en los diferentes puntos alrededor de la República Mexicana</Text>
                    </VStack>
                </HStack>
                <Foot />
            </Stack>
            </div>
            <div class="laptop">
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/><Heading letterSpacing='3.5px' fontFamily='Roboto-Regular'>CONTACTO</Heading><br/>
                <HStack width='100%' alignItems='center' justify='center'>
                <VStack w='96%'>
                    <HStack w='76%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='19px' letterSpacing='0.12vw'>
                        <Text w='100%' marginBottom='2%'>Cotizaciones - Seguimiento de pedidos</Text>
                        <Text w='100%' marginBottom='2%'>Información - Servicio a cliente</Text>
                        <Text w='100%' marginBottom='2%'>Contabilidad y Finanzas</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' fontSize='18px' letterSpacing='0.06vw'>
                        <Text w='100%'>ventas@din-ex.com</Text>
                        <Text w='100%'>contacto@din-ex.com</Text>
                        <Text w='100%'>facturacion@din-ex.com</Text>
                    </HStack>
                </VStack>
                </HStack> 
                <hr/>
                <HStack width='100%' alignItems='center' justify='center'>
                    <VStack w='96%'>
                    <HStack w='80%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='15%' src={monterrey} alt='monterrey'></Image>
                        <Spacer/>
                        <Image w='15%' src={cdmex} alt='cdmex'></Image>
                        <Spacer/>
                        <Image w='15%' src={guadalajara} alt='guadalajara'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' fontSize='20px' letterSpacing='0.12vw'>
                        <Text w='100%' marginBottom='2%'>Dinex Monterrey (matriz)</Text>
                        <Text w='100%' marginBottom='2%'>Dinex CDMX</Text>
                        <Text w='100%' marginBottom='2%'>Dinex Guadalajara</Text>
                    </HStack>
                    </VStack>
                </HStack> 
                <VStack justify='center'>
                    <Text fontSize='19px' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' letterSpacing='1px'>Contactos:</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='19px' fontFamily='Roboto-Regular' letterSpacing='0.12vw'><b>Servicio al cliente:</b> 812-894-3229</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='19px' fontFamily='Roboto-Regular' letterSpacing='0.12vw'><b>Contacto:</b> 812-867-5783</Text>
                </VStack><br/>
                <Center><Text letterSpacing='0.05vw' fontFamily='Roboto-Regular' w='85%' fontSize='21px' fontWeight='bold'>Si necesita más información sobre nuestros servicios, complete el siguiente formulario con sus datos, y nos pondremos en contacto con usted lo antes posible.</Text></Center>
                <hr/>
                <HStack columnGap='0' w='100%' justify='center'>
                    <VStack bgColor='rgb(252,208,47)' w='50%' h='100%' >
                        <Text letterSpacing='0.8px' fontWeight='bold' marginTop='2%' fontSize='24px' fontFamily='Roboto-Regular'>CONTÁCTANOS</Text>
                        <Text w='97%' letterSpacing='0.4px' fontSize='19px' fontFamily='Roboto-Regular'>Estamos para servirte, envíanos tus comentarios y dudas.</Text>
                        <VStack alignItems='left' textAlign='left' w='100%'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <FormLabel fontSize='14px' marginLeft='1%'>Nombre:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='14px' type='text' name="user_name" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='14px' marginLeft='1%'>Correo:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='14px' type='email' name="user_email" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='14px' marginLeft='1%'>Teléfono:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='14px' type='number' name="user_number"  bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='14px' marginLeft='1%'>Mensaje:</FormLabel>
                            <Textarea fontSize='14px' name="message" bgColor='white' width='75%' margin='0 1% 2.5% 1%' required h='55%' />
                            <Center><Input fontSize='20px' type='submit' value='Enviar' marginLeft='1%' borderRadius='0' bgColor='rgb(37,37,37)' color='white' h='fit-content' w='fit-content' /></Center>
                        </form>
                        </VStack>
                    </VStack>
                    <VStack bgColor='rgb(23,25,38)' w='50%' h='100%' textAlign='center'>
                        <Text letterSpacing='0.8px' marginTop='8%' fontSize='20px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Cada vez más cerca de ti</Text>
                        <Image w='fit-content' src={dinexmapa} alt='dinexmapa'></Image>
                        <Text letterSpacing='0.8px' marginBottom='18%' fontSize='20px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Contacta a nuestros proveedores en los diferentes puntos alrededor de la República Mexicana</Text>
                    </VStack>
                </HStack>
                <Foot />
            </Stack>
            </div>
            <div class="tablet">
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/><Heading letterSpacing='0.60vw' fontFamily='Roboto-Regular'>CONTACTO</Heading><br/>
                <HStack width='100%' alignItems='center' justify='center'>
                <VStack w='96%'>
                    <HStack w='78%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                        <Spacer/>
                        <Image w='fit-content' src={group2365} alt='group2365'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='18px' letterSpacing='0.18vw'>
                        <Text w='100%' marginBottom='2%'>Cotizaciones - Seguimiento de pedidos</Text>
                        <Text w='100%' marginBottom='2%'>Información - Servicio a cliente</Text>
                        <Text w='100%' marginBottom='2%'>Contabilidad y Finanzas</Text>
                    </HStack>
                    <HStack w='100%' alignItems='start' textAlign='center' fontFamily='Roboto-Regular' fontSize='17px' letterSpacing='0.10vw'>
                        <Text w='100%'>ventas@din-ex.com</Text>
                        <Text w='100%'>contacto@din-ex.com</Text>
                        <Text w='100%'>facturacion@din-ex.com</Text>
                    </HStack>
                </VStack>
                </HStack> 
                <hr/>
                <HStack width='100%' alignItems='center' justify='center'>
                    <VStack w='96%'>
                    <HStack w='81%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='17%' src={monterrey} alt='monterrey'></Image>
                        <Spacer/>
                        <Image w='17%' src={cdmex} alt='cdmex'></Image>
                        <Spacer/>
                        <Image w='17%' src={guadalajara} alt='guadalajara'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' fontSize='20px' letterSpacing='1.2px'>
                        <Text w='100%' marginBottom='2%'>Dinex Monterrey (matriz)</Text>
                        <Text w='100%' marginBottom='2%'>Dinex CDMX</Text>
                        <Text w='100%' marginBottom='2%'>Dinex Guadalajara</Text>
                    </HStack>
                    </VStack>
                </HStack> 
                <VStack justify='center'>
                    <Text fontSize='19px' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' letterSpacing='1px'>Contactos:</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='19px' fontFamily='Roboto-Regular' letterSpacing='1px'><b>Servicio al cliente:</b> 812-894-3229</Text>
                    <Text w='fit-content' color='rgb(120,120,120)' textAlign='center' fontSize='19px' fontFamily='Roboto-Regular' letterSpacing='1px'><b>Contacto:</b> 812-867-5783</Text>
                </VStack><br/>
                <Center><Text letterSpacing='0.05vw' fontFamily='Roboto-Regular' w='93%' fontSize='19px' fontWeight='bold'>Si necesita más información sobre nuestros servicios, complete el siguiente formulario con sus datos, y nos pondremos en contacto con usted lo antes posible.</Text></Center>
                <hr/>
                <HStack columnGap='0' w='100%' h='100%' justify='center'>
                    <VStack bgColor='rgb(252,208,47)' w='50%' h='100%'>
                        <Text letterSpacing='0.8px' fontWeight='bold' marginTop='2%' fontSize='20px' fontFamily='Roboto-Regular'>CONTÁCTANOS</Text>
                        <Text w='97%' letterSpacing='0.4px' fontSize='16px' fontFamily='Roboto-Regular'>Estamos para servirte, envíanos tus comentarios y dudas.</Text>
                        <VStack alignItems='left' textAlign='left' w='100%'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <FormLabel fontSize='14px' marginLeft='1%'>Nombre:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='14px' type='text' name="user_name" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='14px' marginLeft='1%'>Correo:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='14px' type='email' name="user_email" bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='14px' marginLeft='1%'>Teléfono:</FormLabel>
                            <Input p='1%' h='fit-content' fontSize='14px'type='number' name="user_number"  bgColor='white' width='50%' margin='0 1% 1% 1%' required />
                            <FormLabel fontSize='14px' marginLeft='1%'>Mensaje:</FormLabel>
                            <Textarea fontSize='14px' name="message" bgColor='white' width='75%' margin='0 1% 3% 1%' required h='33%' /><br/>
                            <Center><Input fontSize='16px' type='submit' value='Enviar' marginLeft='1%' borderRadius='0' bgColor='rgb(37,37,37)' color='white' h='fit-content' w='fit-content' /></Center>
                        </form>
                        </VStack>
                    </VStack>
                    <VStack bgColor='rgb(23,25,38)' w='50%' h='100%' textAlign='center'>
                        <Text letterSpacing='0.8px' marginTop='8%' fontSize='16px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Cada vez más cerca de ti</Text>
                        <Image w='fit-content' src={dinexmapa} alt='dinexmapa'></Image>
                        <Text letterSpacing='0.8px' marginBottom='18%' fontSize='16px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Contacta a nuestros proveedores en los diferentes puntos alrededor de la República Mexicana</Text>
                    </VStack>
                </HStack>
                <Foot />
            </Stack>
            </div>
            <div class="mobile">
            <Header />
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <br/><Heading letterSpacing='3.5px' fontFamily='Roboto-Regular'>CONTACTO</Heading><br/>
                <VStack width='100%'>
                    <VStack spacing={8} marginBottom='5%' w='95%' alignItems='center'>
                        <Flex direction='column' alignItems='center' justify='center' w='95%'>
                            <Image width='15%' src={group2365} alt='group2365'></Image>
                            <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='18px' letterSpacing='0.18vw'>Cotizaciones - Seguimiento de pedidos</Text>
                            <Text fontFamily='Roboto-Regular' fontSize='17px' letterSpacing='0.10vw'>ventas@din-ex.com</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' justify='center' w='95%'>
                            <Image width='15%' src={group2365} alt='group2365'></Image>
                            <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='18px' letterSpacing='0.18vw'>Información - Servicio a cliente</Text>
                            <Text fontFamily='Roboto-Regular' fontSize='17px' letterSpacing='0.10vw'>contacto@din-ex.com</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' justify='center' w='95%'>
                            <Image width='15%' src={group2365} alt='group2365'></Image>
                            <Text margin='4% 0 2% 0' fontFamily='Roboto-Regular' fontWeight='bold' fontSize='18px' letterSpacing='0.18vw'>Contabilidad y Finanzas</Text>
                            <Text fontFamily='Roboto-Regular' fontSize='17px' letterSpacing='0.10vw'>facturacion@din-ex.com</Text>
                        </Flex>
                    </VStack>
                </VStack>
                <hr/>
                <VStack width='100%'>
                    <VStack w='90%'>
                    <HStack w='90%' alignItems='center' justify='center' marginBottom='1%'>
                        <Image w='25%' src={monterrey} alt='monterrey'></Image>
                        <Spacer/>
                        <Image w='25%' src={cdmex} alt='cdmex'></Image>
                        <Spacer/>
                        <Image w='25%' src={guadalajara} alt='guadalajara'></Image>
                    </HStack>
                    <HStack alignItems='start' textAlign='center' w='100%' fontFamily='Roboto-Regular' color='rgb(140,140,140)' fontWeight='bold' fontSize='15px' letterSpacing='0.40vw'>
                        <Text w='100%' >Dinex Monterrey (matriz)</Text>
                        <Text w='100%' >Dinex CDMX</Text>
                        <Text w='100%' >Dinex Guadalajara</Text>
                    </HStack>
                    </VStack>
                </VStack>
                <VStack justify='center' textAlign='center' fontSize='16px' fontFamily='Roboto-Regular' letterSpacing='0.25vw'>
                    <Text color='rgb(140,140,140)' fontWeight='bold'>Contactos:</Text>
                    <Text w='fit-content' color='rgb(120,120,120)'><b>Servicio al cliente:</b> 812-894-3229</Text>
                    <Text w='fit-content' color='rgb(120,120,120)'><b>Contacto:</b> 812-867-5783</Text>
                </VStack><br/>
                <Center><Text letterSpacing='0.15vw' fontFamily='Roboto-Regular' w='93%' fontSize='16px' fontWeight='bold'>Si necesita más información sobre nuestros servicios, complete el siguiente formulario con sus datos, y nos pondremos en contacto con usted lo antes posible.</Text></Center>
                <hr/>
                <VStack rowGap={0} columnGap={0} w='100%' h='fit-content'>
                    <VStack bgColor='rgb(252,208,47)' justify='center' w='100%' h='140vh'>
                        <Text letterSpacing='0.8px' fontWeight='bold' marginTop='5%' fontSize='18px' fontFamily='Roboto-Regular'>CONTÁCTANOS</Text>
                        <Text letterSpacing='0.4px' fontSize='18px' fontFamily='Roboto-Regular'>Estamos para servirte, envíanos tus comentarios y dudas.</Text>
                        <VStack alignItems='left' textAlign='left' w='100%' h='100%'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <FormLabel marginLeft='1%'>Nombre</FormLabel>
                            <Input type='text' name="user_name" bgColor='white' width='75%' margin='0 1% 1% 1%' required />
                            <FormLabel marginLeft='1%'>Correo</FormLabel>
                            <Input type='email' name="user_email" bgColor='white' width='75%' margin='0 1% 1% 1%' required />
                            <FormLabel marginLeft='1%'>Teléfono</FormLabel>
                            <Input type='number' name="user_number"  bgColor='white' width='75%' margin='0 1% 1% 1%' required />
                            <FormLabel marginLeft='1%'>Mensaje</FormLabel>
                            <Textarea name="message" bgColor='white' width='90%' margin='0 1% 0 1%' required h='50%'/><br/><br/>
                            <Center><Input type='submit' value='Enviar' margin='0 0 5% 1%' borderRadius='0' bgColor='rgb(37,37,37)' color='white' w='fit-content' /></Center>   
                        </form>
                        </VStack>
                    </VStack>
                    <VStack bgColor='rgb(23,25,38)' w='100%' h='fit-content' textAlign='center'>
                        <Text letterSpacing='0.8px' marginTop='8%' fontSize='18px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Cada vez más cerca de ti</Text>
                        <Image w='fit-content' src={dinexmapa} alt='dinexmapa'></Image>
                        <Text w='95%' letterSpacing='0.8px' marginBottom='18%' fontSize='19px' fontFamily='Roboto-Light' color='rgb(230,208,47)'>Contacta a nuestros proveedores en los diferentes puntos alrededor de la República Mexicana</Text>
                    </VStack>
                </VStack>
                <Foot />
            </Stack>
            </div>
        </ChakraProvider>
        </>
    )
}