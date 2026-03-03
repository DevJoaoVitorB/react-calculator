import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    background-color: #1e222b;

    width: 300px;
    height: 600px;

    border-radius: 7px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const KeyboardContainer = styled.div`
    
`;

export const KeyboardRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    padding: 10px 15px;
`;
