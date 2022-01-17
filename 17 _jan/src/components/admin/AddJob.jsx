import { useState } from "react";
import { Link } from "react-router-dom";

export const AddJob = () => {

    const [newData, setNewData] = useState({
        company: "",
        job_title: "",
        salary: "",
        description: "",
        location: "",
        job_type: ""
    });
    const url = "http://localhost:3004/list";

    const handleInp = (e) => {
        const { name, value } = e.target;
        setNewData({ ...newData, [name]: value, id: new Date().getTime().toString() })
    }

    const handleSubmit = () => {
        console.log(newData);
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData),
        }).then(res => res.json())
            .then((res) => {
                console.log(res);
            })
    }

    return <>
        <div>
            <Link style={{ margin: "6px" }} to="/dashboard">Dashboard</Link>
            <Link to="/addJob">Add Jobs</Link>
        </div>
        <h1>Add New Data</h1>
        <input onChange={handleInp} type="text" name="company" placeholder="company name" />
        <input onChange={handleInp} type="text" name="job_title" placeholder="job title" />
        <input onChange={handleInp} type="text" name="salary" placeholder="salary" />
        <input onChange={handleInp} type="text" name="description" placeholder="description" />
        <input onChange={handleInp} type="text" name="location" placeholder="location" />
        <input onChange={handleInp} type="text" name="job_type" placeholder="job type" />
        <button onClick={handleSubmit}>Login</button>

    </>
}


