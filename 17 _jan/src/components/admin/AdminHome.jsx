import { Link } from "react-router-dom"

export const AdminHome=()=>{
    return <>
        <div>
        <Link style={{margin:"6px"}} to="/dashboard">Dashboard</Link>
        <Link to="/addJob">Add Jobs</Link>
        </div>
    </>
}