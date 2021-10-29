import styled from 'styled-components';
import OptionItem from './OptionItem';

const data = [
    {
        key: 1,
        title: 'General'
    },
    {
        key: 2,
        title: 'LIS'
    },
    {
        key: 3,
        title: 'Folder setting'
    },
];

const OptionMenu = (props: {
    status: number,
    setStatus: any
}) => {
    const { status, setStatus } = props;
    
    return (
        <Wrapper>
            <div className="option-title">Setting</div>
            {Array.isArray(data) && data.map((data, idx) => <OptionItem key={idx} data={data} status={status} setStatus={setStatus}/>)}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #F5F7FB;
    .option {
        &-title {
            width: 210px;
            height: 56px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 16px 16px 16px 24px;
            font-size: 24px;
            font-family: Noto Sans Display;
        }
    }
`;

export default OptionMenu;