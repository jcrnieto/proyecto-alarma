import './carrouselHome.css';
// import { useSpringCarousel } from 'react-spring-carousel'
import img_accesorios from '../../image/img-accesorios-alarma.jpg';
import img_kit_alarma from '../../image/img-kit-alarma.jpg';
import img_kit_camaras from '../../image/img-kit-camaras.jpg';
import img_comunicadores from '../../image/img-comunicador.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const CarrouselHome = () => {
    
 return (
      <div className='container-carrousel-home'>
            <Swiper
      modules={[Navigation,  Scrollbar, A11y, Autoplay]}
      navigation
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      delay={3000}
      spaceBetween={50}
      slidesPerView={1}
      className='container-swiper'
    >
     <SwiperSlide>
         <div>
           <img src={img_accesorios} alt="" className='img-slide' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
         <div>
           <img src={img_kit_alarma} alt="" className='img-slide'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
         <div>
           <img src={img_kit_camaras} alt="" className='img-slide'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
         <div>
           <img src={img_comunicadores} alt="" className='img-slide'/>
        </div>
      </SwiperSlide>
    
    </Swiper>
      </div>
    );
  }

export default CarrouselHome;

