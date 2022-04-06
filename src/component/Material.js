import React from 'react';
import styled from 'styled-components';

const MaterialDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 185px;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  margin-top: 40px;
  margin-left: 108px;
  z-index: 3;
`;

const MaterialList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 10%;
  top: 6%;
  margin: 3px 0;

  .method_title {
    margin-left: 10px;
    font-family: 'Noto Sans KR Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 1px;
    display: flex;
    color: #323d45;
  }
`;

const Material = ({ getCheckboxMaterial }) => {
  const materialList = [
    '알루미늄',
    '탄소강',
    '구리',
    '합금강',
    '강철',
    '스테인리스강',
  ];
  return (
    <MaterialDiv>
      {materialList.map((material, idx) => (
        <MaterialList key={idx} onChange={getCheckboxMaterial}>
          <input type="checkbox" value={material} id={material}></input>
          <label className="method_title" htmlFor={material}>
            {material}
          </label>
        </MaterialList>
      ))}
    </MaterialDiv>
  );
};

export default Material;
