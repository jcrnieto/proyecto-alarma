import './contentHome.css';
import { GiRingingAlarm } from 'react-icons/gi';
import { MdOutlineSecurity } from 'react-icons/md';
import { MdOutlineSystemSecurityUpdateGood } from 'react-icons/md';
import { MdOutlineSensorWindow } from 'react-icons/md';


const ContentHome = () => {
   return (
      <div className='container-content-card'>
         <div className='container-alarmas'>
            <div className='content-card'>
               <i className='icon-content'> <GiRingingAlarm/></i>
               <p className='text-content'>Kit de Alarmas</p>
               <div className='container-buttom-content'>
                 <button>Ver Productos</button>
               </div>
            </div>
         </div>
         <div className='container-camaras'>
            <div className='content-card'>
               <i className='icon-content'><MdOutlineSecurity/></i>
               <p className='text-content'>Kit de Cámaras</p>
               <div className='container-buttom-content'>
                 <button>Ver Productos</button>
               </div>
            </div>
         </div>
          <div className='container-accesorios'>
            <div className='content-card'>
               <i className='icon-content'><MdOutlineSensorWindow/></i>
               <p className='text-content'>Accesirios para Alármas</p>
               <div className='container-buttom-content'>
                 <button>Ver Productos</button>
               </div>
            </div>
         </div>
         <div className='container-comunicadores'>
            <div className='content-card'>
               <i className='icon-content'><MdOutlineSystemSecurityUpdateGood/></i>
               <p className='text-content'>Comunicador para Alarmas</p>
               <div className='container-buttom-content'>
                 <button>Ver Productos</button>
               </div>
            </div>
         </div> 
      </div>
   )
}

export default ContentHome;