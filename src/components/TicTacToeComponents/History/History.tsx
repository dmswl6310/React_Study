import styled from 'styled-components';

const History = () => {
    const value = 'this is History.';
    
    return (
        <Wrapper>
            <textarea
              contentEditable={false}
              value={value}
              readOnly
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .textArea {
        width: 200px;
        height: 200px;
    }
`;

export default History;