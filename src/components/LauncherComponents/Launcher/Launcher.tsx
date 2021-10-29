import { MainContainer } from "../../../MainContainer";
import { Home } from "../Home";

const Launcher = () => {
    return (
        <MainContainer header={<LauncherHeader/>} body={<Home/>} footer={<LauncherFooter/>}/>
    );
}

const LauncherHeader = () => { return (<></>); }

const LauncherFooter = () => { return (<></>); }

export default Launcher;