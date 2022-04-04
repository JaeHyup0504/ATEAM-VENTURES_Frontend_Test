import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
  max-width: 1130px;
  height: 56px;
  margin: 32px auto;

  @media screen and (max-width: 1130px) {
    width: 94%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }

  h2 {
    font-size: 20px;
    font-family: 'Noto Sans KR Bold';
    font-size: 20px;
    line-height: 32px;
    color: #323d45;
  }

  span {
    font-family: 'Noto Sans KR Regular';
    font-size: 16px;
    line-height: 24px;
    color: #323d45;
  }
`;

const PageTitle = () => {
  return (
    <TitleDiv>
      <h2>들어온 요청</h2>
      <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
    </TitleDiv>
  );
};

export default PageTitle;
