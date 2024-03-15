import React from 'react'
import foter from '../img/logo-icon.png'
const Footer = () => {
    return (
        <div>
            <footer class="footer bg-black p-6">
                <div class="container max-w-1140 flex justify-between items-center px-5 mx-auto">
                    <div class="left">
                        <a href="index.html" class="font-semibold flex items-center">
                            <img src={foter} alt="AnsorMed" class="mr-4" />
                            <h1 class="text-2xl text-white">AnsorMed</h1></a>
                    </div>
                    <div class="right-0">
                        <a href="#" class="link mr-8 text-white">Xizmatlar</a>
                        <a href="#" class="link mr-8 text-white">Dorilar</a>
                        <a href="#" class="link mr-8 text-white">Asal</a>
                        <a href="#" class="link mr-8 text-white">Kontaktlar</a>
                        <a href="#" class="link text-white">Blog</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer