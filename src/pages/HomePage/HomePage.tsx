import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaHouse, FaInstagram } from 'react-icons/fa6';
import { TiPinOutline } from 'react-icons/ti';

import { Main } from '../../style/globalStyles';
import {
  Container,
  LogoTitle,
  MainTitle,
  HighlightText,
  RegularText,
  ClickableText,
  ApplyButton,
} from './styled';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const openNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Main>
      <Container>
        <LogoTitle>
          <img src="./img/logo.png" alt="프로그라피 로고" />
        </LogoTitle>

        <MainTitle>
          안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Programhy 입니다.
        </MainTitle>

        <HighlightText marginBottom="40px">
          드디어 Programhy 10기 모집이 시작되었습니다.
        </HighlightText>

        <RegularText marginBottom="50px">
          Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring) 총 6개의 파트를 모집합니다.
        </RegularText>

        {/* 반복되는 부분은 필요하다면 배열/map으로 리팩토링도 가능 */}
        <RegularText marginBottom="30px">
          <FaCheck size={15} />
          새로운 가치를 만들어내는데 가슴이 두근거리신다면,
        </RegularText>
        <RegularText marginBottom="30px">
          <FaCheck size={15} />
          열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면.
        </RegularText>
        <RegularText marginBottom="50px">
          <FaCheck size={15} />
          탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,
        </RegularText>

        <HighlightText marginBottom="30px">"프로답게, 재미있게"</HighlightText>

        <RegularText marginBottom="50px">
          재미있는 작당을 함께 만들어갈 10기에 합류하세요.
        </RegularText>

        <RegularText marginBottom="40px">
          <TiPinOutline size={20} color="red" />
          자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요.
        </RegularText>

        <HighlightText marginBottom="30px">
          프로그라피 10기 모집 자세히 알아보기
        </HighlightText>

        <ClickableText marginBottom="30px" onClick={() => openNewTab('https://prography.org/')}>
          <FaHouse color="#555" />
          공식 홈페이지
        </ClickableText>
        <ClickableText marginBottom="50px" onClick={() => openNewTab('https://www.instagram.com/prography_official/')}>
          <FaInstagram color="#555" />
          인스타그램
        </ClickableText>

        <ApplyButton onClick={() => navigate('/apply')}>
          지원하기
        </ApplyButton>
      </Container>
    </Main>
  );
};

export default HomePage;
