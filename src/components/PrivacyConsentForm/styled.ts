import styled from 'styled-components';

// -- styled components




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