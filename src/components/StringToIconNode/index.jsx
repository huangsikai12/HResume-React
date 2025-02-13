import React from 'react';
import {
    DingtalkOutlined,
    GitlabOutlined,
    PaperClipOutlined,
    PoweroffOutlined,
    TrophyOutlined,
    UserOutlined
} from '@ant-design/icons';

function StringToIconNode(props) {
    return (
        <div>
            {props.iconName === "UserOutlined" && <UserOutlined />}
            {props.iconName === "TrophyOutlined" && <TrophyOutlined />}
            {props.iconName === "PaperClipOutlined" &&<PaperClipOutlined />}
            {props.iconName === "DingtalkOutlined" &&<DingtalkOutlined />}
            {props.iconName === "GitlabOutlined" &&<GitlabOutlined />}
        </div>
    )
}

export default StringToIconNode;
