import styled from 'styled-components';

export const SucessContainer = styled.header`
    width: 90%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 60px;
    & > p:first-child {
        margin: 20px 0;
    }
`;
export const Message = styled.p`
    margin-bottom: 20px;
    &.important {
        font-size: 24px;
        font-weight: bold;
    }
`;

export const Button = styled.a`
    display: inline-block;
    padding: 20px 40px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
`;
