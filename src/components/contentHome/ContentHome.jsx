import './contentHome.css';
import img_teclado_content from '../../image/img-teclado-content.jpg';
import img_camaras_content from '../../image/img-camaras-content.jpg';
import img_comunicador_content from '../../image/img-comunicador-content.jpg';
import img_accesorios_content from '../../image/img-accesorios-content.jpg';

const ContentHome = () => {
  return (
   <div className='container-content-card'>
        <div className='container-alarmas'>
            <img src={img_teclado_content} alt="" className='img-content'/> 
        </div>
        <div className='container-camaras'>
           <img src={img_camaras_content} alt="" className='img-content'/> 
        </div>
        <div className='container-accesorios'>
           <img src={img_accesorios_content} alt="" className='img-content'/> 
        </div>
        <div className='container-comunicadores'>
           <img src={img_comunicador_content} alt="" className='img-content'/> 
        </div>
    </div>
  )
}

export default ContentHome;