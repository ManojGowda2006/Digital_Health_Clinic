import { useNavigate } from 'react-router-dom'
import '../App.css'
function LandingPage() {
  const navigate = useNavigate()
  return(
    <div className='landing-container'>
      <div className='container'>
        <h1 className='title'>DIGITAL HEALTH CLINIC</h1>
        <p>"Empowering you with Digital Health"</p>
        <button className="register" onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  )
}

export default LandingPage