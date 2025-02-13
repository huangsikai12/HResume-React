import React from 'react';
import {Collapse} from "antd";

function Works(props) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {props.data.company}----{props.data.children}
            <br/>
            <div style={{width:"300px"}}>
                {/* eslint-disable-next-line react/prop-types */}
                <Collapse items={props.data.detail} bordered={false}/>
            </div>

        </div>
    );
}

export default Works;
