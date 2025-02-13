
import InfoPage from "../pages/InfoPage";
import MenuPage from "../pages/MenuPage";
import ExperiencePage from "../pages/ExperiencePage";
import FileDownloadPage from "../pages/FileDownloadPage";
import ProjectShow from "../pages/ProjectShowPage/index.jsx";
import ProjectShowInfoPage from "../pages/ProjectShowInfoPage/index.jsx";

export const routes = [
    {
        path:"/info",
        element:<InfoPage/>,
    },
    {
        path:"/",
        element:<MenuPage/>,
    },
    {
        path:"/exp",
        element:<ExperiencePage/>,
    },
    {
        path:"/download-resume",
        element:<FileDownloadPage/>,
    },
    {
        path:"/project",
        element:<ProjectShow/>,
        children:[
            {
                path:"info",
                element:<ProjectShowInfoPage/>,
            },
            // {
            //     path:"using-frame",
            //     element:<ProjectShowFramePage/>,
            // },
        ]
    }

]
