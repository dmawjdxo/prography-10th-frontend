// src/pages/ApplicationForm/ApplicationForm.tsx (간단 예시)
import React, { useState } from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import ApplicationInfoForm from '../../components/ApplicationInfoForm/ApplicationInfoForm';
import PrivacyConsentForm from '../../components/PrivacyConsentForm/PrivacyConsentForm';
import { Main } from '../../style/globalStyles';
import { FormContainer, Header, StepBar } from './styled';
import { BtnContainer } from '../../components/PrivacyConsentForm/styled';

const ApplicationForm: React.FC = () => {
    const [step, setStep] = useState(1);

    // 예시 state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [consent, setConsent] = useState<boolean | null>(null);

    const goNext = () => setStep((prev) => prev + 1);
    const goPrev = () => setStep((prev) => prev - 1);
    console.log(step);

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
                {step === 1 && (
                    <PrivacyConsentForm
                        consent={consent}
                        onChangeConsent={(value) => setConsent(value)}
                        onNext={goNext}
                        onPrev={goPrev}
                    />
                )}
                {step === 2 && (
                    <PersonalInfoForm
                        name={name}
                        email={email}
                        phone={phone}
                        onChange={(e) => {
                            const { name, value } = e.target;
                            if (name === 'name') setName(value);
                            if (name === 'email') setEmail(value);
                            if (name === 'phone') setPhone(value);
                        }}
                        onNext={goNext}
                    />
                )}

                {step === 3 && (
                    <ApplicationInfoForm
                        selectedRole={role}
                        onSelectRole={(selected) => setRole(selected)}
                        onNext={goNext}
                        onPrev={goPrev}
                    />
                )}
            </FormContainer>
            <BtnContainer>
                <button type="button">이전</button>
                <button type="button">다음</button>
            </BtnContainer>
        </Main>
    );
};

export default ApplicationForm;
