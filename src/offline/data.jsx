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

    },
    {
        id:5,
        infoName:"match",
        menuTitle: "比赛经历",

    },

]

export const getUserInfoData=()=>
[
    {
        id:1,
        infoName:"intro",
        type:"str",
        detail:"一名<br/>具备丰富编程教学和软件开发经验的专业人士。我在JAVA、Python等编程语言方面有着深厚的技术积累，并且熟悉安卓和鸿蒙系统的开发。在教育领域，我有丰富的社团搭建和编程教学经验，能够有效地与学生和团队成员沟通协作。\n" +
            "\n" +
            "我的教育背景包括在上海商学院完成物联网工程专业的本科学习。在校期间，我积极参与社团活动和技术开发项目，担任过iOS俱乐部社员和技术开发人员，负责了多个项目的前端和后端开发工作。我还曾作为创始人兼社长，创建并运营了一个面向竞赛的编程语言（C#、JAVA）技能培训社团，成功培养了多名获奖学员，并获得了上海市五四期间创新型社团表彰。\n" +
            "\n" +
            "在工作经历方面，我曾在QD机器人公司担任兼职编程教师，教授学员Python编程、Arduino Uno单片机、ESP32单片机以及Scratch积木编程，并指导学员参加各类科技创新比赛。此外，我还曾在上海市实验学校担任人工智能社团课的外聘老师，教授学生人工智能基础知识和机器学习等内容。\n" +
            "\n" +
            "最近，我在百姓网股份有限公司实习，担任全栈开发工程师，负责百姓网安卓APP的开发与维护，以及百姓网官网的bug修复等工作。这些经历不仅提升了我的技术能力，也锻炼了我的项目管理和团队协作能力。\n" +
            "\n" +
            "我持有微软认证-AI900证书，并获得过多项奖项，包括阿里巴巴天池未来汽车智能场景挑战赛全球二等奖和中国东盟教育交流周物联网国际邀请赛二等奖。我对技术创新充满热情，致力于将最新的技术应用于实际项目中，帮助更多人提升技能，实现自我价值。",
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
            "微软AI-900认证证书",
            "华为云物联网开发者证书",
            "计算机程序设计员高级工（三级）",
        ]
    },
    {
        id:4,
        infoName:"work",
        type:"href",
        detail:"点我查看工作经历",
        to:"/exp?cate=works",
    },
    {
        id:5,
        infoName:"match",
        type:"href",
        detail:"点我查看比赛经历",
        to:"/exp?cate=mathches",
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
        children: "第三届全国技能大赛上海市选拔赛商务软件解决方案项目（全栈开发）",
        label:"2025-12-22",
        news:"https://mp.weixin.qq.com/s?__biz=MjM5NzA0NTcyNA==&mid=2650590207&idx=1&sn=5a8f8574b075050fbfb26fab5f3141d2&chksm=bff9f3167f4e2dc2fe7ba1ad5b4cb2a25421fbfd5965a960f8e7df91abe4a57d60d5b7466231&mpshare=1&scene=1&srcid=02263lLOwP4kYVPlrb6iHhHQ&sharer_shareinfo=7a5c1c34d298af2a1d0ee4e906721bbe&sharer_shareinfo_first=7a5c1c34d298af2a1d0ee4e906721bbe#rd",
        medal:"冠军/一等奖/金牌",
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
    {
        id: 1,
        children: "比赛1",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },
    {
        id: 1,
        children: "比赛1",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },
    {
        id: 1,
        children: "比赛1",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },
    {
        id: 1,
        children: "比赛1",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },
    {
        id: 1,
        children: "比赛1",
        label:"2022-22-22",
        news:"http://www.baidu.com",
        medal:"一等奖",
        type:"1"
    },

]

export const getWorksData = () => [
    {
        id: 1,
        children: "兼职编程教学老师",
        company:"QD机器人",
        label:"2023.08-2024.04",
        type:"2",
        detail:[
            {
                key: '1',
                label: '教授Python 编程',
                children:"每周制定课程授课计划，与学员及家长保持有效沟通，并且在每节课课后进行教学的反馈",

            },
            {
                key: '2',
                label: '教授Arduino Uno ,ESP32 单片机',
                children: "指导学员参加各种上海市青少年科技创新类比赛辅导学员撰写论文，实物实现等",
            },
            {
                key: '3',
                label: '教授Scratch 积木编程',
                children: "带领学员参加机器人四级、五级考试，考级通过率维持在 90%",
            },
        ],
    },
    {
        id: 2,
        children: "社团外聘老师",
        company:"上海市实验学校人工智能社团学期课",
        label:"2023.09-2023.12",
        type:"2",
        detail:[
            {
                key: '4',
                label: '教授人工智能基础',
                children: "包括机器学习，线性回归，KNN 模型等",
            },
            {
                key: '5',
                label: '引导学生搭建商汤人工智能机器人',
                children: "指导学生对机器人进行编程和操控，并与学校负责老师进行课后教学沟通",
            },
        ],
    },
    {
        id: 3,
        children: "兼职编程教学老师",
        company:"软科启点编程中心",
        label:"2024.04-2024.10",
        type:"2",
        detail:[
            {
                key: '6',
                label: '教授Python编程,数据结构和算法基础',
                children: "带领学员参加Python 二级，三级考级，学员全部通过",
            },
        ],
    },
    {
        id: 4,
        children: "实习全栈开发工程师",
        company:"百姓网股份有限公司",
        label:"2024.06-2024.10",
        type:"2",
        detail:[
            {
                key: '7',
                label: '负责网页端的维护和更新(PHP)',
                children: "",
            },
            {
                key: '8',
                label: '负责安卓端的维护和更新(JAVA,Kotlin)',
                children: "",
            },
            {
                key: '9',
                label: '负责服务端短信业务的改造与维护(JAVA)',
                children: "",
            },
            {
                key: '10',
                label: '负责鸿蒙端APP的开发与上线工作(Arkts)',
                children: "",
            },

        ],
    },

]

export  const getProjectInfoData = ()=>
[
    {
        key:"project1",
        label:"基于Flutter的注意力缺陷诊断APP",
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
        label:"基于安卓自定义View的验证码UI框架",
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
    {
        key:"project3",
        label:"基于Springboot+Vue的社团管理系统",
        children:[
            {
                label:"1.项目简介",
                qqq:"1111",
                key:"p3c1",
            },
            {
                label:"2.所用技术",
                key:"p3c2"

            },
            {
                label:"3.在线访问",
                key:"p3c3"

            },
            {
                label:"4.源码下载",
                key:"p3c4"

            },
        ]

    },
    {
        key:"project4",
        label:"自研抢课脚本",
        children:[
            {
                label:"1.项目简介",
                qqq:"1111",
                key:"p3c1",
            },
            {
                label:"2.所用技术",
                key:"p3c2"

            },
            {
                label:"3.在线访问",
                key:"p3c3"

            },
            {
                label:"4.源码下载",
                key:"p3c4"

            },
        ]
    },

]

