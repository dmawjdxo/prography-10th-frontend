// src/components/PersonalInfoForm.tsx

import React from 'react';
import { Label, TextInput } from './styled';
import { BoderContainer, FormContainer, FormSubtitle, FormTitle } from '../../style/globalStyles';
import { useFormStore } from '../../store/useFormStore';

const PersonalInfoForm: React.FC = () => {
  // 필요한 상태와 업데이트 함수를 개별적으로 선택합니다.
  const name = useFormStore((state) => state.name);
  const setName = useFormStore((state) => state.setName);
  const email = useFormStore((state) => state.email);
  const setEmail = useFormStore((state) => state.setEmail);
  const phone = useFormStore((state) => state.phone);
  const setPhone = useFormStore((state) => state.setPhone);

  return (
    <FormContainer>
      <FormTitle>기본 정보</FormTitle>
      <FormSubtitle>연락 가능한 정보를 입력해주세요</FormSubtitle>

      <BoderContainer $marginBottom={'40px'}>
        <Label>
          성함을 입력해주세요 <b>*</b>
        </Label>
        <TextInput
          type="text"
          name="name"
          placeholder="홍길동"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </BoderContainer>

      <BoderContainer $marginBottom={'40px'}>
        <Label>
          이메일 주소를 입력해주세요 <b>*</b>
        </Label>
        <TextInput
          type="email"
          name="email"
          placeholder="예시: prography@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </BoderContainer>

      <BoderContainer>
        <Label>
          휴대폰 번호를 입력해주세요 <b>*</b>
        </Label>
        <TextInput
          type="tel"
          name="phone"
          placeholder="예시: 010-1234-5678"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </BoderContainer>
    </FormContainer>
  );
};

export default PersonalInfoForm;
