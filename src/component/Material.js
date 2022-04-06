import React from 'react';
import styled from 'styled-components';

const MaterialDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 190px;
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
  top: 6%;
  left: 11%;
  margin-top: 6px;

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

const Material = ({ getCheckboxMaterial, selectMaterial }) => {
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
        <MaterialList key={idx}>
          <input
            type="checkbox"
            value={material}
            id={material}
            onChange={getCheckboxMaterial}
            checked={selectMaterial.includes(material)}
          ></input>
          <label className="method_title" htmlFor={material}>
            {material}
          </label>
        </MaterialList>
      ))}
    </MaterialDiv>
  );
};

export default Material;
