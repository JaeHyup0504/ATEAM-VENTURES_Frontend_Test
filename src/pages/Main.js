import React, { useState } from 'react';
import List from '../component/List';
import Filter from '../component/Filter';
import PageTitle from '../component/PageTitle';

const Main = () => {
  const [isOn, setisOn] = useState(false);
  const [methodModal, setMethodModal] = useState(false);
  const [materialModal, setMaterialModal] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  const toggleMethodModal = () => {
    setMethodModal(!methodModal);
  };

  const toggleMaterialModal = () => {
    setMaterialModal(!materialModal);
  };
  return (
    <div className="section">
      <PageTitle></PageTitle>
      <Filter
        isOn={isOn}
        setisOn={setisOn}
        toggleHandler={toggleHandler}
        toggleMethodModal={toggleMethodModal}
        methodModal={methodModal}
        setMethodModal={setMethodModal}
        materialModal={materialModal}
        setMaterialModal={setMaterialModal}
        toggleMaterialModal={toggleMaterialModal}
      ></Filter>
      <List></List>
    </div>
  );
};

export default Main;
