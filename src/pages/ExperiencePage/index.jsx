import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router";
import {Avatar, Button, Collapse, Divider, Layout, Radio, Timeline} from 'antd';
import {getMatchesData, getWorksData} from "../../offline/data.jsx";
import {LeftOutlined, UserOutlined} from "@ant-design/icons";
import Matches from "../../components/Matches/index.jsx";
import Works from "../../components/Works/index.jsx";
import Header from "../../components/Header/index.jsx";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {options} from "../../particles/config.js";
import {loadSlim} from "@tsparticles/slim";
import {Content} from "antd/es/layout/layout.js";

function ExperiencePage() {

    const [search] = useSearchParams()
    const navigate = useNavigate()
    const [pageTitle, setPageTitle] = useState("比赛经历")
    const [timeLineData, setTimeLineData] = useState([])
    useEffect(() => {
        if (search.size === 0) navigate("/");
        if (search.get("cate") !== "matches") setPageTitle("工作经历")
        setTimeLineData(search.get("cate") === "matches" ? getMatchesData() : getWorksData)
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {

        });

    }, [])


    return (
        <div>
            <Particles
                id="tsparticles"
                options={options}
            />


            <Header pageTitle={pageTitle} fix/>
            <div className="parent-container">
                <div className="centered-div">
                    <br/>
                    <Timeline
                        style={{width: "100%"}}
                        mode="right"
                        items={timeLineData.map((data) => {
                            return {
                                label: data.label,
                                children: <div
                                    style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                                    {
                                        data.type === "1"
                                        && <Matches data={data}></Matches>
                                    }
                                    {
                                        data.type === "2"
                                        && <Works data={data}></Works>
                                    }
                                </div>
                            }
                        })}
                    />
                </div>

            </div>


        </div>
    );
}

export default ExperiencePage;
