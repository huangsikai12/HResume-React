import {useEffect} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {options} from "../../particles/config.js";
import {PoweroffOutlined, UserOutlined} from '@ant-design/icons';
import './index.css'
import {Button,Avatar} from "antd";
import {useNavigate} from "react-router";
import {getUserData,getMenuData} from "../../offline/data.jsx";
import StringToIconNode from "../../components/StringToIconNode/index.jsx";



const MenuPage = () => {

    const navigate = useNavigate()
    const userData = getUserData()
    const menuData  = getMenuData()

    useEffect(() => {

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {

        });
    }, []);

    const  changeRoute = (index)=>
    {
        console.log(menuData[index])
        navigate(menuData[index].route)
    }

    return (
        <>
            <Particles
                id="tsparticles"
                options={options}
            />
            <div className="parent-container">
                <div className="centered-div">
                    <Avatar className="av" size={128} icon={<UserOutlined />} />
                    <h3>{userData.name}</h3>
                    {menuData.map((btnNode,index)=>{
                       return(<Button
                           color="volcano"
                           variant="filled"
                           key={index}
                           onClick={() => {
                               changeRoute(index)
                           }}
                           className="menu-btn" type="primary" block>
                           <StringToIconNode iconName={btnNode.icon}/>
                           {btnNode.btnName}
                       </Button>)
                    })}
                </div>

            </div>
        </>


    )

};

export default MenuPage
