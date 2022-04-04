import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListDiv = styled.div`
  max-width: 1130px;
  height: 356px;
  margin: 32px auto;

  @media screen and (max-width: 1130px) {
    width: 94%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }

  ul.grid {
    max-width: 1130px;
    /* margin: 0px auto 70px auto; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;

    @media screen and (max-width: 1130px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }

    li {
      min-height: 356px;
      width: 366px;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      border-radius: 4px;
      background: #ffffff;
      &:hover {
        box-shadow: 0 0 0 2px #2196f3 inset;
      }

      @media screen and (max-width: 1130px) {
        width: 100%;
      }

      @media screen and (max-width: 767px) {
        width: 100%;
        height: 344px;
      }
    }
  }
`;

const ListDetailDiv = styled.div`
  padding: 26px 20px;
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;

  div.list_title {
    display: flex;
    justify-content: space-between;
    div.title {
      font-family: 'Noto Sans KR Bold';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #323d45;
    }
    div.title_status {
      width: 50px;
      height: 24px;
      border: 1px solid #ffa000;
      box-sizing: border-box;
      border-radius: 12px;
      line-height: 24px;
      text-align: center;
      position: relative;
      bottom: 4px;
      span {
        color: #ffa000;
        font-size: 12px;
      }
    }
  }

  div.client {
    font-family: 'Noto Sans KR Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #323d45;
    margin-top: 5px;
  }

  div.due {
    font-family: 'Noto Sans KR Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #939fa5;
    margin-top: 28px;
    margin-bottom: 17px;
  }
`;

const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const ListDetail = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  margin-bottom: 8px;

  div.content_title {
    font-family: 'Noto Sans KR Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #323d45;
  }
  div.content_value {
    font-family: 'Noto Sans KR Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #323d45;
    margin-left: 35px;
  }
`;

const ListBtn = styled.div`
  display: flex;
  margin-top: 25px;
  div.request_btn {
    width: 108px;
    height: 32px;
    background: #2196f3;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    span {
      font-family: 'Noto Sans KR Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 32px;
      color: #ffffff;
    }
  }
  div.chat_btn {
    width: 76px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #2196f3;
    box-sizing: border-box;
    margin-left: 10px;
    cursor: pointer;
    text-align: center;
    span {
      font-family: 'Noto Sans KR Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 32px;
      color: #2196f3;
    }
  }
`;

const List = () => {
  return (
    <ListDiv>
      <ul className="grid">
        <li>
          <ListDetailDiv>
            <ListHeader>
              <div className="list_title">
                <div className="title">자동차 시제품 제작</div>
                <div className="title_status">
                  <span>상담중</span>
                </div>
              </div>
              <div className="client">A 고객사</div>
              <div className="due">2020.12.14까지 납기</div>
            </ListHeader>
            <ListBody>
              <ListDetail>
                <div className="content_title">도면개수</div>
                <div className="content_value">2개</div>
              </ListDetail>
              <ListDetail>
                <div className="content_title">총 수량</div>
                <div className="content_value">100개</div>
              </ListDetail>
              <ListDetail>
                <div className="content_title">가공방식</div>
                <div className="content_value">밀링, 선반</div>
              </ListDetail>
              <ListDetail>
                <div className="content_title">재료</div>
                <div className="content_value">알루미늄</div>
              </ListDetail>
            </ListBody>
            <ListBtn>
              <div className="request_btn">
                <span>요청 내역 보기</span>
              </div>
              <div className="chat_btn">
                <span>채팅하기</span>
              </div>
            </ListBtn>
          </ListDetailDiv>
        </li>
      </ul>
    </ListDiv>
  );
};

export default List;
