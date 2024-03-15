import React from 'react'

import hizmatlar from '../img/hijoms.jpg'
import xizmatlar from '../img/image-2.jpg'
import hizmatlar1 from '../img/image-3.jpg'
import hizmatlar2 from '../img/image-4.jpg'
const Xizmatlar = () => {
    return (
        <div>  <section class="services py-120">
            <div class="">
                <h2 class="text-center text-4xl font-bold mb-14">Xizmatlar</h2>
                <ul class="flex flex-col justify-center items-center">
                    <li class="flex items-start">
                        <img src={hizmatlar} alt="Hijoma" class="mr-16 mb-80"/>
                            <div class="w-full max-w-xl">
                                <h3 class="text-2xl font-bold mb-6">Hijoma</h3>
                                <p >Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
                            </div>
                    </li>
                    <li class="flex items-start">
                        <img src={xizmatlar} alt="Manual terapiya" class="mr-16 mb-80"/>
                            <div class="w-full max-w-xl">
                                <h3 class="text-2xl font-bold mb-6">Manual terapiya</h3>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                            </div>
                    </li>
                    <li class="flex items-start">
                        <img src={hizmatlar1} alt="Zuluk bilan davolash" class="mr-16 mb-80"/>
                            <div class="w-full max-w-xl">
                                <h3 class="text-2xl font-bold mb-6">Zuluk bilan davolash</h3>
                                <p >Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.</p>
                            </div>
                    </li>
                    <li class="flex items-start mb-14">
                        <img src={hizmatlar2} alt="Tabiiy dori vositalari" class="mr-16 mb-80"/>
                            <div class="w-full max-w-xl">
                                <h3 class="text-2xl font-bold mb-6">Tabiiy dori vositalari</h3>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                            </div>
                    </li>
                </ul>
                <div class="btn-wrapper flex flex-col items-center justify-center">
                    <button class="main-btn">Qabulga yozilish</button>
                </div>
            </div>
        </section></div>
    )
}

export default Xizmatlar