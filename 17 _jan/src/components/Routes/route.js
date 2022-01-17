import { Route, Routes } from "react-router-dom";
import {AdminHome} from '../admin/AdminHome'
import { Login } from "../login/Login";
import { UserHome } from "../User/UserHome";
import { SelectedJob } from "../User/job";
import { Dashboard } from "../admin/Dashboard";
import { AddJob } from "../admin/AddJob";


export const DirectRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/admin" element={<AdminHome />}></Route>
            <Route path="/user" element={<UserHome />}></Route>
            <Route path="/job/:id" element={<SelectedJob />}></Route>
            <Route path="/addJob" element={<AddJob />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    )
}