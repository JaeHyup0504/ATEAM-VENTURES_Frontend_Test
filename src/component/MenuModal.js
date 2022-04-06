import React, { useState } from 'react';
import styled from 'styled-components';
import modalLogo from '../icon/modalLogo.png';
import modalFactory from '../icon/modalFactory.png';

const MenuDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
`;
const Menu = styled.div`
  width: 80%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  div.modal_title {
    position: relative;
    height: 70px;
    width: 100%;
    border: 1px solid #e5e5e5;
    img {
      width: 153px;
      height: 20px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 20px;
    }
  }

  ul.modal_list {
    padding: 40px 30px;

    li.list {
      font-family: 'Noto Sans KR Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      cursor: pointer;
      color: #323d45;
      margin-bottom: 50px;

      div {
        float: left;
      }

      div.list_img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
`;

const MenuBack = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const MenuModal = ({ closeMenuModal }) => {
  return (
    <>
      <MenuDiv>
        <MenuBack onClick={closeMenuModal}></MenuBack>
        <Menu>
          <div className="modal_title">
            <img src={modalLogo}></img>
          </div>
          <ul className="modal_list">
            <li className="list">
              <div className="list_img">
                <img src={modalFactory}></img>
              </div>
              <div>파트너정밀가공</div>
            </li>
            <li className="list">로그아웃</li>
          </ul>
        </Menu>
      </MenuDiv>
    </>
  );
};

export default MenuModal;
