import './formContact.css';

const FormContact = () => {
  return (
    <div className='container-form'>
      <form className="form">
        <span className="signup"> Envianos tu consulta</span>
        <input type="email" placeholder="Email" className="form--input" />
        <input type="text" placeholder="Nombre" className="form--input" />
        <input type="text" placeholder="Mensaje" className="form--input" />
        <button className="form--submit">
           Enviar
        </button>
      </form>
    </div>
  )
}

export default FormContact