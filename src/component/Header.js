import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../icon/logo.png';
import factory_icon from '../icon/factory.png';
import MenuModal from './MenuModal';

const HeaderDiv = styled.div`
  width: 96%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 1130px) {
    width: 94%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

const Logo = styled.div`
  width: 153px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 153px;
    height: 20px;
    left: 12%;
  }
`;

const GnbDiv = styled.div`
  width: 210px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: auto 82px;

  @media screen and (max-width: 1130px) {
  }
  @media screen and (max-width: 767px) {
    display: none;
  }

  div.left_div {
    border-right: 2px solid #fff;
    position: relative;
    span {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      color: #ffffff;
      position: absolute;
      top: 0;
      right: 32px;
      cursor: pointer;
    }
  }
  div.right_div {
    position: relative;
    span {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      color: #ffffff;
      position: absolute;
      right: 0;
      cursor: pointer;
    }
  }
`;

const DrawerMenu = styled.div`
  width: 28px;
  height: 28px;
  display: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 767px) {
    display: block;
  }
  span {
    width: 28px;
    height: 4px;
    background-color: #dadada;
    cursor: pointer;
    position: absolute;
  }

  .line2 {
    top: 50%;
    transform: translateY(-50%);
  }
  .line3 {
    bottom: 0;
  }
`;

const Header = () => {
  const [menuModal, setMenuModal] = useState(false);

  const openMenuModal = () => {
    setMenuModal(!menuModal);
  };
  const closeMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <div className="header">
      <HeaderDiv>
        {menuModal === true ? (
          <MenuModal closeMenuModal={closeMenuModal}></MenuModal>
        ) : null}
        <DrawerMenu onClick={openMenuModal}>
          <span class="line1"></span>
          <span class="line2"></span>
          <span class="line3"></span>
        </DrawerMenu>
        <Logo>
          <img src={logo}></img>
        </Logo>
        <GnbDiv>
          <div className="left_div">
            <div>
              <img src={factory_icon}></img>
            </div>
            <span>A 가공 업체</span>
          </div>
          <div className="right_div">
            <span>로그아웃</span>
          </div>
        </GnbDiv>
      </HeaderDiv>
    </div>
  );
};

export default Header;
