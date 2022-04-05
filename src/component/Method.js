import React from 'react';
import styled from 'styled-components';

const MethodDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 98px;
  height: 82px;
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
  top: 16%;
  left: 14%;
  margin: 3px 0;

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

const Method = ({ getCheckboxMethod }) => {
  const methodList = ['밀링', '선반'];
  return (
    <MethodDiv>
      {methodList.map((method, idx) => (
        <MethodList
          key={idx}
          onClick={(e) => {
            getCheckboxMethod(e);
          }}
        >
          <input
            type="checkbox"
            name={method}
            value={method}
            id={method}
          ></input>
          <label className="method_title" for={method}>
            {method}
          </label>
        </MethodList>
      ))}
    </MethodDiv>
  );
};

export default Method;
