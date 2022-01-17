import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {

    const [list, setList] = useState(null);
    const url = "http://localhost:3004/applied";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setList(res));
    }, [])
    console.log(list);

    return <>
        <div>
            <Link style={{ margin: "6px" }} to="/dashboard">Dashboard</Link>
            <Link to="/addJob">Add Jobs</Link>
        </div>
        <h1>your dashboard</h1>
        {list ? <div>
            {list.map((el) => {
                return (
                    <div className="listContainer">
                        <div>applied for:- {el.applied_for}</div>
                        <div>applied by:- {el.applied_by}</div>
                        <div>to date:- {el.to_date}</div>
                    </div>
                )
            })}
        </div> : null}
    </>
}