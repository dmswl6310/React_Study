import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MainContainer } from "../../../../../MainContainer";
import { RootState } from '../../../../../stores';
import { optionActions } from '../../../../../stores/actions';
import { RadioButton } from '../../../Element/RadioButton';

const gripper = {
    name: 'gripper',
    display: 'block',
    list: [
        {
            label: 'CORE-gripper',
            value: '1'
        },
        {
            label: 'iSwap',
            value: '2'
        },
    ]
}

const sampleUnload = {
    name: 'sampleUnload',
    display: 'block',
    list: [
        {
            label: 'Dispensing 후 자동으로 샘플 내림',
            value: '1'
        },
        {
            label: '구동 중에 샘플 내리지 않음',
            value: '2'
        },
    ]
}

const General = () => {
    return (
        <div style={{margin: '25px'}}>
            <MainContainer header={<Header>General</Header>} body={<Contents/>} footer={<div></div>}/>
        </div>
    );
};

const Contents = () => {
    const initGripperState: string = useSelector((state: RootState) => state.option.gripper); 
    const initSampleUnloadState: string = useSelector((state: RootState) => state.option.sampleUnload);

    const dispatch = useDispatch();
    
    const [gripperState, setGripperState] = useState<string>(initGripperState);
    const [sampleUnloadState, setSampleUnloadState] = useState<string>(initSampleUnloadState);

    useEffect(() => {
        dispatch(optionActions.setGeneralSetting({
            gripper: gripperState,
            sampleUnload: sampleUnloadState
        }));
    }, [gripperState, sampleUnloadState, dispatch])

    return (
        <div>
            <Content>
                <Title>Gripper</Title>
                {gripper.list.map((item: {label:string; value:string;}) => (
                    <RadioButton
                        key={item.value}
                        id={gripper.name + item.value}
                        label={item.label}
                        name={gripper.name}
                        display={gripper.display}
                        state={gripperState}
                        setState={setGripperState}
                        value={item.value}
                    />
                ))}
            </Content>
            <Content>
                <Title>Sample Unload</Title>
                {sampleUnload.list.map((item: {label:string; value:string;}) => (
                    <RadioButton
                        key={item.value}
                        id={sampleUnload.name + item.value}
                        label={item.label}
                        name={sampleUnload.name}
                        display={sampleUnload.display}
                        state={sampleUnloadState}
                        setState={setSampleUnloadState}
                        value={item.value}
                    />
                ))}
            </Content>
        </div>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 320px;
    height: 130px;
    left: 242px;
    top: 85px;
    border: 1px solid #D4D8E1;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 22px;
`;

const Title = styled.div`
    font-family: Noto Sans Display;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`;

const Header = styled.div`
    font-family: Noto Sans Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
`;

export default General;