import React, { useState } from 'react';
import styled from 'styled-components';

const MethodDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 98px;
  height: 83px;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  margin-top: 40px;
  z-index: 3;
`;

const MethodList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 14%;
  left: 12%;
  margin-top: 6px;
  .method_title {
    margin-left: 10px;
    font-family: 'Noto Sans KR Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    color: #323d45;
    margin-top: 1px;
  }
`;

const Method = ({ getCheckboxMethod, selectMethod }) => {
  const methodList = ['밀링', '선반'];
  return (
    <MethodDiv>
      {methodList.map((method, idx) => (
        <MethodList key={idx}>
          <input
            type="checkbox"
            name={method}
            value={method}
            id={method}
            onChange={getCheckboxMethod}
            checked={selectMethod.includes(method)}
          ></input>
          <label className="method_title" htmlFor={method}>
            {method}
          </label>
        </MethodList>
      ))}
    </MethodDiv>
  );
};

export default Method;
