import './contact.css';
import img from '../../image/img-alarma.jpg';
import CardsContact from './CardsContact';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import FormContact from './FormContact';

const Contact = () => {

  const location = [-31.721238416452046, -64.4173033335611];

  return (
    <div className="container-contact">
       <div className='container-portada'>
         <img src={img} alt="" className='img-portada'/>
         <div className='container-title-portada'>
         <h1 className='title-portada'> Contacto</h1>
         </div>
      </div>

      <CardsContact/>

      <div className='map-container'>
         <h1 className='title-map'> Ubicación </h1>
      <div className='container-map'>
      <MapContainer center={location} zoom={13} style={{ height: '400px'}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={location}>
                    <Popup>La Bolsa</Popup>
                </Marker>
      </MapContainer>
      </div>
      </div>

      <FormContact/> 
    </div>
  )
}

export default Contact;