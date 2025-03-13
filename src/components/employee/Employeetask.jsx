import { useEffect, useState } from "react";
import Employeenavbar from "./navbar";
import axios from "axios";
import Employeedetails from "./employeedetails";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
// import Employeedetails from "./employeedetails";

function Seetasks(){
    const [task,settask]=useState([])
    const navigate=useNavigate()
    const [id,setid]=useState(undefined)
    useEffect(()=>{
        const Employeetask=async()=>{
        try{
            let taskapi='http://localhost:5000/api/task/get'
            const response=await axios.get(taskapi)
            settask(response.data)
            // console.log(response.data._id)
            //console.log(response.data)//startDate

        }
        catch(error){
            console.log(error);
        }
    }
    Employeetask();

    },[])
    const Archive=async(task)=>{
        let archapi='http://localhost:5000/api/task/change/'+task
        try{
            let responce=await axios.put(archapi)
            console.log('done');
            toast('record delete..')

        }
        catch(err){
            console.log(err)
        }

    }
    const filtereddata=task.filter((f)=>f.status=='Active')
    return(
        <>
            <div className="row">
                <div className="col-lg-12">
                    <Employeenavbar />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4-md-6">
                        {
                            filtereddata.map((t, index) => (
                                <div className="card"key={index}>
                                <div className="mt-4" >
                                    <div className="card-header" key={index}>
                                            {t.startDate.split('T')[0]}
                                    </div>
                                    <div className="card-body">
                                        {t.title}
                                        <br />
                                        {t.project.title}
                                        <br />
                                        {t.shortDescription}
                                        <br />
                                        <strong>status :</strong>{t.status}
                                        <br/>
                                        <br/>
                                        <button className="btn btn-info"
                                        onClick={()=>navigate(`/employee/employeedetails/${t._id}`)} 
                                            > View Full Details</button>
                                            &nbsp;&nbsp;
                                        <button className="btn btn-primary" onClick={()=>Archive(t._id)} >Archive</button>
                                    </div>
                                    
                                    <div className="card-footer">
                                        {t.estimatedEndDate.split('T')[0]}
                                    </div>
                                </div>
                                </div>
                            ))
                        }
                    
                </div>
            </div>
        </>
    )

}
export default Seetasks;