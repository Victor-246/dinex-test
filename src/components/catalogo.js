import '../App.css';
import React from 'react';
import Helmet from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer, Box, Flex, HStack, VStack, Stack, Center, Image, Text, Button, extendTheme, Heading, AspectRatio, Link, isExternal } from '@chakra-ui/react';

/* Components */
import Header from '../components/header.js';
import Foot from '../components/foot.js';
import Whatsapp from '../components/whatsapp.js';

/* Imagenes */
import catalogo from '../media/images/catalogo.png';
import catalogoportada from '../media/images/catalalogo-portada.png';
import worker from '../media/images/dinex-worker.png';

export default function Catalogo() {
  return (
    <>
      <ChakraProvider>
        <div class="desktoplg">
          <HStack width='100%' h='100%' justify='center'>
            <HStack w='80%' h='85%' columnGap={0} p='2%' borderRadius='15%' borderWidth='10px' borderColor='#ffe500' borderStyle='double' bgColor='rgb(250,250,250)'>
              <VStack h='100%' width='100%'>
                <Image src={worker} h='46%' alt='worker'></Image>
                <Heading fontSize='40px' letterSpacing='0.12vw'>COMUNÍCATE CON NOSOTROS</Heading>
                <Text w='95%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.12vw' fontFamily='Roboto-Regular' lineHeight='3.5vh' fontSize='30px' marginTop='1%'>Ponte en contacto con nosotros a través de Linkedin o vía Correo Electrónico</Text>
                <Text w='95%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.12vw' fontFamily='Roboto-Regular' lineHeight='3.5vh' fontSize='30px' margin='1% 0 1% 0'>Escríbenos a ventas@din-ex.com o ve todas las opciones por región en nuestra sección de Contacto</Text>
                <Text w='95%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.12vw' fontFamily='Roboto-Regular' lineHeight='3.5vh' fontSize='30px'>Estamos para servirte con cualquier duda sobre nuestros productos y soluciones industriales.</Text>
                <Link m='3% 0 10% 0' href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.2)', bgColor: '#ffe500', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='#64b161' color='white' leftIcon={<AiOutlineWhatsApp />} colorScheme='greendinex' p='28px' borderRadius='10vh' fontSize='29px' letterSpacing='2px' fontFamily='Roboto-Light'>Te atendemos por Whatsapp</Button></Link>
              </VStack>
              <VStack textAlign='center' justify='center' alignItems='center' width='90%' height='100%'>
                <Image h='49%' src={catalogoportada} alt='catalogoportada'></Image>
                <Text fontSize='45px'>DESCARGA <br />EL CATÁLOGO <b>2024</b></Text>
                <Text w='100%' textAlign='center' letterSpacing='0.10vw' lineHeight='4,5vh' fontFamily='Roboto-Regular' fontSize='35px' color='rgb(122,122,122)'>Encuentra una gran variedad de categorías de productos que cubren todo el espectro de tu operación.</Text>
                <Link m='3% 0 0 0' href='https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing' isExternal><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.2)', bgColor: 'rgb(255,184,20)', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='rgb(255,229,0)' color='Black' p='28px' fontSize='28px' borderRadius='10vh' letterSpacing='2px' fontFamily='Roboto-Regular'>DESCARGAR PDF EN ESPAÑOL</Button></Link>
              </VStack>
            </HStack>
          </HStack>
        </div>
        <div class="desktopsm">
          <HStack width='100%' h='100%' justify='center'>
            <HStack w='80%' h='76%' columnGap={0} p='2%' borderRadius='15%' borderWidth='10px' borderColor='#ffe500' borderStyle='double' bgColor='rgb(250,250,250)'>
              <VStack h='100%' width='100%'>
                <Image src={worker} h='37%' alt='worker'></Image>
                <Heading fontSize='28px' letterSpacing='1px'>COMUNÍCATE CON NOSOTROS</Heading>
                <Text w='95%' color='rgb(129,129,129)' letterSpacing='0.10vw' lineHeight='29px' fontFamily='Roboto-Regular' fontSize='19px' marginTop='1%'>Ponte en contacto con nosotros a través de Linkedin o vía Correo Electrónico</Text>
                <Text w='95%' color='rgb(129,129,129)' letterSpacing='0.10vw' lineHeight='29px' fontFamily='Roboto-Regular' fontSize='19px' margin='1% 0 1% 0'>Escríbenos a ventas@din-ex.com o ve todas las opciones por región en nuestra sección de Contacto</Text>
                <Text w='95%' color='rgb(129,129,129)' letterSpacing='0.10vw' lineHeight='29px' fontFamily='Roboto-Regular' fontSize='19px'>Estamos para servirte con cualquier duda sobre nuestros productos y soluciones industriales.</Text>
                <Link m='3% 0 0 0' href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.2)', bgColor: '#ffe500', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='#64b161' color='white' leftIcon={<AiOutlineWhatsApp />} colorScheme='greendinex' p='24px' borderRadius='10vh' fontSize='18px' letterSpacing='2px' fontFamily='Roboto-Light'>Te atendemos por Whatsapp</Button></Link>
              </VStack>
              <VStack textAlign='center' justify='center' alignItems='center' width='90%' height='100%'>
                <Image h='48%' src={catalogoportada} alt='catalogoportada'></Image>
                <Text fontSize='28px'>DESCARGA <br></br>EL CATÁLOGO <b>2024</b></Text>
                <Text w='100%' textAlign='center' letterSpacing='0.08vw' fontSize='22px' fontFamily='Roboto-Regular' color='rgb(122,122,122)'>Encuentra una gran variedad de categorías de productos que cubren todo el espectro de tu operación.</Text>
                <Link m='3% 0 0 0' href='https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing' isExternal><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.2)', bgColor: 'rgb(255,184,20)', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='rgb(255,229,0)' color='Black' p='24px' fontSize='18px' borderRadius='10vh' letterSpacing='2px' fontFamily='Roboto-Regular'>DESCARGAR PDF EN ESPAÑOL</Button></Link>
              </VStack>
            </HStack>
          </HStack>
        </div>
        <div class="laptop">
          <HStack width='100%' h='100%' justify='center'>
            <HStack w='90%' h='75%' columnGap={0} p='2%' borderRadius='15%' borderWidth='10px' borderColor='#ffe500' borderStyle='double' bgColor='rgb(250,250,250)'>
              <VStack h='100%' width='100%'>
                <Image src={worker} h='39%' alt='worker'></Image>
                <Heading fontSize='22px' letterSpacing='1px'>COMUNÍCATE CON NOSOTROS</Heading>
                <Text w='95%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.8px' lineHeight='20px' fontSize='15px' marginTop='1%'>Ponte en contacto con nosotros a través de Linkedin o vía Correo Electrónico</Text>
                <Text w='95%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.8px' lineHeight='20px' fontSize='15px' margin='1% 0 1% 0'>Escríbenos a ventas@din-ex.com o ve todas las opciones por región en nuestra sección de Contacto</Text>
                <Text w='95%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.8px' lineHeight='20px' fontSize='15px'>Estamos para servirte con cualquier duda sobre nuestros productos y soluciones industriales.</Text>
                <Link m='3% 0 0 0' href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.2)', bgColor: '#ffe500', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='#64b161' color='white' leftIcon={<AiOutlineWhatsApp />} colorScheme='greendinex' p='17px' borderRadius='10vh' fontSize='15px' letterSpacing='2px' fontFamily='Roboto-Light'>Te atendemos por Whatsapp</Button></Link>
              </VStack>
              <VStack textAlign='center' alignItems='center' width='90%' height='100%'>
                <Image h='43%' src={catalogoportada} alt='catalogoportada'></Image>
                <Text fontSize='25px'>DESCARGA <br></br>EL CATÁLOGO <b>2024</b></Text>
                <Text w='100%' textAlign='center' letterSpacing='0.6px' fontSize='19px' color='rgb(122,122,122)'>Encuentra una gran variedad de categorías de productos que cubren todo el espectro de tu operación.</Text>
                <Link m='3% 0 0 0' href='https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing' isExternal><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.2)', bgColor: 'rgb(255,184,20)', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='rgb(255,229,0)' color='Black' p='17px' fontSize='15px' borderRadius='10vh' letterSpacing='2px' fontFamily='Roboto-Regular'>DESCARGAR PDF EN ESPAÑOL</Button></Link>
              </VStack>
            </HStack>
          </HStack>
        </div>
        <div class="tablet">
          <VStack width='100%' h='100%' columnGap={0} fontSize='16px'>
            <VStack h='100%' width='90%' fontFamily='Roboto-Regular' textAlign='center'>
              <Heading fontSize='18px' marginTop='1%' textAlign='center' letterSpacing='1px'>COMUNÍCATE CON NOSOTROS</Heading>
              <Text w='100%' color='rgb(129,129,129)' letterSpacing='0.10vw' lineHeight='29px' marginTop='1%'>Ponte en contacto con nosotros a través de Linkedin o vía Correo Electrónico</Text>
              <Text w='100%' color='rgb(129,129,129)' letterSpacing='0.10vw' lineHeight='29px' margin='1% 0 1% 0'>Escríbenos a ventas@din-ex.com o ve todas las opciones por región en nuestra sección de Contacto</Text>
              <Text w='100%' color='rgb(129,129,129)' letterSpacing='0.10vw' lineHeight='29px' >Estamos para servirte con cualquier duda sobre nuestros productos y soluciones industriales.</Text>
              <Link href='https://api.whatsapp.com/send?phone=528128943229' isExternal marginTop='2%'><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)', bgColor: '#ffe500', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='#64b161' color='white' leftIcon={<AiOutlineWhatsApp />} colorScheme='greendinex' borderRadius='10vh' fontSize='18px' letterSpacing='2px' fontFamily='Roboto-Light'>Te atendemos por Whatsapp</Button></Link>
            </VStack>
            <br />
            <VStack justify='center' width='98%' height='100%' textAlign='center'>
              <HStack width='100%' justify='center' marginBottom='4%'>
                <Text width='50%' fontSize='18px'>DESCARGA <br></br>EL CATÁLOGO <br /><b>2024</b></Text>
                <Image width='35%' float='left' src={catalogoportada} alt='catalogoportada'></Image>
              </HStack>
              <Text w='90%' textAlign='center' fontFamily='Roboto-Regular' letterSpacing='0.08vw' fontSize='20px' color='rgb(122,122,122)'>Encuentra una gran variedad de categorías de productos que cubren todo el espectro de tu operación.</Text>
              <Link href='https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing' isExternal marginTop='2%'><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)', bgColor: 'rgb(255,184,20)', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='rgb(255,229,0)' color='Black' fontSize='16px' borderRadius='10vh' letterSpacing='2px' fontFamily='Roboto-Regular'>DESCARGAR PDF EN ESPAÑOL</Button></Link>
            </VStack>
          </VStack>
        </div>
        <div class="mobile">
          <VStack width='100%' h='100%' columnGap={0} spacing={5}>
            <VStack h='100%' width='90%'>
              <Heading fontSize='16px' marginTop='1%' textAlign='center' letterSpacing='1px'>COMUNÍCATE CON NOSOTROS</Heading>
              <Text w='100%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.08vw' fontFamily='Roboto-Regular' lineHeight='15px' fontSize='13px' marginTop='1%'>Ponte en contacto con nosotros a través de Linkedin o vía Correo Electrónico</Text>
              <Text w='100%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.08vw' fontFamily='Roboto-Regular' lineHeight='15px' fontSize='13px' margin='1% 0 1% 0'>Escríbenos a ventas@din-ex.com o ve todas las opciones por región en nuestra sección de Contacto</Text>
              <Text w='100%' textAlign='center' color='rgb(129,129,129)' letterSpacing='0.08vw' fontFamily='Roboto-Regular' lineHeight='15px' fontSize='13px'>Estamos para servirte con cualquier duda sobre nuestros productos y soluciones industriales.</Text>
              <Link href='https://api.whatsapp.com/send?phone=528128943229' isExternal marginTop='2%'><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)', bgColor: '#ffe500', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='#64b161' color='white' leftIcon={<AiOutlineWhatsApp />} colorScheme='greendinex' borderRadius='10vh' fontSize='12px' letterSpacing='2px' fontFamily='Roboto-Light' p='2vw'>Te atendemos por Whatsapp</Button></Link>
            </VStack>
            <VStack textAlign='center' width='98%' height='100%'>
              <HStack width='100%' marginBottom='4%'>
                <Text width='50%' letterSpacing='0.12vw' fontSize='16px'>DESCARGA <br></br>EL CATÁLOGO <br /><b>2024</b></Text>
                <Image width='50%' float='left' src={catalogoportada} alt='catalogoportada'></Image>
              </HStack>
              <Text w='90%' textAlign='center' letterSpacing='0.06vw' fontFamily='Roboto-Regular' fontSize='12px' color='rgb(122,122,122)' lineHeight='15px'>Encuentra una gran variedad de categorías de productos que cubren todo el espectro de tu operación.</Text>
              <Link href='https://drive.google.com/file/d/1_cCd4lWZC_5TjJ4u2UUpr2heDshMKl0C/view?usp=sharing' isExternal><Button transitionDuration='0.3s' _hover={{ transform: 'scale(1.1)', bgColor: 'rgb(255,184,20)', color: 'black' }} _active={{ transform: 'scale(0.9)', bgColor: '#b3a000' }} bgColor='rgb(255,229,0)' color='Black' fontSize='11px' borderRadius='10vh' letterSpacing='2px' fontFamily='Roboto-Regular' p='3vw'>DESCARGAR PDF EN ESPAÑOL</Button></Link>
            </VStack>
          </VStack>
        </div>
      </ChakraProvider>
    </>
  )
}