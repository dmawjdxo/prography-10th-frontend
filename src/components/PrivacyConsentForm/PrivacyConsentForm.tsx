// src/components/PrivacyConsentForm.tsx

import React from 'react';
import { BoderContainer, FormContainer, FormSubtitle, FormTitle, RadioLabel } from '../../style/globalStyles';
import { InfoBox } from './styled';
import { useFormStore } from '../../store/useFormStore';

const PrivacyConsentForm: React.FC = () => {
    const privacyConsent = useFormStore((state) => state.privacyConsent);
    const setPrivacyConsent = useFormStore((state) => state.setPrivacyConsent);

    // 라디오 변경 시 privacyConsent를 boolean 값으로 업데이트
    const handlePrivacyConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrivacyConsent(e.target.value === 'agree');
    };

    return (
        <FormContainer>
            <FormTitle>개인정보 수집 동의</FormTitle>
            <FormSubtitle>프로그래피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다</FormSubtitle>
            <BoderContainer>
                <InfoBox>
                    수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내 <br />
                    수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보 <br />
                    보유 및 이용 기간: 리크루팅 과정 종료일(3월 7일) 이후 파기
                    <span>개인정보 수집 동의 여부를 체크해주세요.</span>
                </InfoBox>

                {/* '동의합니다' 라디오 버튼 */}
                <BoderContainer $marginBottom="20px">
                    <RadioLabel>
                        <input
                            type="radio"
                            name="privacyConsent"
                            value="agree"
                            checked={privacyConsent === true}
                            onChange={handlePrivacyConsentChange}
                        />
                        개인정보 수집 여부에 동의합니다
                    </RadioLabel>
                </BoderContainer>

                {/* '동의하지 않습니다' 라디오 버튼 */}
                <BoderContainer>
                    <RadioLabel>
                        <input
                            type="radio"
                            name="privacyConsent"
                            value="refuse"
                            checked={privacyConsent === false}
                            onChange={handlePrivacyConsentChange}
                        />
                        개인정보 수집 여부에 동의하지 않습니다
                    </RadioLabel>
                </BoderContainer>
            </BoderContainer>
        </FormContainer>
    );
};

export default PrivacyConsentForm;
