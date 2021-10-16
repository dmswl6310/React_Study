import MainContainer from "../../../MainContainer/MainContainer";
import Footer from "../Footer/Footer";
import { Table } from "../Table";

const TicTacToe = () => {
    return (
        <MainContainer header={<Header/>} body={<Table/>} footer={<Footer/>}/>
    );
};

const Header = () => {
    return (
        <div>
            <h1>React Tic Tac Toe - With Hooks</h1>
        </div>
    );
}

export default TicTacToe;