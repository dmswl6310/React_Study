import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { hisotryActions, tableActions } from "../../../stores/actions";
import { HistoryList } from "./HistoryList";

const Footer = () => {
    const gameState = useSelector((state: RootState) => state.table?.gameState);
    const turn = useSelector((state: RootState) => state.table?.turn);
    const dispatch = useDispatch();

    const reset = () => {
        dispatch(tableActions.initialize());
        dispatch(hisotryActions.initialize());
    }

    const result = () => {
        if (gameState === 2) {
            return (
                turn === 9 ? 'Draw!' : ''
            );
        } else {
            return (
                `Player ${gameState + 1} Win!`
            );
        }
    }

    return (
        <div>
            {<button type="button" onClick={reset}>Reset</button>}
            <h1>{result()}</h1>

            <HistoryList />
        </div>
    );
}

export default Footer;