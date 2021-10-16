import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../../stores';
import { tableActions } from '../../../../stores/actions';
import { indexToXY } from '../../../../utils/converter.utils';
import HistoryItem from './HistoryItem';

const historyToString = (history: Table, idx: number) => {
    const { x, y } = indexToXY(history.no);

    return `${idx + 1} 번째, (${x},${y})`;
}

const HistoryList = () => {
    const dispatch = useDispatch();
    const table: Table[] = useSelector((state: RootState) => state.table.data);
    const history: Table[] = useSelector((state: RootState) => state.history.history);

    const onClick = ( index: number) => {
        console.log(`${index + 1} 번째 history 클릭.`)
        // const data = history[history.length - 1];
        // const turn = index;
        // const gameState = turn % 2;

        // const newTableData = table.
        
        // dispatch(tableActions.setTableData)
    }

    return (
        <Wrapper>{history.map((data, idx) => 
            <HistoryItem key={idx}
                         text={historyToString(data, idx)}
                         onClick={() => onClick(idx)}></HistoryItem>)}
        </Wrapper>
    );
};

const Wrapper = styled.div`

`;

export default HistoryList;