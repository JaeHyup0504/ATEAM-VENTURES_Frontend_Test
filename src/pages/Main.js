import React, { useEffect, useState } from 'react';
import List from '../component/List';
import Filter from '../component/Filter';
import PageTitle from '../component/PageTitle';
import axios from 'axios';

const Main = () => {
  const [list, setList] = useState([]);
  const [selectMethod, setSelectMethod] = useState([]);
  const [selectMaterial, setSelectMaterial] = useState([]);
  const [consulting, setConsulting] = useState(false);
  const [methodModal, setMethodModal] = useState(false);
  const [materialModal, setMaterialModal] = useState(false);

  // 리스트 요청 함수
  const listData = () => {
    axios
      .get('http://localhost:4000/requests')
      .then((res) => {
        // 가공방식 필터시
        let methodFilter = [];
        if (selectMethod.length > 0) {
          res.data.forEach((data) => {
            let find = data.method.find((el) => selectMethod.includes(el));
            if (data.method.includes(find)) {
              methodFilter.push(data);
            }
          });

          // 가공방식 재료 교집합 필터시
          let intersection = [];
          if (selectMaterial.length > 0) {
            methodFilter.forEach((data) => {
              let find2 = data.material.find((el) =>
                selectMaterial.includes(el)
              );
              if (data.material.includes(find2)) {
                intersection.push(data);
              }
            });
            if (intersection.length === 0) {
              return setList([]);
            }
            if (consulting) {
              let consultingFilter = intersection.filter(
                (el) => el.status === '상담중'
              );
              return setList(consultingFilter);
            } else {
              return setList(intersection);
            }
          }

          // 가공방식 필터시 상담 중 필터
          if (consulting) {
            let consultingFilter = methodFilter.filter(
              (el) => el.status === '상담중'
            );
            return setList(consultingFilter);
          } else {
            return setList(methodFilter);
          }
        }

        // 재료 필터시
        let materialFilter = [];
        if (selectMaterial.length > 0) {
          res.data.forEach((data) => {
            let find = data.material.find((el) => selectMaterial.includes(el));
            if (data.material.includes(find)) {
              materialFilter.push(data);
            }
          });
          // 재료 필터시 상담 중 필터
          if (consulting) {
            let consultingFilter = materialFilter.filter(
              (el) => el.status === '상담중'
            );
            return setList(consultingFilter);
          } else {
            return setList(materialFilter);
          }
        }

        // 가공방식 재료 교집합 필터
        if (materialFilter.length > 0) {
        }

        // 상담 중 필터시
        if (consulting) {
          let consultingFilter = res.data.filter(
            (el) => el.status === '상담중'
          );
          return setList(consultingFilter);
        }
        return setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    listData();
  }, [selectMethod, selectMaterial, consulting]);

  // 토글 버튼 실행 함수
  const toggleHandler = () => {
    setConsulting(!consulting);
  };

  // 가공방식 모달 실행 함수
  const toggleMethodModal = () => {
    setMethodModal(!methodModal);
  };

  // 가공방식 모달 닫기 함수
  const closeMethodModal = () => {
    setMethodModal(false);
  };

  // 재료 모달 실행 함수
  const toggleMaterialModal = () => {
    setMaterialModal(!materialModal);
  };

  // 재료 모달 닫기 함수
  const closeMaterialModal = () => {
    setMaterialModal(false);
  };

  // 가공방식 체크박스 실행 함수
  const getCheckboxMethod = (e) => {
    if (e.target.checked) {
      setSelectMethod([...selectMethod, e.target.value]);
    } else {
      setSelectMethod(selectMethod.filter((el) => el !== e.target.value));
    }
  };

  // 재료 체크박스 실행 함수
  const getCheckboxMaterial = (e) => {
    if (e.target.checked) {
      setSelectMaterial([...selectMaterial, e.target.value]);
    } else {
      setSelectMaterial(selectMaterial.filter((el) => el !== e.target.value));
    }
  };

  // refresh 실행 함수
  const reset = () => {
    setSelectMethod([]);
    setSelectMaterial([]);
    setMethodModal(false);
    setMaterialModal(false);
  };

  return (
    <div className="section">
      <PageTitle></PageTitle>
      <Filter
        selectMethod={selectMethod}
        selectMaterial={selectMaterial}
        consulting={consulting}
        toggleHandler={toggleHandler}
        toggleMethodModal={toggleMethodModal}
        toggleMaterialModal={toggleMaterialModal}
        methodModal={methodModal}
        materialModal={materialModal}
        reset={reset}
        getCheckboxMethod={getCheckboxMethod}
        getCheckboxMaterial={getCheckboxMaterial}
      ></Filter>
      <List
        list={list}
        closeMethodModal={closeMethodModal}
        closeMaterialModal={closeMaterialModal}
      ></List>
    </div>
  );
};

export default Main;
