// store/useFormStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


type appliedPositionsType = '프론트엔드' | '백엔드' | '디자인' | 'iOS' | '안드로이드' | 'Product Owner' | null

interface FormState {
    privacyConsent: boolean;
    name: string;
    phone: string;
    email: string;
    appliedPositions: appliedPositionsType;

    setPrivacyConsent: (consent: boolean) => void;
    setName: (name: string) => void;
    setPhone: (phone: string) => void;
    setEmail: (email: string) => void;
    setAppliedPositions: (appliedPositions: appliedPositionsType) => void;
    resetForm: () => void;
}

export const useFormStore = create<FormState>()(
    persist(
        (set) => ({
            privacyConsent: false,
            name: '',
            phone: '',
            email: '',
            appliedPositions: null,

            setPrivacyConsent: (consent) => set(() => ({ privacyConsent: consent })),
            setName: (name) => set(() => ({ name })),
            setPhone: (phone) => set(() => ({ phone })),
            setEmail: (email) => set(() => ({ email })),
            setAppliedPositions: (appliedPositions ) => set(() => ({ appliedPositions })),
            resetForm: () =>
                set(() => ({
                    privacyConsent: false,
                    name: '',
                    phone: '',
                    email: '',
                    appliedPositions: null,
                })),
        }),
        {
            name: 'form-storage', // 세션스토리지에 저장될 키 이름
            storage: createJSONStorage(() => sessionStorage),
            // ↑ sessionStorage를 JSON으로 래핑해서 zustand가 인식 가능하도록 함
        }
    )
);
