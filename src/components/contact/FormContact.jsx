import './formContact.css';

const FormContact = () => {
  return (
    <div className='container-form'>
      <form className="form">
        <span className="signup"> Envianos tu consulta</span>
        <input type="email" placeholder="Email address" className="form--input" />
        <input type="password" placeholder="Password" className="form--input" />
        <input type="password" placeholder="Confirm password" className="form--input" />
        <button className="form--submit">
           Enviar
        </button>
      </form>
    </div>
  )
}

export default FormContact