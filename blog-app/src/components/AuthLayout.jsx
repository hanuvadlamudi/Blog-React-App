import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protecetd({children,authentication = true}){
    const [loader,setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.authStatus)

    useEffect(() =>{
        if(authentication && authStatus !== authentication){
            navigate("/login");
        }else if(!authentication && authStatus !== authentication){
            navigate("/");
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

    return(
        loader?<h1>.....Loading.....</h1> : {children}
    )
}