export const getUserData = () =>
    ({

        name: "黄斯恺",
        avatar: "none",
        school:"上海商学院",
        major:"物联网工程",
        degree:"本科",
        startYear:2022,
        endYear:2026,
        wishJob:[
            "前端开发工程师(Vue,React)",
            "移动端开发工程师(Android,Flutter,鸿蒙)",
            "后端开发工程师(Java,C#)",
            "全栈开发工程师"

        ],
        phone:"18816596961",
        mail:"huangsikai@88.com",
        wx:"18816596961",


    })

export const getUserInfoMenuData=()=> [

    {
        id:1,
        menuTitle:"个人介绍",
        infoName:"intro",
    },
    {
        id:2,
        menuTitle:"个人爱好",
        infoName:"hobby",
    },
    {
        id:3,
        menuTitle:"所获职业技能证书",
        infoName:"certificate",
    },
    {
        id:4,
        infoName:"work",
        menuTitle: "工作经历",

    }

]

export const getUserInfoData=()=>
[
    {
        id:1,
        infoName:"intro",
        type:"str",
        detail:"11111",
    },
    {
        id:2,
        infoName:"hobby",
        detail:"11111",
        type:"str",
    },
    {
        id:3,
        infoName:"certificate",
        type:"arr",
        detail:[
            "证书1",
            "证书2"
        ]
    },
    {
        id:4,
        infoName:"work",
        type:"href",
        detail:"点我查看工作经历",
        to:"/exp?cate=works",
    },

]


export const getMenuData = () => [
    {
        id: 1,
        btnName: "个人简介",
        route: "/info",
        icon:"UserOutlined"
    },
    {
        id: 2,
        btnName: "比赛经历",
        route: "/exp?cate=matches",
        icon: "TrophyOutlined"
    },
    {
        id: 2,
        btnName: "项目经历(作品展示)",
        route: "/project",
        icon: "GitlabOutlined"
    },
    {
        id: 3,
        btnName: "工作经历",
        route: "/exp?cate=works",
        icon: "DingtalkOutlined"

    },
    {
        id: 4,
        btnName: "下载简历",
        route: "/download-resume",
        icon: "PaperClipOutlined"
    },
]

export const getMatchesData = () => [
    {
        id: 1,
        children: "比赛1",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },
    {
        id: 2,
        children: "比赛2",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },
    {
        id: 3,
        children: "比赛3",
        label:"2022-22-22",
        medal:"一等奖",
        type:"1"
    },
    {
        id: 4,
        children: "比赛4",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },

]

export const getWorksData = () => [
    {
        id: 1,
        children: "工作1",
        company:"A公司",
        label:"2022/22/22-2022-22/22",
        type:"2",
        detail:[
            {
                key: '1',
                label: '负责A项目',
                children: "详细负责A项目",
            },
            {
                key: '2',
                label: '负责B项目',
                children: "详细负责B项目",
            },
            {
                key: '3',
                label: '负责C项目',
                children: "详细负责C项目",
            },
        ],
    },
    {
        id: 2,
        children: "工作2",
        company:"A公司",
        label:"2022-22-22",
        type:"2",
        detail:[
            {
                key: '4',
                label: '负责A1项目',
                children: "详细负责A1项目",
            },
            {
                key: '5',
                label: '负责B1项目',
                children: "详细负责B1项目",
            },
            {
                key: '6',
                label: '负责C1项目',
                children: "详细负责C1项目",
            },
        ],
    },
    {
        id: 3,
        children: "工作3",
        company:"A公司",
        label:"2022-22-22",
        type:"2"
    },
    {
        id: 4,
        children: "工作4",
        company:"A公司",
        label:"2022-22-22",
        type:"2"
    },

]

export  const getProjectInfoData = ()=>
[
    {
        key:"project1",
        label:"基于Springboot的监控平台1",
        children:[
            {
                label:"1.项目简介",
                key:"p1c1"
            },
            {
                label:"2.所用技术",
                key:"p1c2"

            },
            {
                label:"3.在线访问",
                key:"p1c3"

            },
            {
                label:"4.源码下载",
                key:"p1c4"

            },
        ]

    },
    {
        key:"project2",
        label:"基于Springboot的监控平台2",
        children:[
            {
                label:"1.项目简介",
                qqq:"1111",
                key:"p2c1",
            },
            {
                label:"2.所用技术",
                key:"p2c2"

            },
            {
                label:"3.在线访问",
                key:"p2c3"

            },
            {
                label:"4.源码下载",
                key:"p2c4"

            },
        ]

    },
]

