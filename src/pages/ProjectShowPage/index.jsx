import React, {useState} from 'react';
import Header from "../../components/Header/index.jsx";

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider.js";
import {Content} from "antd/es/layout/layout.js";
import {Footer} from "antd/es/modal/shared.js";
import {Outlet, useNavigate} from "react-router";
import {getProjectInfoData} from "../../offline/data.jsx";
import ProjectShowInfoPage from "../ProjectShowInfoPage/index.jsx";

const items = getProjectInfoData()

function ProjectShow(props) {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()


    return (
        <div>
            <Layout>
                <Header pageTitle="作品展示"/>
                <Layout style={{height:"calc(100vh - 50px)"}}>
                    <Sider width="13%">
                        <div

                        >
                            <Menu
                                onSelect={(e)=>{
                                    if (e.key.includes("c1"))
                                    {
                                        navigate(`info?p=${e.keyPath[1]}`)
                                    }
                                    if (e.key.includes("c2"))
                                    {
                                        // navigate(`using-frame?p=${e.keyPath[1]}`)
                                    }
                                    console.log()
                                   }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={collapsed}
                                items={items}
                            />
                        </div>
                    </Sider>
                    <Content style={{height:"calc(100vh - 50px)",overflow:"scroll",padding:"10px"}}>

                        <ProjectShowInfoPage/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default ProjectShow;
