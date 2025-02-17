import styled from 'styled-components';
import { center } from '../../style/globalStyles';

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
export const StepBar = styled.div<{ $step: number }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100px;
    background-color: white;
    margin: 40px 0;
    box-sizing: border-box;
    padding: 0 30px;
    & > span {
        position: relative;
        width: calc(50% - 80px);
        height: 5px;
        background-color: #eee;
        &::after {
            content: '';
            position: absolute;
            width: 0%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: var(--main-blue1);
            transition: width 0.5s;
        }
        &:nth-child(2)::after {
            width: ${(props) => (props.$step >= 2 ? '100%' : '0')};
        }
        &:nth-child(4)::after {
            width: ${(props) => (props.$step >= 3 ? '100%' : '0')};
        }
    }
    & > p {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > b {
            ${center};
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #eee;
            font-size: 20px;
            transition: all 0.5s;
        }
        &:nth-child(1) > b {
            color: ${(props) => (props.$step >= 1 ? '#fff' : '#000')};
            background: ${(props) => (props.$step >= 1 ? 'var(--main-blue1)' : '#eee')};
        }
        &:nth-child(3) > b {
            color: ${(props) => (props.$step >= 2 ? '#fff' : '#000')};
            background: ${(props) => (props.$step >= 2 ? 'var(--main-blue1)' : '#eee')};
        }

        &:nth-child(5) > b {
            color: ${(props) => (props.$step >= 3 ? '#fff' : '#000')};
            background: ${(props) => (props.$step >= 3 ? 'var(--main-blue1)' : '#eee')};
        }
    }
`;

export const FormContainer = styled.form`
    width: 90%;
    padding: 40px 40px 20px;
    background-color: #fff;
    box-sizing:border-box;
`;
