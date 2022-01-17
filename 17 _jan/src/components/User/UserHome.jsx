import { useEffect, useState } from "react"
import './UserHome.css'
import { useNavigate } from "react-router-dom";

export const UserHome = () => {
    const [list, setList] = useState(null);
    const url = "http://localhost:3004/list";
    const navigate=useNavigate();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setList(res));
    }, []);

    return <>
        <h1>User Home</h1>
        <h3>current opening</h3>
        {list ? <div>
            {list.map((el) => {
                return (
                <div  onClick={() => { navigate(`/job/${el.id}`) }} className="listContainer" id={el.id}>
                    <span>
                        <span>Job title:- {el.job_title}</span>
                        <span>Company:- {el.company}</span>
                    </span>
                    <div>Description:- {el.description}</div>
                </div>
                )
            })}
        </div> : null}
    </>
}