// src/components/PrivacyConsentForm.tsx

import React, { ChangeEvent } from 'react';
import { Button, ButtonContainer, FormContainer, FormSubtitle, FormTitle, InfoBox, RadioGroup, RadioLabel } from './styled';

// -- 타입 정의
interface PrivacyConsentFormProps {
  consent: boolean | null; // true=동의, false=비동의, null=미선택
  onChangeConsent: (value: boolean) => void;
  onNext: () => void;
  onPrev?: () => void;
}

const PrivacyConsentForm: React.FC<PrivacyConsentFormProps> = ({
  consent,
  onChangeConsent,
  onNext,
  onPrev,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeConsent(e.target.value === "true");
  };

  return (
    <FormContainer>
      <FormTitle>개인정보 수집 동의</FormTitle>
      <FormSubtitle>
        프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다
      </FormSubtitle>

      <InfoBox>
        수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내  
        수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보  
        보유 및 이용 기간: 리크루팅 과정 종료일(3월 7일) 이후 파기
      </InfoBox>

      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            name="privacyConsent"
            value="true"
            checked={consent === true}
            onChange={handleChange}
          />
          개인정보 수집 여부에 동의합니다
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="privacyConsent"
            value="false"
            checked={consent === false}
            onChange={handleChange}
          />
          개인정보 수집 여부에 동의하지 않습니다
        </RadioLabel>
      </RadioGroup>

      <ButtonContainer>
        {onPrev && <Button onClick={onPrev}>뒤로</Button>}
        <Button onClick={onNext}>다음</Button>
        {/* 
          마지막 스텝에서 제출하기 버튼을 원하면 이렇게 변경:
          <Button onClick={onNext}>제출하기</Button>
        */}
      </ButtonContainer>
    </FormContainer>
  );
};

export default PrivacyConsentForm;
