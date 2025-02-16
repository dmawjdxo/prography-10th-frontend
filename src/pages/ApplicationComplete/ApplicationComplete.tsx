import React from 'react';
import { Button, Container, Message, Title } from './styled';


const ApplicationComplete: React.FC = () => {
  return (
    <Container>
      <Title>Programhy 10기 지원서</Title>
      <Message>지원이 완료되었습니다!</Message>
      <Message>프로그라피 10기 지원해주셔서 감사합니다.</Message>
      <Message>서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.</Message>
      <Button href="/">홈으로 들어가기</Button>
    </Container>
  );
};

export default ApplicationComplete;