import React, {useEffect} from 'react';
import {Button} from "antd";

function Matches(props) {



    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {props.data.children}
            <br/>
            {/* eslint-disable-next-line react/prop-types */}
            {props.data.medal}
            <br/>
            {/* eslint-disable-next-line react/prop-types */}
            {props.data.news !== undefined &&
                <Button style={{margin:"10px"}} color="orange" variant="solid"  onClick={()=>{
                    // eslint-disable-next-line react/prop-types
                    window.location.href = props.data.news
                }}>
                    查看新闻报道
                </Button>
            }
        </div>
    );
}

export default Matches;
