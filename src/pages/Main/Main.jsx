import React from "react";
//components
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
//styles
import './Main.scss'
//images
import mouse from '../../images/mouse.png'
import about from '../../images/“.png'
import hairdresserServicesIMG from '../../images/hairdresser-services.png'
import manicureServicesIMG from '../../images/manicure-services.png'
import productIMG from '../../images/product.png'
//library
import {SimpleSlider} from "../../components/Slider/SimpleSlider";

export function Main() {
    return(
       <div className="wrapper">
           <main className="main-screen">
               <Header/>
               <div className="main-content">
                   <h1>Barbershop</h1>
                   <div className="main-content__scroll">
                       <img src={mouse} alt="mouse"/>
                       <p>Прокрутите вниз</p>
                   </div>
               </div>
           </main>
           <section className="about">
               <div className="about-content">
                   <img src={about} alt="about"/>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet.
                       Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit,
                       facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor,
                       malesuada iaculis.
                   </p>
                   <p>
                       Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum.
                       Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
                   </p>
               </div>
               <div className="main-services">
                   <div className="main-hairdresser">
                       <img src={hairdresserServicesIMG} alt="hairdresserServicesIMG"/>
                       <p>Парикмахерские услуги</p>
                   </div>
                   <div className="main-manicure">
                       <img src={manicureServicesIMG} alt="manicureServicesIMG"/>
                       <p>Маникюр</p>
                   </div>
               </div>

           </section>
           <section className='product'>
               <div className="product-content">
                   <img src={productIMG} alt="product"/>
                   <img src={productIMG} alt="product"/>
                   <img src={productIMG} alt="product"/>
                   <img src={productIMG} alt="product"/>
               </div>
           </section>
           <section className="gallery">
               <div className="gallery-content">
                   <p className="gallery-title">
                       Наши работы
                   </p>
                   <div className="gallery-nav">
                       <SimpleSlider/>
                   </div>
                   <div className="gallery-photos">

                   </div>
               </div>
           </section>
           <Footer/>
       </div>
    )
}