import React, { useState } from 'react';
import styled from 'styled-components';
import downArrow from '../icon/arrow_drop_down.png';
import refresh from '../icon/refresh.png';
import Method from './Method';
import Material from './Material';

const Filter_div = styled.div`
  max-width: 1130px;
  height: 100%;
  margin: 32px auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1130px) {
    width: 94%;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    flex-direction: column;
  }

  div.category {
    position: relative;
    display: flex;
  }

  div.toggle {
    width: 179px;
    height: 20px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
    margin-top: 6px;

    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }

    div.toggle_title {
      width: 100%;
      font-family: 'Noto Sans KR Medium';
      font-size: 14px;
      line-height: 22px;
      font-weight: 500;
      color: #323d45;
    }
  }
`;

const Category_first = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.selectMethod.length > 0 ? `115px` : `98px`)}; //105
  height: 32px;
  background: ${(props) =>
    props.selectMethod.length > 0 ? `#2196f3` : `#ffffff`};
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border: 1px solid #2196f3;
  }

  div.arrow_drop_down {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
`;

const MethodText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.selectMethod.length > 0 ? `#ffffff` : `#323d45`)};
`;

const Category_second = styled.div`
  margin-left: 10px;
  width: ${(props) => (props.selectMaterial.length > 0 ? `85px` : `76px`)}; //85
  height: 32px;
  background: ${(props) =>
    props.selectMaterial.length > 0 ? `#2196f3` : `#ffffff`};
  border: 1px solid #939fa5;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 70% 30%;
  &:hover {
    border: 1px solid #2196f3;
  }

  div.arrow_drop_down {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
`;

const MaterialText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.selectMaterial.length > 0 ? `#ffffff` : `#323d45`};
`;

const RefreshDiv = styled.div`
  display: flex;
  margin-left: 20px;
  cursor: pointer;
  div.refresh_icon {
    display: flex;
    align-items: center;
  }
  div.refresh {
    margin-left: 12px;
    font-family: 'Noto Sans KR Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #2196f3;
  }
`;

const ToggleContainer = styled.div`
  width: 37px;
  position: relative;
  min-height: 20px;
  cursor: pointer;
  > .toggle-container {
    position: absolute;
    width: 34px;
    height: 14px;
    left: 3px;
    top: 3px;
    border-radius: 30px;
    background: linear-gradient(to left, #c2c2c2 50%, #bbdefb 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition-duration: 0.8s;
    &.toggle--checked {
      background-position: left bottom;
    }
  }
  > .toggle-circle {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 17px;
    top: 0px;
    border-radius: 50%;
    background: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    transition-duration: 0.5s;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      right: -6px;
      background: #2196f3;
    }
  }
`;

const Filter = ({
  selectMethod,
  selectMaterial,
  consulting,
  toggleHandler,
  toggleMethodModal,
  toggleMaterialModal,
  methodModal,
  materialModal,
  reset,
  getCheckboxMethod,
  getCheckboxMaterial,
  isChecked,
}) => {
  return (
    <Filter_div>
      <div className="category">
        <Category_first onClick={toggleMethodModal} selectMethod={selectMethod}>
          <MethodText selectMethod={selectMethod}>
            가공방식 {selectMethod.length > 0 && `(${selectMethod.length})`}
          </MethodText>
          <div className="arrow_drop_down">
            <img src={downArrow}></img>
          </div>
        </Category_first>
        {methodModal && (
          <Method
            getCheckboxMethod={getCheckboxMethod}
            isChecked={isChecked}
          ></Method>
        )}
        <Category_second
          onClick={toggleMaterialModal}
          selectMaterial={selectMaterial}
        >
          <MaterialText selectMaterial={selectMaterial}>
            재료 {selectMaterial.length > 0 && `(${selectMaterial.length})`}
          </MaterialText>
          <div className="arrow_drop_down">
            <img src={downArrow}></img>
          </div>
        </Category_second>
        {materialModal && (
          <Material getCheckboxMaterial={getCheckboxMaterial}></Material>
        )}
        {selectMethod.length > 0 || selectMaterial.length > 0 ? (
          <RefreshDiv onClick={reset}>
            <div className="refresh_icon">
              <img src={refresh}></img>
            </div>
            <div className="refresh">필터링 리셋</div>
          </RefreshDiv>
        ) : null}
      </div>
      <div className="toggle">
        <ToggleContainer onClick={toggleHandler}>
          <div
            className={`toggle-container ${
              consulting ? 'toggle--checked' : ''
            }`}
          />
          <div
            className={`toggle-circle ${consulting ? 'toggle--checked' : ''}`}
          />
        </ToggleContainer>
        <div className="toggle_title">상담 중인 요청만 보기</div>
      </div>
    </Filter_div>
  );
};

export default Filter;
