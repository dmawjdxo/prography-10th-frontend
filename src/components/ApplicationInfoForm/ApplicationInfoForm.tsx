// src/components/ApplicationInfoForm.tsx

import React, { ChangeEvent } from 'react';
import { Button, ButtonContainer, FormContainer, FormSubtitle, FormTitle, RadioGroup, RadioLabel } from './styled';

// -- 타입 정의
interface ApplicationInfoFormProps {
  selectedRole: string;
  onSelectRole: (role: string) => void;
  onNext: () => void;
  onPrev?: () => void;
}

const roles = ["프론트엔드", "백엔드", "디자인", "iOS", "안드로이드", "Product Owner"];

const ApplicationInfoForm: React.FC<ApplicationInfoFormProps> = ({
  selectedRole,
  onSelectRole,
  onNext,
  onPrev
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelectRole(e.target.value);
  };

  return (
    <FormContainer>
      <FormTitle>지원 정보</FormTitle>
      <FormSubtitle>지원하고자 하는 분야를 선택해주세요</FormSubtitle>

      <RadioGroup>
        {roles.map((role) => (
          <RadioLabel key={role}>
            <input
              type="radio"
              name="role"
              value={role}
              checked={selectedRole === role}
              onChange={handleChange}
            />
            {role}
          </RadioLabel>
        ))}
      </RadioGroup>

      <ButtonContainer>
        {onPrev && <Button onClick={onPrev}>뒤로</Button>}
        <Button onClick={onNext}>다음</Button>
        {/* 
          만약 2단계에서 "제출하기"를 원하면 여기서 버튼명을 변경:
          <Button onClick={onNext}>제출하기</Button>
        */}
      </ButtonContainer>
    </FormContainer>
  );
};

export default ApplicationInfoForm;
