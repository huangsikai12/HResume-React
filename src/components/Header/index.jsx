import React, {useEffect} from 'react';
import {LeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";

function Header(props) {

    const navigate = useNavigate()

    useEffect(()=>{
        // eslint-disable-next-line react/prop-types
        if (props.fix) document.getElementsByClassName("div-header")[0].classList.add("header-fix")
    },[])

    return (
        <div className="div-header" >
            <LeftOutlined className="header-back" onClick={() => {
                navigate("/")
            }}/>
            {/* eslint-disable-next-line react/prop-types */}
            <span className="header-title">{props.pageTitle}</span>
        </div>
    );
}

export default Header;
