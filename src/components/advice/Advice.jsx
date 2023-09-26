import './advice.css';
import { Link } from 'react-router-dom';

const Advice = () => {
    return (
        <div className="container-advice">
            <div className='container-text-advice'>
                <h2 className='title-advice'>Asesoramiento Profesional</h2>
                <h3 className='content-advice'>Contamos con experiencia y un equipo dispuesto a ayudarte en tu proyecto.</h3>
            </div>
            <Link to='/contact'>
                <div className='button-advice'>
                    <button class="contactButton"> Contáctanos
                        <div class="iconButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                        </div>
                    </button>
                </div>
            </Link>
        </div>

    )
}

export default Advice