import styled from 'styled-components';
import { center } from '../../style/globalStyles';

/**
 * Container: 페이지 전체를 감싸는 래퍼
 */
export const Container = styled.div`
  background-color: #fff;
  width: 96%;
  margin: 2% auto;
`;

/**
 * 로고 영역 타이틀
 */
export const LogoTitle = styled.h1`
  text-align: center;
  margin: 40px auto 30px;
`;

/**
 * 메인 타이틀
 */
export const MainTitle = styled.p`
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
`;

interface TextProps {
  marginBottom?: string; // px, rem, 등 단위를 포함한 문자열
}

/**
 * 강조 텍스트 (파란색, 굵게)
 */
export const HighlightText = styled.p<TextProps>`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: var(--main-blue1);
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

/**
 * 일반 텍스트 (FaCheck 등 아이콘 포함 가능)
 */
export const RegularText = styled.p<TextProps>`
  font-size: 18px;
  text-align: center;
  ${center}; /* flex 레이아웃 등 가로정렬 */
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};

  & > svg {
    display: block;
    margin-right: 6px;
  }
`;

/**
 * 클릭 가능한 텍스트 (링크 역할)
 */
export const ClickableText = styled.p<TextProps>`
  font-size: 18px;
  font-weight: bold;
  color: var(--main-blue1);
  cursor: pointer;
  ${center};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};

  & > svg {
    display: block;
    margin-right: 6px;
  }
`;

/**
 * 지원하기 버튼
 */
export const ApplyButton = styled.button`
  display: block;
  margin: 0 auto 50px;
  padding: 20px 60px;
  font-size: 25px;
  background-color: var(--main-blue1);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
