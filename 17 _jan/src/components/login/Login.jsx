import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginLoading, loginSuccess, loginError } from "../../features/login/actions";
import { useDispatch, useSelector } from "react-redux";


export const Login = () => {
    const [userInp, setUserInp] = useState({
        email: "",
        password: ""
    });

    const url1 = "http://localhost:3004/admin";
    const url2="https://reqres.in/api/login";
    // const { loading, token, error } = useSelector((state) => {
    //     return {
    //         loading: state.login.loading,
    //         token: state.login.token,
    //         error: state.login.error
    //     }
    // })
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const handleInp = (e) => {
        const { name, value } = e.target;
        setUserInp({ ...userInp, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(loginLoading());
        fetch(url1)
        .then(res=>res.json())
        .then((res)=>{
            if(res.email==userInp.email && res.password==userInp.password){
                console.log("yss")
                navigate("/admin")
                dispatch(loginSuccess());
            }else{
                dispatch(loginLoading());
                fetch(url2, {
                    method: "POST",
                    body: JSON.stringify(userInp),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(res=>{
                        dispatch(loginSuccess(res.token));
                        if(res.token) navigate("/user")
                    })
                    .catch(dispatch(loginError()));
            }
        })
        .then(dispatch(loginError()))

    }

    return <>
        <h1>Enter Login Details</h1>
        <input onChange={handleInp} type="text" name="email" placeholder="enter your email" />
        <input onChange={handleInp} type="password" name="password" placeholder="enter password" />
        <button onClick={handleSubmit}>Login</button>
    </>
}