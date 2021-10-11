import Board from "../Organism/Board";
import Normal from "../Template/Normal";

const TicTacToe = () => {
    return (
        <>
            <Normal header={<Header />} body={<Body />} footer={<Footer />} />
        </>
    )
}


const Header = () => {
    return (
        <>
            <h1>React Tic Tac Toe - With Hooks</h1>
        </>
    )
}

const Body = () => {
    return (
        <>
            <Board />
        </>
    )
}

const Footer = () => {
    return (
        <>
            <p>Footer</p>
        </>
    )
}
export default TicTacToe;