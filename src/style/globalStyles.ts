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

export const BoderContainer = styled.div<{$marginBottom?:string}>`
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px;
    margin-bottom:${props=>props.$marginBottom ? props.$marginBottom : 0};
`;
