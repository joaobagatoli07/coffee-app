import Instagram from '../../assets/icons/Instagram'
import Facebook from '../../assets/icons/Facebook'
import Whatsapp from '../../assets/icons/Whatsapp'
import Logo from '../../assets/icons/Logo'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='flex justify-center pt-4 pb-4 bg-amber-950 text-white text-sm'>
            <div className='flex justify-between w-4/5'>
                <div>
                    <Link to='/'><Logo width='35' height='51'></Logo></Link>
                    <p>Contato: 47 99698-9898</p>
                    <p>Email: coffe@gmail.com</p>
                </div>
                <div className='flex flex-col items-end gap-5'>
                    <div className='flex gap-2'>
                        <a href="https://www.instagram.com/accounts/login/" target="_blank"><Instagram></Instagram></a>
                        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"><Facebook></Facebook></a>
                        <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank"><Whatsapp></Whatsapp></a>
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