import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../../stores';
import { hisotryActions, tableActions } from '../../../../stores/actions';
import { indexToXY } from '../../../../utils/converter.utils';
import HistoryItem from './HistoryItem';

const historyToString = (table: Table, idx: number) => {
    const { x, y } = indexToXY(table.no);

    return `${idx + 1} 번째, (${x},${y}), ${table.state === 0 ? 'O' : 'X'}`;
}

const HistoryList = () => {
    const dispatch = useDispatch();
    const history: HistoryData[] = useSelector((state: RootState) => state.history.history);

    const onClick = ( index: number) => {
        console.log(`${index + 1} 번째 history 클릭.`);

        const newHistory = history.filter((data, idx) => idx <= index);
        dispatch(hisotryActions.setHistory(newHistory));
        dispatch(tableActions.setHistory(history[index]));
    };

    return (
        <Wrapper>{history.map((historyData, idx) => 
            <HistoryItem key={idx}
                         text={historyToString(historyData.data[historyData.clickedIdx], idx)}
                         onClick={() => onClick(idx)}></HistoryItem>)}
        </Wrapper>
    );
};

const Wrapper = styled.div`

`;

export default HistoryList;