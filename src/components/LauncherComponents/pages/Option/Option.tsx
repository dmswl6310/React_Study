import { useState } from 'react';
import styled from 'styled-components';
import OptionContent from '../../Menu/OptionMenu/OptionContent';
import OptionMenu from '../../Menu/OptionMenu/OptionMenu';

const Option = () => {
    const [status, setStatus] = useState<number>(1);

    return (
        <Wrapper>
            <OptionMenu status={status} setStatus={setStatus}/>
            <OptionContent status={status} setStatus={setStatus}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

export default Option;