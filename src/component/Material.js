import React from 'react';
import styled from 'styled-components';

const MaterialDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 164px;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  margin-top: 40px;
  margin-left: 108px;
  @media screen and (max-width: 767px) {
    z-index: 3;
  }
`;

const MaterialList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 10%;
  top: 10%;
  margin: 2px 0;

  .method_title {
    margin-left: 10px;
    font-family: 'Noto Sans KR Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 2px;
    display: flex;
    color: #323d45;
  }
`;

const Material = () => {
  return (
    <MaterialDiv>
      <MaterialList>
        <input type="checkbox" value="알루미늄"></input>
        <span className="method_title">알루미늄</span>
      </MaterialList>
      <MaterialList>
        <input type="checkbox" value="탄소강"></input>
        <span className="method_title">탄소강</span>
      </MaterialList>
      <MaterialList>
        <input type="checkbox" value="구리"></input>
        <span className="method_title">구리</span>
      </MaterialList>
      <MaterialList>
        <input type="checkbox" value="합금강"></input>
        <span className="method_title">합금강</span>
      </MaterialList>
      <MaterialList>
        <input type="checkbox" value="강철"></input>
        <span className="method_title">강철</span>
      </MaterialList>
    </MaterialDiv>
  );
};

export default Material;
