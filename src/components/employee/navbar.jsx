import { NavLink } from "react-router";

function Employeenavbar(){
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
                                <NavLink to='/employee/dashboard' style={{ 'textDecoration': 'none',color:'black'}}>
                                    <div className="nav-link" href="#">Home</div></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/employee/task' style={{ 'textDecoration': 'none' }}>
                                    <div className="nav-link" href="#">Tasks</div></NavLink>
                            </li>
                           
                          
                        </ul>
                    </div>
                </div>
            </nav>
                               
        </div>
    )

}
export default Employeenavbar;