import styled from 'styled-components';

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 50px;

    & input {
        background-color: transparent;
        color: #fafafa;

        width: 100%;
        padding: 25px;

        text-align: right;
        font-size: 50px;
        font-weight: normal;

        outline: none;
        border: none;
    }
`;
