import EmpProfile from "./employeeprofile";
import Employeenavbar from "./navbar";

function EmployeeDashboard(){
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <Employeenavbar />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <EmpProfile/>
            </div>
                
        </div>
       
    </div>
    )

}
export default EmployeeDashboard;