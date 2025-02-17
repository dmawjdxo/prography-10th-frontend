import styled from 'styled-components';

// -- styled components
export const FormContainer = styled.div`
    width: 100%;
`;

export const FormTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--main-blue1);
`;

export const FormSubtitle = styled.p`
    font-size: 16px;
    margin-bottom: 24px;
    color: #666;
`;

export const InfoBox = styled.div`
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 25px;
    span {
        display: block;
        margin-top: 15px;
        &::after {
            content: '*';
            display: inline-block;
            margin-left: 5px;
            color: red;
        }
    }
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    & > input {
        position: relative;
        top: -2px;
        margin-right: 8px;
        width: 25px;
        height: 25px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const Button = styled.button`
    padding: 10px 16px;
    font-size: 16px;
    cursor: pointer;
`;

export const BtnContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    width: 90%;
    background-color: #fff;
    box-sizing: border-box;
    margin: 40px 0 80px;
    & > button {
        padding: 15px 25px;
        background-color: #eee;
        border-radius: 10px;
        &:last-child {
            background-color: var(--main-blue1);
            color: #fff;
        }
    }
`;
