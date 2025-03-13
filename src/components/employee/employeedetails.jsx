import axios from "axios";
import { useEffect, useState } from "react";
import Employeenavbar from "./navbar";
import { useParams } from "react-router";

function Employeedetails(){
    const {id}=useParams()
    const [data,setdata]=useState([])
    const [comment,setcomment]=useState(undefined)
    const [msg,setmsg]=useState(undefined)
    const [com,setcom]=useState([])
    const [project,setproject]=useState([])
    
    useEffect(()=>{
        const details=async()=>{
            try{
                let detailsapi=`http://localhost:5000/api/task/getdetails/${id}`
                let response=await axios.get(detailsapi)
                setdata(response.data)
                // console.log(response.data)
            }
            catch(err){
                console.log(err)
            }

        }
        const Getcomments=async()=>{
            let getcomapi='http://localhost:5000/api/comment/get'
            try{
                let response=await axios.get(getcomapi,{'task':id})
                setcom(response.data)

            }
            catch(err){
                console.log(err)
            }

        }
        Getcomments()
        details();
    },[])
    const Comments=async($e)=>{
        $e.preventDefault();
        let header={
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try{
            let comentapi='http://localhost:5000/api/comment/add'
            let response=await axios.post(comentapi,{
                'message':comment,
                'task':id
            },{headers:header})
            setmsg('comment added')
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <div className="row">
                <div className="col-sm-4-md-12">
                     <Employeenavbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4-md-6">
                        {
                                <div className="card" >
                                <div className="mt-4" >
                                    <div className="card-header">
                                        All Details:
                                    </div>
                                    <div className="card-body">
                                       <strong> Task details:</strong>
                                        <br/>
                                        {data.title}
                                        <br/>
                                        {data.startDate
                                        }
                                        <br/>
                                        {data.shortDescription
                                        }
                                        <br/>
                                        {data.estimatedEndDate}
                                        <br/>
                                        <div><strong>Comments:</strong>
                                            {
                                                com.map((c,index)=>(
                                                    <div key={index}>
                                                    <strong>
                                                    <div>{c.message}</div>
                                                    </strong>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div>
                                        {/* Project Details :
                                        <br/>
                                        {data.project._id
                                       }
                                        <br/>
                                        {data.project.title
                                       }
                                       <br/>
                                       {data.project.startDate
                                       }
                                       <br/>
                                       {data.project.startDate
                                       }
                                        <br/>
                                        {data.project.
clientName
                                       } */}
                                       </div>
                                    </div>
                                    
                                </div>
                                </div>
                        }
                    
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4-md-12">
                    <div className="card">
                    <form onSubmit={Comments}>
                        <div className="mb-6">
                            <div className="card-header">
                            <label className="form-label">Add Comments :</label>
                            </div>
                            {msg? <div className="col-sm-4-lg-12" >
                            <div className="alert alert-primary">
                                {msg}
                            </div>
                        </div>:''}
                            <div className="mt-4">
                            <textarea rows={5} cols={100}
                             onChange={($event)=>setcomment($event.target.value)}
                             />
                             <br/>
                             <button className="btn btn-primary">submit</button>
                            </div>
                        </div>

                    </form>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default Employeedetails;