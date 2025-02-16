import styled from 'styled-components';

// -- styled components
export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  text-align: center;
`;

export const FormSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: #666;
`;

export const RadioGroup = styled.div`
  margin-bottom: 20px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  & > input {
    margin-right: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
`;
