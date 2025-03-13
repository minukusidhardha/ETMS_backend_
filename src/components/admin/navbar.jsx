import { NavLink } from "react-router";

function AdminNavbar(){
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#">ETMS</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <NavLink to='/admin/dashboard' style={{ 'textDecoration': 'none' }}>
                                    <div className="nav-link" href="#">Home</div></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/admin/employee-onboarding' style={{ 'textDecoration': 'none' }}>
                                    <div className="nav-link" href="#">Employee Onboarding</div></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/admin/employees' style={{ 'textDecoration': 'none' }}>
                            <div className="nav-link" href="#">All Employees</div></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/admin/addproject' style={{ 'textDecoration': 'none' }}>
                            <div className="nav-link" href="#">Add Project</div></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/admin/addtask' style={{ 'textDecoration': 'none' }}>
                            <div className="nav-link" href="#">Add Task</div></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/admin/assign-task' style={{ 'textDecoration': 'none' }}>
                            <div className="nav-link" href="#">Assign Task to Employee</div></NavLink>
                            </li>
                             
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default AdminNavbar;