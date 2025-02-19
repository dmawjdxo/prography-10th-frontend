// src/components/ApplicationInfoForm.tsx

import React from 'react';
import { BoderContainer, FormContainer, FormSubtitle, FormTitle, RadioLabel } from '../../style/globalStyles';
import { useFormStore } from '../../store/useFormStore';

const roles = ['프론트엔드', '백엔드', '디자인', 'iOS', '안드로이드', 'Product Owner'];

const ApplicationInfoForm: React.FC = () => {
    // zustand 스토어에서 appliedPositions와 업데이트 함수를 가져옵니다.
    const appliedPositions = useFormStore((state) => state.appliedPositions);
    const setAppliedPositions = useFormStore((state) => state.setAppliedPositions);

    // 라디오 버튼 선택 시 적용 분야 업데이트
    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAppliedPositions(e.target.value as typeof appliedPositions);
    };

    return (
        <FormContainer>
            <FormTitle>지원 정보</FormTitle>
            <FormSubtitle>지원하고자 하는 분야를 선택해주세요</FormSubtitle>
            <BoderContainer>
                {roles.map((role) => (
                    <BoderContainer $marginBottom="20px" key={role}>
                        <RadioLabel>
                            <input
                                type="radio"
                                name="role"
                                value={role}
                                checked={appliedPositions === role}
                                onChange={handleRoleChange}
                            />
                            {role}
                        </RadioLabel>
                    </BoderContainer>
                ))}
            </BoderContainer>
        </FormContainer>
    );
};

export default ApplicationInfoForm;
