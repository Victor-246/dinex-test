import React from "react";
import { Box , Button , Image, Flex , Spacer , Text, Stack, Slide , useDisclosure , Link , isExternal, ChakraProvider} from "@chakra-ui/react";

import { AiOutlineWhatsApp } from "react-icons/ai";


/* Imagenes */
import group23 from '../media/images/group-2-3.png';
import group41 from '../media/images/group-4-1.png';
import { color } from "framer-motion";


export default function Foot() {
    return (
        <>
        <ChakraProvider>
            <div class="desktoplg">
                <Link href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button leftIcon={<AiOutlineWhatsApp />} padding='1.5% 0.5% 1.5% 0.5%' transition='0.5s' position='fixed' top='40%'  right='-0.5%' color='black' bgColor='rgb(255,230,0)' fontSize='42px' _hover={{bgColor: 'black' , color: 'rgb(255,230,0)' , transform: 'scale(1.2)' , right: '0' }} _active={{transform: 'scale(0.8)'}}></Button></Link>
            </div>
            <div class="desktopsm">
                <Link href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button leftIcon={<AiOutlineWhatsApp />} padding='0.5%' transition='0.5s' position='fixed' top='40%'  right='-0.8%' color='black' bgColor='rgb(255,230,0)' fontSize='24px' _hover={{bgColor: 'black' , color: 'rgb(255,230,0)' , transform: 'scale(1.2)' , right: '0' }} _active={{transform: 'scale(0.8)'}}></Button></Link>
            </div>
            <div class="laptop">
                <Link href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button leftIcon={<AiOutlineWhatsApp />} padding='0.5%' transition='0.5s' position='fixed' top='40%'  right='-0.8%' color='black' bgColor='rgb(255,230,0)' fontSize='24px' _hover={{bgColor: 'black' , color: 'rgb(255,230,0)' , transform: 'scale(1.2)' , right: '0' , padding: '1%'}} _active={{transform: 'scale(0.8)'}}></Button></Link>
            </div>
            <div class="tablet">
                <Link href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button leftIcon={<AiOutlineWhatsApp />} padding='0.5%' transition='0.5s' position='fixed' top='45%'  right='-0.8%' color='black' bgColor='rgb(255,230,0)' fontSize='24px' _hover={{bgColor: 'black' , color: 'rgb(255,230,0)' , transform: 'scale(1.2)' , right: '0' , padding: '1%'}} _active={{transform: 'scale(0.8)'}}></Button></Link>
            </div>
            <div class="mobile">
                <Link href='https://api.whatsapp.com/send?phone=528128943229' isExternal><Button leftIcon={<AiOutlineWhatsApp />} padding='0.5%' transition='0.5s' position='fixed' top='45%'  right='-3%' color='black' bgColor='rgb(255,230,0)' fontSize='24px' _hover={{bgColor: 'black' , color: 'rgb(255,230,0)' , transform: 'scale(1.2)' , right: '0' , padding: '1%'}} _active={{transform: 'scale(0.8)'}}></Button></Link>
            </div>
        </ChakraProvider>
        </>
    );
}


