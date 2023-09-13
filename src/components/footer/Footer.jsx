import './footer.css';

const Footer = () => {
  return (
    <div className='container-footer'>
    <div className="footer-superior">
        <div className='logo-footer'>
           LOGO
        </div>
        <div>
           <h1>Conocenos</h1> 
           <h3>Empresa</h3>
           <h3>Productos</h3>
           <h3>Contacto</h3>
        </div>
        <div>
            <h1>Contáctanos</h1>
            <h3>telefono</h3>
            <h3>direccion</h3>
            <h3>mail</h3>
            <h3>redes</h3>
        </div>
    </div>
    <div className='footer-inferior'>
         <p className='footer-reserved'>Todos los derechos reservados</p>
    </div>
    </div>
  )
}

export default Footer