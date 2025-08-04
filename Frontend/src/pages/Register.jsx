
function Register(){
    return(
        <>
        <div>
            <form>
                <p>Register</p>
                <label>Name</label>
                <input type="text" required/>
                <label>Email</label>
                <input type="email" required/>
                <label>Password</label>
                <input type="password"/>
            </form>
        </div>
        </>
    )
}

export default Register