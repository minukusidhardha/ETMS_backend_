import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login(){
   const [username,setusername]=useState(undefined)
   const [password,setpassword]=useState(undefined)
   const [msg,setmsg]=useState(undefined)
   const navigate= useNavigate();
   
   const processLogin = async ($event)=>{
    $event.preventDefault();  //this ensures that after form is submitted , it does not refresh the page
    /** Call login API  */
    let loginApi = 'http://localhost:5000/api/auth/login'
    console.log(`Inside processLogin.... with ${username} & ${password}` )
    try{
        const response = await axios.post(loginApi, {
            'username' : username, 
            'password' : password
        })
        console.log(response)
        let role = response.data.role
        localStorage.setItem("token", response.data.token)
        switch (role) {
            case 'Admin_Role':
                navigate('/admin/dashboard')
                break;
            case 'Role_Employee':
                navigate('/employee/dashboard')
                break;
            default:
                break;
        }
        return
    }
    catch(error){
        setmsg('Invalid Credentials')
    }
}
    return(
        <div className="fullscreen" style={{backgroundColor:'lightblue' ,backgroundPosition:'center'}}>
        <div className="row" style={{marginTop:'10%'}} >
            <div className="col-sm-4">

            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-title">
                            ETMS Login
                    </div>
                    <div className="card-body">
                        {msg ? <div className="alert alert-primary">
                            {msg}
                        </div> : ""}
                        <form onSubmit={processLogin}>
                            <div className="mt-2">
                                <label>Username: </label>
                                <input type="text"
                                    className="form-control"
                                    onChange={($event) => setusername($event.target.value)}
                                />
                            </div>
                            <div className="mt-2">
                                <label>Password: </label>
                                <input type="password"
                                    className="form-control"
                                    onChange={($event) => setpassword($event.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <input type="submit" value="Login"
                                    className="btn btn-primary"
                                    disabled={!username || !password}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-sm-4"></div>
        </div>
    </div>
    )

}
export default Login;