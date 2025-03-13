import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";
import { toast } from "react-toastify";

function AssignTask(){
    const [employees, setEmployees] = useState([]); 
    const [tasks,settasks] = useState([]); 
    const [empId,setEmpId] = useState(undefined)
    const [taskId,settaskId] = useState(undefined)
    useEffect(()=>{
        const getAllEmployees = async ()=>{
            let header = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            const resp = await axios.get('http://localhost:5000/api/employee/get',
                {headers : header}
            )
            setEmployees(resp.data)
        }

        const getAllTask=async()=>{
            let header = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            const resp = await axios.get('http://localhost:5000/api/task/get',
                {headers : header}
            )
            settasks(resp.data)
            //attach resp.data to tasks
        }

        getAllEmployees();
        getAllTask(); 
    },[])
    const process =async(e)=>{
        try{
        e.preventDefault();
        let header = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        let assignapi='http://localhost:5000/api/assign/add'
        const responce=await axios.post(assignapi,{
            'eid':empId,
            'tid':taskId
        },{headers:header})
        toast('Assigned Task to Employee')
        console.log('data posted...')

        }
        catch(err){
            console.log(err);
        }

        //call post api 
  
    }
    return (
        <div >
             <div className="row">
                <div className="col-lg-12"> <AdminNavbar /></div>
            </div>
            <div className="row">
                <div className="col-sm-4">  

                </div>
                <div className="col-sm-4" style={{marginTop: '8%'}}>  
                    <div className="card">
                        <div className="card-header">
                            Assign task to Employee
                        </div>
                        <div className="card-body">
                            <form onSubmit={process}> 
                                <div className="mt-4">
                                    <label>Select Employee: </label>
                                    <select className="form-control" 
                                        onChange={(e)=> setEmpId(e.target.value)}>                                  
                                        <option>--------Select Employee------</option>
                                        {/** iterate over employees */}
                                        {
                                            employees.map((e,index)=>(
                                                <option key={index} value={e._id}>
                                                    {e.name} -- {e.jobTitle}
                                                </option>
                                            ))
                                        }
                                       
                                    </select>
                                </div>
                                <div className="mt-4">
                                <label>Select Task: </label>
                                    <select className="form-control"
                                    onChange={(e)=> settaskId(e.target.value)}>
                                    <option>--------Select Task------</option>
                                        {/** iterate over tasks */}
                                        {tasks.map((t,index)=>(
                                        
                                            <option key={index} value={t._id}>
                                                {
                                                    t.title
                                                }
                                            </option>
                                
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <input type="submit" value="Process" className="btn btn-warning" disabled={!empId || !taskId} />
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-4">  

                </div>
            </div>
        </div>
    )
}

export default AssignTask;