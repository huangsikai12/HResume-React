import './App.css'
import {routes} from "./routes/config.jsx";
import {useRoutes} from "react-router";


const App = () => {

    return (
        <>
            {useRoutes(routes)}
        </>
    )
};

export default App
