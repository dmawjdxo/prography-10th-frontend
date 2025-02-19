// src/pages/ApplicationForm/ApplicationForm.tsx (간단 예시)
import React, { useState } from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import ApplicationInfoForm from '../../components/ApplicationInfoForm/ApplicationInfoForm';
import PrivacyConsentForm from '../../components/PrivacyConsentForm/PrivacyConsentForm';
import { Header, Main } from '../../style/globalStyles';
import { BtnContainer, FormContainer, StepBar } from './styled';
import { useFormStore } from '../../store/useFormStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ApplicationForm: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const { privacyConsent, name, email, phone, appliedPositions } = useFormStore((state) => state);
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 전화번호 유효성 검사 정규식 (예: 010-1234-5678)
    const phoneRegex = /^010-\d{4}-\d{4}$/;

    const handleNext = async () => {
        if (step === 1) {
            if (privacyConsent) setStep(2);
            else return alert('개인정보 수집을 동의 해주세요.');
        } else if (step === 2) {
            if (name === '') return alert('이름을 입력해주세요');
            else if (!emailRegex.test(email)) return alert('이메일 형식이 맞지 않습니다.');
            else if (!phoneRegex.test(phone)) return alert('전화번호 형식이 맞지 않습니다.');
            else setStep(3);
        } else if (step === 3) {
            if (appliedPositions) {
                const formData = {
                    privacyConsent,
                    name,
                    email,
                    phone,
                    appliedPositions,
                };
                console.log(formData);

                // try {
                //     const response = await axios.post(
                //         'https://api.example.com/applications',
                //         formData,
                //         {
                //             headers: {
                //                 'Content-Type': 'application/json',
                //             },
                //         }
                //     );
                //     // API 요청 성공 시 제출 완료 페이지로 이동
                //     response && navigate('/complete');
                // } catch (error) {
                //     console.error('Submission error:', error);
                //     alert('지원서 제출 중 오류가 발생했습니다.');
                // }
                navigate('/complete');
            } else {
                alert('지원 분야를 선택해주세요.');
            }
        }
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };
    return (
        <Main>
            <Header>Prography 10기 지원서</Header>
            <StepBar $step={step}>
                <p>
                    <b>1</b>
                </p>
                <span></span>
                <p>
                    <b>2</b>
                </p>
                <span></span>
                <p>
                    <b>3</b>
                </p>
            </StepBar>
            <FormContainer>
                {step === 1 && <PrivacyConsentForm />}
                {step === 2 && <PersonalInfoForm />}
                {step === 3 && <ApplicationInfoForm />}
            </FormContainer>
            <BtnContainer>
                <button type="button" onClick={handlePrev}>
                    이전
                </button>
                <button type="button" onClick={handleNext}>
                    {step === 3 ? '제출하기' : '다음'}
                </button>
            </BtnContainer>
        </Main>
    );
};

export default ApplicationForm;
