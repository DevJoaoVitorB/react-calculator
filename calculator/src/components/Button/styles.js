import styled from 'styled-components';

const colorButtons = {
    number: '#33363E',
    operation: '#DC7509',
};

const sizeButtons = {
    small: '60px',
    large: '200px',
};

export const Button = styled.button`
    background-color: ${({ variant }) => colorButtons[variant]};
    color: #fafafa;

    width: ${({ size }) => sizeButtons[size]};
    padding: 20px;

    font-size: 18px;

    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    cursor: pointer;

    &: hover {
        opacity: 0.8;
    }
`;
