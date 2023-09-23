import './carrouselMarca.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar, A11y, Autoplay} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {Autoplay} from 'swiper/modules';
import img_dsc from '../../image/img-dsc.jpg';
import img_dahua from '../../image/img-dahua.jpg';
import img_haltel from '../../image/img-haltel.jpg';
import img_smarthome from '../../image/img-smarthome.jpg';


const CarrouselMarca = () => {
  return (
    <div className='container-carrousel-marcas'>
        <h3 className='title-marca'>Trabajamos con las mejores marcas</h3>
        <Swiper
       modules={[ Autoplay]}
       loop={true}
       autoplay={{
         delay: 1000,
         disableOnInteraction: true,
       }}
       delay={1000}
       spaceBetween={50}
       slidesPerView={3}
      // className='container-swiper-marca'
    >
     <SwiperSlide>
         <div className='container-img-marca'>
            <img src={img_dsc} alt="" className='img-slide-marca' /> 
        </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='container-img-marca'>
            <img src={img_dahua} alt="" className='img-slide-marca'/> 
        </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='container-img-marca'>
            <img src={img_haltel} alt="" className='img-slide-marca'/> 
        </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='container-img-marca'>
            <img src={img_smarthome} alt="" className='img-slide-marca'/> 
        </div>
      </SwiperSlide>
    
    </Swiper>
    </div>
  )
}

export default CarrouselMarca