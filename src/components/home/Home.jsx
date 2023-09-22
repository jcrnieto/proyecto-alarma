import CarrouselHome from '../carrouselHome/CarrouselHome';
import CarrouselMarca from '../carrouselMarca/CarrouselMarca';
import ContentHome from '../contentHome/ContentHome';
import './home.css';

const Home = () => {
  
  return (
    <div className='container-home'>
       <CarrouselHome/>
       <ContentHome/>
       <CarrouselMarca/>
    </div>
  )
}

export default Home;