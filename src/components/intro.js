import '../App.css';
import React from 'react';
import Helmet from 'react-helmet';

/* Iconos */
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Chakra Ui */
import { ChakraProvider, Spacer, Box, Flex, HStack, VStack, Stack, Center, Image, Text, Button, extendTheme, Heading, AspectRatio, Link, isExternal, Alert } from '@chakra-ui/react';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';

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
import nosotros from '../media/images/nosotros.png';

export default function Main() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> DINEX | Sitio Oficial</title>
      </Helmet>
      <ChakraProvider>
        <div class="desktoplg">
        </div>
        <div class="desktopsm">
          <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
          <Flex backgroundColor='rgb(23,25,38)' h='100%' w='100%' position='absolute'>
          </Flex>
        </div>
        <div class="laptop">
          <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
          
        </div>
        <div class="tablet">
          <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
          
        </div>
        <div class="mobile">
          <meta name='viewport' content='width=device-width , initial-scale=1' /><meta name='viewport' content='width=device-width , initial-scale=1' />
        </div>
      </ChakraProvider>
    </>
  );
}
