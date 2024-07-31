import React from 'react'

import hizmatlar from '../img/hijoms.jpg'
import xizmatlar from '../img/image-2.jpg'
import hizmatlar1 from '../img/image-3.jpg'
import hizmatlar2 from '../img/image-4.jpg'

const Xizmatlar = () => {
    
        const list = [
             {
                id: 1,
                rasmlar:hizmatlar ,
                title: 'Hijoma',
                matn: 'Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).',
               
             },
           
             {
                id: 2,
                rasmlar:xizmatlar ,
                title: 'Manual terapiya',
                matn: 'Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).',
               
             },
           
             {
                id: 3,
                rasmlar:hizmatlar1 ,
                title: 'Zuluk bilan davolash',
                matn: 'Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.',
               
             },
           
             {
                id: 4,
                rasmlar:hizmatlar2 ,
                title: 'Tabiiy dori vositalari',
                matn: 'Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).',
               
             },
           
        ]
    return (
        <div>
            <section className="services py-120">
            <div>
                <h2 className="text-center text-4xl font-bold mb-14">Xizmatlar</h2>
                <ul className="flex flex-col justify-center items-center">
                    
                {list.map((item) =>{
                    return(
                        
                    <li class="flex items-start">
                         <img src={item.rasmlar} alt="Hijoma" className="mr-16 mb-80"/>
                        <div className="w-full max-w-xl">
                            <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                            <p >{item.matn}</p>
                        </div>
                     </li>
                     
                    );
                   })}


                </ul>
                <div class="btn-wrapper flex flex-col items-center justify-center">
                    <button class="main-btn">Qabulga yozilish</button>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Xizmatlar