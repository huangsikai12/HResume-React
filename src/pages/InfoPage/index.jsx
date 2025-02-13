import {Avatar, Divider, Layout} from 'antd';
import Sider from "antd/es/layout/Sider.js";
import {Content} from "antd/es/layout/layout.js";
import Header from "../../components/Header/index.jsx";
import  {MailOutlined, PhoneOutlined, UserOutlined, WechatOutlined} from "@ant-design/icons";
import {getUserData,getUserInfoMenuData,getUserInfoData} from "../../offline/data.jsx";
import './index.css'
import {useNavigate} from "react-router";



function InfoPage() {

    const userData = getUserData()
    const infoMenuData = getUserInfoMenuData()
    const userInfoData = getUserInfoData()
    const navigate = useNavigate()
    const infoHrefClick = (to)=>
    {
        return ()=>
        {
            navigate(to)

        }
    }

    return (
        <div>
                <Header pageTitle="个人简介"/>
                <Layout style={{height:"calc(100vh - 50px)"}}>
                    <Sider width="15%" style={{background:"none"}}>
                        <div className="info-left">
                            <Avatar size={100} icon={<UserOutlined spin/>}/>
                            <h3>{userData.name}</h3>
                            <h3>{userData.school} {userData.major}</h3>
                            <h3>{userData.degree}</h3>
                            <h4>{userData.startYear}年~{userData.endYear}年</h4>
                            <div style={{width:"100%",paddingLeft:"20px"}}>
                                <h3 style={{fontWeight: "bold"}}>意向工作岗位：</h3>
                                {userData.wishJob.map((job) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <h4 style={{paddingLeft:"10px"}}>{job}</h4>
                                    )
                                })}
                            </div>
                            <div style={{width:"100%",paddingLeft:"20px"}}>
                                <h3 style={{fontWeight: "bold"}}>联系方式：</h3>
                                <h4 style={{paddingLeft: "10px"}}><PhoneOutlined/>  {userData.phone}</h4>
                                <h4 style={{paddingLeft: "10px"}}><MailOutlined/>  {userData.mail}</h4>
                                <h4 style={{paddingLeft: "10px"}}><WechatOutlined />  {userData.wx}</h4>
                            </div>
                        </div>
                    </Sider>
                    <Content>
                        <div className="info-right">
                            {infoMenuData.map((menu)=>{
                                let infoData=userInfoData.find(info=>
                                    info.infoName === menu.infoName
                                )
                                console.log(infoData)
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <div>
                                        <Divider
                                            style={{
                                                borderColor: 'orange',
                                                fontSize:"14px"
                                            }}
                                        >
                                            {menu.menuTitle}
                                        </Divider>
                                        {infoData.type === "str" &&
                                            <p>{infoData.detail}</p>
                                        }
                                        {infoData.type === "arr" &&
                                            infoData.detail.map((detailData)=>{
                                                return(
                                                    <p style={{display:"inline"}}>{detailData}   </p>
                                                )
                                            })
                                        }
                                        {infoData.type === "href" &&
                                            <button onClick={infoHrefClick(infoData.to)}>{infoData.detail}</button>

                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </Content>

                </Layout>


        </div>
    );
}

export default InfoPage;
