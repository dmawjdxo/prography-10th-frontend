import React, { useState } from 'react';
import { Button, Container, Input, Select, Title } from './styled';
import { Form } from 'react-router-dom';

const ApplicationForm: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [part, setPart] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({ name, email, phone, part });
    };

    return (
        <Container>
            <Title>Programhy 10기 지원서</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="성함을 입력해주세요"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="이메일 주소를 입력해주세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="tel"
                    placeholder="휴대폰 번호를 입력해주세요"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <Select value={part} onChange={(e) => setPart(e.target.value)} required>
                    <option value="">지원 분야를 선택해주세요</option>
                    <option value="프론트엔드">프론트엔드</option>
                    <option value="백엔드">백엔드</option>
                    <option value="디자인">디자인</option>
                    <option value="iOS">iOS</option>
                    <option value="안드로이드">안드로이드</option>
                    <option value="Product Owner">Product Owner</option>
                </Select>
                <Button type="submit">제출하기</Button>
            </Form>
        </Container>
    );
};

export default ApplicationForm;
