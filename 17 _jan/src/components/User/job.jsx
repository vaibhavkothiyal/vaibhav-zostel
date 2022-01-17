import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export const SelectedJob = () => {
    const { id } = useParams();
    const url = `http://localhost:3004/list/${id}`;
    const url2 = "http://localhost:3004/applied";
    const [job, setJob] = useState(null);
    const [user, setUser] = useState("");

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setJob(res))
    }, [])
    console.log(job)

    const applyfor = () => {
        fetch(url2, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                applied_for: job.job_title,
                applied_by: user || "abc@gmail.com",
                to_date: "17-01-2022"
            }),
        }).then(res => res.json())
            .then((res) => {
                console.log(res);
            })
    }

    return <>
        {job ? <div>
            <h1> {job.job_title}</h1>
            <div>
                <div className="listContainer" id={job.id}>
                    <span>
                        <span>Job title:- {job.job_title}</span>
                        <span>Company:- {job.company}</span>
                    </span>
                    <div>Description:- {job.description}</div>
                    <div>Location:- {job.location}</div>
                    <div>Job Type:- {job.job_type}</div>
                </div>
                <button onClick={applyfor}>Apply</button>
            </div>
        </div> : null}
    </>
}