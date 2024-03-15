import React from 'react'
import heroimg from '../img/hero-img.png'

const Hero = () => {
    return (
        <div>
            <section class="hero bg-aqua">
                <div class="container max-w-1140 px-5 mx-auto flex items-center justify-between">
                    <div class="left w-full max-w-[500px]">
                        <h2 class="text-white text-4xl font-bold mb-4">Tabiiy davolash usullari yordamida kasalliklardan xalos bo'ling.</h2>
                        <p class="text-white text-lg mb-12">Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko'p uchraydigan kasalliklarni yengishda yordam beradi. Sog'ligingizni o'z ishining professionallariga ishonib topshiring.</p>
                        <button class="main-btn">Qabulga yozilish</button>
                    </div>
                    <div class="right">
                        <img src={heroimg} alt="Bratti qattigi" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero