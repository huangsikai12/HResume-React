import React from 'react';
import {Collapse} from "antd";

function Works(props) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <span style={{fontWeight: "bold", fontSize: "16px"}}>{props.data.company}</span>
            <br/>
            <span style={{fontWeight: "bold", fontSize: "14px"}}>{props.data.children}</span>
            <br/>
            <div style={{width: "300px"}}>
                {/* eslint-disable-next-line react/prop-types */}
                <Collapse items={props.data.detail} bordered={false}/>
            </div>

        </div>
    );
}

export default Works;
