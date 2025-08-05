import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const API_URL = import.meta.env.VITE_API_URL
function Register(){
    const [user, setUser] = useState({name: "", email: "", password: ""})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetch = async() => {
            const res = await axios.post(
                `${API_URL}/api/register`,user,{
                    withCredentials: true
                }
            )
            alert(res.data.message)
            navigate("/tests")
        }
        fetch();
    }

    return(
        <>
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <p className="l">Register</p>
                <label>Name</label>
                <input type="text" onChange={(e) => setUser((prev)=>({...prev, name : e.target.value}))} required/>
                <label>Email</label>
                <input type="email" onChange={(e) => setUser((prev) => ({...prev, email : e.target.value}))}required/>
                <label>Password</label>
                <input type="password" onChange={(e) => setUser((prev) => ({...prev, password : e.target.value}))}/>
                <button type="submit">Submit</button>
                <span className="sp">Already have an accounnt? <Link to="/login">Login</Link></span>
            </form>
        </div>
        </>
    )
}

export default Register