import Instagram from '../../assets/icons/Instagram'
import Facebook from '../../assets/icons/Facebook'
import Whatsapp from '../../assets/icons/Whatsapp'
import Logo from '../../assets/icons/Logo'

function Footer() {
    return (
        <footer className='flex justify-center items-center w-full pt-10 pb-10 bg-amber-950 text-white fixed bottom-0'>
            <div className='flex justify-between w-4/5'>
                <div>
                    <Logo></Logo>
                    <p>Contato: 47 99698-9898</p>
                    <p>Email: coffe@gmail.com</p>
                </div>
                <div className='flex flex-col items-end gap-5'>
                    <div className='flex gap-2'>
                        <Instagram></Instagram>
                        <Facebook></Facebook>
                        <Whatsapp></Whatsapp>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-right'>Política de Privacidade / Termos & Condições</p>
                    <hr className='w-[400px]' />
                    <p className='text-right'>Copyright 2024 All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;