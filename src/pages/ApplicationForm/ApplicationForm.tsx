// src/pages/ApplicationForm/ApplicationForm.tsx (간단 예시)
import React, { useState } from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import ApplicationInfoForm from '../../components/ApplicationInfoForm/ApplicationInfoForm';
import PrivacyConsentForm from '../../components/PrivacyConsentForm/PrivacyConsentForm';

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

  return (
    <div style={{ padding: '20px' }}>
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

      {step === 1 && (
        <PrivacyConsentForm
          consent={consent}
          onChangeConsent={(value) => setConsent(value)}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </div>
  );
};

export default ApplicationForm;
