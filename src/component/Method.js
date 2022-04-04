import React from 'react';
import styled from 'styled-components';

const MethodDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 98px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    z-index: 3;
  }
`;

const MethodList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 16%;
  left: 14%;
  margin: 2px 0;

  .method_title {
    margin-left: 10px;
    font-family: 'Noto Sans KR Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    color: #323d45;
    margin-top: 2px;
  }
`;

const Method = () => {
  return (
    <MethodDiv>
      <MethodList>
        <input type="checkbox" value="밀링" id="1"></input>
        <span className="method_title">밀링</span>
      </MethodList>
      <MethodList>
        <input type="checkbox" value="선반"></input>
        <span className="method_title">선반</span>
      </MethodList>
    </MethodDiv>
  );
};

export default Method;
