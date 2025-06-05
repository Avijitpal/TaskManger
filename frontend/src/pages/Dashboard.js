import react from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authServices";

const Dashboard = () =>{
    const navigate = useNavigate();
    const handleChange = ()=>{
        logoutUser();
        navigate('/login')
    };

    return(
        <div> 
            <h2> Welcomem to task manager</h2>
            <button onClick={handleChange} >Logout</button>
        </div>
    )
}
export default Dashboard;