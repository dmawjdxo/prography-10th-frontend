import React from 'react';
import { Button, Message, SucessContainer } from './styled';
import { Header, Main } from '../../style/globalStyles';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircle } from 'react-icons/io5';

const ApplicationComplete: React.FC = () => {
    const navigete = useNavigate();

    return (
        <Main>
            <Header>Programhy 10기 지원서</Header>
            <SucessContainer>
                <p>
                    <IoCheckmarkCircle color="#007bff" size={80} />
                </p>
                <Message className='important'>지원이 완료되었습니다!</Message>
                <Message>프로그라피 10기 지원해주셔서 감사합니다.</Message>
                <Message>서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.</Message>
                <Button onClick={() => navigete('/')}>홈으로 들어가기</Button>
            </SucessContainer>
        </Main>
    );
};

export default ApplicationComplete;
