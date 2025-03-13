import { useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";
import { toast } from "react-toastify";

function EmployeeOnboarding(){
    const [name,setname]=useState(0);
    const [city,setcity]=useState(0);
    const [jobtitle,setjobtitle]=useState(0);
    const [salary,setsalary]=useState(0);
    const [username,setusername]=useState(0);
    const [password,setpassword]=useState(0);

    const Processonboard=async($event)=>{
        try{
        $event.preventDefault();
        let header={
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        let OnboardAPI='http://localhost:5000/api/employee/add'
        const responce=await axios.post(OnboardAPI,{
            'name':name,
            'city':city,
            'jobTitle':jobtitle,
            'salary':salary,
            'username':username,
            'password':password
        },{headers:header})
        toast('Employee Onboarded')
        console.log('data posted in DB')
      }
    catch(error){
        console.log(error)
    }
  
    }
    return(
       <>
            <div className="row">
                <div className="col-lg-12"> <AdminNavbar /></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"> </div>
                <div className="col-md-8">
                    <div className="card" >
                        <div className="card-header">
                            Employee Onboarding - Add Details
                        </div>
                        <div className="card-body">
                            <form className="row g-3" onSubmit={Processonboard}>
                                <div className="col-md-6">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" 
                                    onChange={(($event)=>setname($event.target.value))}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" 
                                    onChange={(($event)=>setcity($event.target.value))}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Select Job Title</label>
                                    <select className="form-control" 
                                    onChange={(($event)=>setjobtitle($event.target.value))}>
                                        <option>----select job title----</option>
                                        <option>Software Dev</option>
                                        <option>Software tester</option>
                                        <option>Product Owner</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Salary</label>
                                    <input type="text" className="form-control"
                                    onChange={(($event)=>setsalary($event.target.value))}
                                     />
                                </div>
                                <div className="col-lg-12">
                                    <label htmlFor="inputCity" className="form-label">Profile Pic</label>
                                    <input type="file" className="form-control" id="inputCity" />
                                    <br />
                                    <button className="btn btn-secondary">Upload</button>
                                </div>
                                <div className="col-lg-12">
                                    <label htmlFor="inputCity" className="form-label">Upload updated CV</label>
                                    <input type="file" className="form-control" id="inputCity" />
                                    <br />
                                    <button>Upload</button>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="inputZip" 
                                    onChange={(($event)=>setusername($event.target.value))}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Password</label>
                                    <input type="text" className="form-control" id="inputZip" 
                                    onChange={(($event)=>setpassword($event.target.value))}
                                    />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary" disabled={!name || !city||!jobtitle||!salary||!username||!password}>Employee Onboarding</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"> </div>
            </div>
       </>
    )

}
export default EmployeeOnboarding;