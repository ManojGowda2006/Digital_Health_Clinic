import { useEffect, useState } from "react"
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL
import { Link, useNavigate } from "react-router-dom"

function Login(){
    const [user, setUser] = useState({email: "", password: ""})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetch = async() => {
            try{
                const res = await axios.post(
                    `${API_URL}/api/login`,user,{
                        withCredentials: true
                    }
                )
                console.log(res.data)
                if(res.status == 200){
                    navigate("/tests")
                }
            }catch(err){
                alert(err.message)
            }
        }
        fetch();
        console.log(user)
    }

    return(
        <>
        <div className="login-container">
            
            <form className="login-form" onSubmit={handleSubmit}>
                <p className="l">Login</p>
                <label>Email</label>
                <input type="email" onChange={(e) => setUser((prev) => ({...prev, email : e.target.value}))}required/>
                <label>Password</label>
                <input type="password" onChange={(e) => setUser((prev) => ({...prev, password : e.target.value}))}/>
                <button type="submit">Submit</button>
                <span className="sp">Don't have an accounnt? <Link to="/register">Register</Link></span>
            </form>
        </div>
        </>
    )
}

export default Login