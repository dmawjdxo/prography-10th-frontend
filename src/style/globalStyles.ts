import styled, { css } from 'styled-components';

export const ellipsisStyle = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.main`
    background-color: #eee;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Header = styled.header`
    width: 90%;
    height: 150px;
    background-color: white;
    line-height: 150px;
    font-size: 40px;
    font-weight: bold;
    margin-top: 60px;
    text-align: center;
`;
export const FormContainer = styled.div`
    width: 100%;
`;

export const BoderContainer = styled.div<{ $marginBottom?: string }>`
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: ${(props) => (props.$marginBottom ? props.$marginBottom : 0)};
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
