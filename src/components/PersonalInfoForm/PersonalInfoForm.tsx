// src/components/PersonalInfoForm.tsx

import React, { ChangeEvent } from 'react';
import { Button, ButtonContainer, FormContainer, FormGroup, FormSubtitle, FormTitle, Label, TextInput } from './styled';

// -- 타입 정의 (상위 컴포넌트에서 props로 내려받는다고 가정)
interface PersonalInfoFormProps {
  name: string;
  email: string;
  phone: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onPrev?: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  name,
  email,
  phone,
  onChange,
  onNext,
  onPrev
}) => {
  return (
    <FormContainer>
      <FormTitle>기본 정보</FormTitle>
      <FormSubtitle>연락 가능한 정보를 입력해주세요</FormSubtitle>

      <FormGroup>
        <Label>성함을 입력해주세요 *</Label>
        <TextInput
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="홍길동"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>이메일 주소를 입력해주세요 *</Label>
        <TextInput
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="prography@gmail.com"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>휴대폰 번호를 입력해주세요 *</Label>
        <TextInput
          type="tel"
          name="phone"
          value={phone}
          onChange={onChange}
          placeholder="010-1234-5678"
          required
        />
      </FormGroup>

      <ButtonContainer>
        {onPrev && <Button onClick={onPrev}>뒤로</Button>}
        <Button onClick={onNext}>다음</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default PersonalInfoForm;

