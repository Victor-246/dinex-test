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

/* Imagenes */
import iconmtto from '../media/images/icon-mtto-70x70.png';
import servicios from '../media/images/nuestros-servicios-1.png';
import maquinados from '../media/images/maquinados.jpg';
import maquinados2 from '../media/images/icon-maquinados-70x70.png';
import embalaje from '../media/images/icon-embalaje-70x70.png';
import image27 from '../media/images/image-27.png';

export default function Servicios () {
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
                           </HStack><br/>
                           <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='46px' fontFamily='Roboto-Regular'>
                               <ul>
                                   <li>De equipo hidráulico y neumático.</li><br/>
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
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='46px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Trabajos de mecanizado que incluyen diseño y modelado de piezas.</li><br/>
                                    <li>Fabricación y rectificado.</li><br/>
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
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='46px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Almacenamiento de inventario.</li><br/>
                                    <li>Renta de equipo de transporte.</li><br/>
                                    <li>Fletes nacionales.</li>
                                </ul>
                            </Flex><br/>
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
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <Heading letterSpacing='0.20vw' margin='2% 0 2% 0'>SERVICIOS</Heading>
                <Center><Text letterSpacing='0.10vw' fontFamily='Roboto-Regular' w='75%' fontSize='24px' fontWeight='bold'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Text></Center>
                <hr />
                <VStack w='100%'>
                   <HStack w='90%' alignItems='start' columnGap='3%'>
                       <VStack w='100%'>
                           <HStack columnGap={0} w='100%' textAlign='center'>
                               <Image src={iconmtto} alt='iconmtto'></Image>
                               <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='38px'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                           </HStack><br/>
                           <Flex lineHeight='5.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='32px' fontFamily='Roboto-Regular'>
                               <ul>
                                   <li>De equipo hidráulico y neumático.</li><br/>
                                   <li>Equipo de refrigeración y aire acondicionado.</li>
                               </ul>
                           </Flex>
                       </VStack>
                       <VStack w='100%'>
                           <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image src={servicios} w='100%' alt='servicios'></Image></Flex>
                       </VStack>
                   </HStack>
                </VStack>
                <hr />
                <VStack w='100%'>
                    <HStack w='96%' alignItems='start' columnGap='9%'>
                        <VStack w='100%'>
                            <Flex w='100%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image src={maquinados} alt='servicios'></Image></Flex>
                        </VStack>
                        <VStack w='100%'>
                            <HStack columnGap={0} w='100%' textAlign='center'>
                                <Image src={iconmtto} alt='iconmtto'></Image>
                                <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='38px'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                            </HStack><br/>
                            <Flex lineHeight='5.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='32px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Trabajos de mecanizado que incluyen diseño y modelado de piezas.</li><br/>
                                    <li>Fabricación y rectificado.</li><br/>
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
                                <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='38px'>SERVICIOS LÓGISTICOS</Heading>
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='32px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Almacenamiento de inventario.</li><br/>
                                    <li>Renta de equipo de transporte.</li><br/>
                                    <li>Fletes nacionales.</li>
                                </ul>
                            </Flex><br/>
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
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <Heading letterSpacing='0.20vw' margin='2% 0 2% 0'>SERVICIOS</Heading>
                <Center><Text letterSpacing='0.10vw' fontFamily='Roboto-Regular' w='75%' fontSize='21px' fontWeight='bold'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Text></Center>
                <hr />
                <VStack w='100%'>
                    <HStack w='90%' alignItems='start' columnGap='3%'>
                        <VStack w='100%'>
                            <HStack columnGap={0} w='100%' textAlign='center'>
                                <Image src={iconmtto} alt='iconmtto'></Image>
                                <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='28px'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='22px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>De equipo hidráulico y neumático.</li><br/>
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
                                <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='28px'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='22px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Trabajos de mecanizado que incluyen diseño y modelado de piezas.</li><br/>
                                    <li>Fabricación y rectificado.</li><br/>
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
                                <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='28px'>SERVICIOS LÓGISTICOS</Heading>
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='22px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Almacenamiento de inventario.</li><br/>
                                    <li>Renta de equipo de transporte.</li><br/>
                                    <li>Fletes nacionales.</li>
                                </ul>
                            </Flex><br/>
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
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <Heading letterSpacing='1px' fontSize='30px' margin='2% 0 0 0'>SERVICIOS</Heading>
                <Center><Text letterSpacing='0.5px' fontFamily='Roboto-Regular' w='93%' fontSize='20px' fontWeight='bold'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Text></Center>
                <hr />
                <VStack w='100%'>
                    <HStack w='90%' alignItems='start' columnGap='3%'>
                        <VStack w='100%'>
                            <HStack columnGap={0} w='100%' textAlign='center'>
                                <Image src={iconmtto} alt='iconmtto'></Image>
                                <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='28px'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='22px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>De equipo hidráulico y neumático.</li><br/>
                                    <li>Equipo de refrigeración y aire acondicionado.</li>
                                </ul>
                            </Flex><br/>
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
                                <Heading w='100%' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='28px'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='22px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Trabajos de mecanizado que incluyen diseño y modelado de piezas.</li><br/>
                                    <li>Fabricación y rectificado.</li><br/>
                                    <li>Trabajos con taladro fresador.</li>
                                </ul>
                            </Flex><br/>
                        </VStack>
                    </HStack>
                </VStack>
                <hr />
                <VStack w='100%'>
                    <HStack w='90%' alignItems='start' columnGap='3%'>
                        <VStack w='100%'>
                            <HStack columnGap={0} w='100%' textAlign='center'>
                                <Image src={iconmtto} alt='iconmtto'></Image>
                                <Heading w='1005' fontFamily='Roboto-Regular' letterSpacing='0.20vw' fontSize='28px'>SERVICIOS LÓGISTICOS</Heading>
                            </HStack><br/>
                            <Flex lineHeight='4.5vh' letterSpacing='0.10vw' textAlign='left' width='100%' color='rgb(150,150,150)' fontSize='22px' fontFamily='Roboto-Regular'>
                                <ul>
                                    <li>Almacenamiento de inventario.</li><br/>
                                    <li>Renta de equipo de transporte.</li><br/>
                                    <li>Fletes nacionales.</li>
                                </ul>
                            </Flex><br/>
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
            <Stack textAlign='center' padding='0' margin='0' width='100%' height='90vh' bgColor='white' overflow='auto'>
                <Whatsapp />
                <Heading letterSpacing='0.20vw' margin='2% 0 0 0'>SERVICIOS</Heading>
                <Center><Text letterSpacing='0.10vw' fontFamily='Roboto-Regular' w='93%' fontSize='17px' fontWeight='bold'>Somos una empresa que otorga soluciones inmediatas con una vasta línea de servicios en el ramo y atención especializada a su medida.</Text></Center>
                <hr />
                <VStack w='100%' marginBottom='5%'>
                    <VStack w='90%'>
                        <HStack columnGap={0} textAlign='center'>
                            <Image src={iconmtto} alt='iconmtto'></Image>
                            <Heading fontSize='20px' marginLeft='5%' textAlign='left' fontFamily='Roboto-Regular'>MANTENIMIENTO, INSTALACIÓN Y REPARACIÓN</Heading>
                        </HStack>
                        <Flex lineHeight='23px' letterSpacing='0.5px' textAlign='left' width='90%' color='rgb(150,150,150)' fontSize='18px' fontFamily='Roboto-Regular'>
                            <ul>
                                <li>De equipo hidráulico y neumático.</li><br/>
                                <li>Equipo de refrigeración y aire acondicionado.</li>
                            </ul>
                        </Flex>
                    </VStack><br/>
                    <Flex w='90%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={servicios} alt='servicios'></Image></Flex>
                </VStack>
                <hr />
                <VStack w='100%' marginBottom='5%'>
                    <VStack w='90%'>
                        <HStack columnGap={1} textAlign='center'>
                            <Image src={maquinados2} alt='maquinados2'></Image>
                            <Heading fontSize='20px' marginLeft='5%' textAlign='left' fontFamily='Roboto-Regular'>MANTENIMIENTO Y FABRICACIÓN</Heading>
                        </HStack>
                        <Flex lineHeight='23px' letterSpacing='0.5px' textAlign='left' width='90%' color='rgb(150,150,150)' fontSize='18px' fontFamily='Roboto-Regular'>
                            <ul>
                                <li>Trabajos de mecanizado que incluyen diseño y modelado de piezas.</li><br/>
                                <li>Fabricación y rectificado.</li><br/>
                                <li>Trabajos con taladro fresador.</li>
                            </ul>
                        </Flex>
                    </VStack><br/>
                    <Flex w='90%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={maquinados} alt='maquinados'></Image></Flex>
                </VStack>
                <hr />
                <VStack w='100%' marginBottom='5%'>
                    <VStack w='90%'>
                        <HStack columnGap={1} textAlign='center'>
                            <Image src={embalaje} alt='embalaje'></Image>
                            <Heading fontSize='20px' marginLeft='5%' textAlign='left' fontFamily='Roboto-Regular'>SERVICIOS LÓGISTICOS</Heading>
                        </HStack>
                        <Flex lineHeight='23px' letterSpacing='0.5px' textAlign='left' width='90%' color='rgb(150,150,150)' fontSize='18px' fontFamily='Roboto-Regular'>
                            <ul>
                                <li>Almacenamiento de inventario</li><br/>
                                <li>Renta de equipo de transporte</li><br/>
                                <li>Fletes nacionales</li>
                            </ul>
                        </Flex>
                    </VStack><br/>
                    <Flex w='90%' borderWidth='4px' borderColor='rgb(255,230,0)'><Image w='100%' src={image27} alt='image27'></Image></Flex>
                </VStack>
                <Foot />
            </Stack>
            </div>
        </ChakraProvider>
        </>
    )
}