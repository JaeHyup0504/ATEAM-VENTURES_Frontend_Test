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

  const listData = () => {
    axios
      .get('http://localhost:4000/requests')
      .then((res) => {
        // if (selectMethod.length > 0) {
        //   let find = res.data.filter((el) => el.method === selectMethod)

        // }
        if (consulting) {
          let consultingFilter = res.data.filter(
            (el) => el.status === '상담중'
          );
          return setList(consultingFilter);
        } else {
          return setList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    listData();
  }, [consulting, selectMethod, selectMaterial]);

  const toggleHandler = () => {
    setConsulting(!consulting);
  };

  const toggleMethodModal = () => {
    setMethodModal(!methodModal);
  };

  const toggleMaterialModal = () => {
    setMaterialModal(!materialModal);
  };

  const getCheckboxMethod = (e) => {
    if (e.target.checked) {
      setSelectMethod([...selectMethod, e.target.value]);
    } else {
      setSelectMethod(selectMethod.filter((el) => el !== e.target.value));
    }
  };

  const getCheckboxMaterial = (e) => {
    if (e.target.checked) {
      setSelectMaterial([...selectMaterial, e.target.value]);
    } else {
      setSelectMaterial(selectMaterial.filter((el) => el !== e.target.value));
    }
  };

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
        list={list}
        setList={setList}
        selectMethod={selectMethod}
        selectMaterial={selectMaterial}
        consulting={consulting}
        toggleHandler={toggleHandler}
        toggleMethodModal={toggleMethodModal}
        methodModal={methodModal}
        setMethodModal={setMethodModal}
        materialModal={materialModal}
        setMaterialModal={setMaterialModal}
        toggleMaterialModal={toggleMaterialModal}
        reset={reset}
        getCheckboxMethod={getCheckboxMethod}
        getCheckboxMaterial={getCheckboxMaterial}
      ></Filter>
      <List list={list}></List>
    </div>
  );
};

export default Main;
