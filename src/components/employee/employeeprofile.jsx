import axios, { toFormData } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function EmpProfile(){
    const [employee, setemployee] = useState([])
    const [file,setfile]=useState(undefined)
    const [profile,setprofile]=useState(undefined)
    useEffect(() => {
        const employee = async () => {
            try {
                let header = {
                    'Authorization': 'bearer ' + localStorage.getItem('token')
                }
                let empapi = 'http://localhost:5000/api/employee/getone'
                let responce = await axios.get(empapi, { headers: header })
                setemployee(responce.data)
                console.log(responce.data);
            }
            catch (err) {
                console.log(err);
            }


        }
        employee();
    }, [])
    const handelfilechange=($e)=>{
        setfile($e.target.files[0])

    }
    const resume=async()=>{
        try {
            if(!file){
                console.log('file not present')
            }
            const fdata=new FormData()
            fdata.append('file',file)
            const header = {
                'Authorization' : 'Bearer ' + localStorage.getItem('token'),
                'Content-Type' : 'multipart/form-data'
            }
            let profileapi = 'http://localhost:5000/api/employee/uploadcv'
            let responce = await axios.post(profileapi,fdata,{ headers: header })
            console.log(responce);
            toast.success('profile uploaded..')
        }
        catch (err) {
            console.log(err);
            toast.error('profile uploaded failed..')
        }

    }
    const handleprofile=($e)=>{
        setprofile($e.target.files[0])
    }
    const Uploadprofile= async()=>{
        try
         {
            if(!profile){
                console.log('profile not present')
            }
            const fdata=new FormData()
            fdata.append('file',profile)
            const header = {
                'Authorization' : 'Bearer ' + localStorage.getItem('token'),
                'Content-Type' : 'multipart/form-data'
            }
            let profileapi = 'http://localhost:5000/api/employee/profile'
            let responce = await axios.post(profileapi,fdata,{ headers: header })
            toast.success('profile uploaded..')
            console.log(responce);
        }
        catch(err){
            toast.error('profile uploaded failed..')
            console.log(err)
        }

    }
    return (
        <div className="card">
            <div className="card-header">
                Employee Profile
            </div>
            <div className="card-body">
                <form className="row g-3" >
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                        value={employee.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control"
                        value={employee.city}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Salary</label>
                        <input type="text" className="form-control"
                        value={employee.salary}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputAddress" className="form-label">Select Job Title</label>
                        <input type="text" className="form-control" disabled={true} />
                    </div>
                    <hr />
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control"
                        value={employee.username}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"
                        disabled={true}
                        />
                    </div>
                    <hr />
                    </form>
                    <div className="col-lg-12">
                        <label className="form-label">Profile Pic</label>
                        <input type="file" className="form-control" onChange={handleprofile}
                        />
                        <br />
                        <button className="btn btn-secondary"onClick={Uploadprofile} >Upload</button>
                    </div>
                    <hr />
                    <div className="col-lg-12">
                        <label className="form-label">Upload updated CV</label>
                        <input type="file" className="form-control"onChange={handelfilechange}  />
                        <br />
                        <button className="btn btn-secondary" onClick={resume}>Upload</button>
                    </div>
                    <hr />
        
                
            </div>
        </div>
    )


}
export default EmpProfile;