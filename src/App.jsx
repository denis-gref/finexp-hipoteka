import React from 'react';
import './App.scss';
import Layout from './shells/Layout';
import HomePage from './pages/HomePage';
import Privacy from './pages/Privacy';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './components/modal/Modal';
import PopUpForm from './components/forms/PopUpForm';
import Form from './components/forms/Form';
import Success from './components/forms/Success';
import FormFail from './components/forms/FormFail';
import CreditWorthinessPage from './pages/CreditWorthinessPage';
import SaveCredit from './pages/SaveCredit';
import {Helmet, HelmetProvider } from 'react-helmet-async';
import NotFoundPage from './pages/NotFoundPage';
import { useTranslation } from "react-i18next";
import './i18n';


function App() {

  const { t, i18n } = useTranslation();
  
  const changeLanguages = (language) => {
   
    i18n.changeLanguage(language);
  };

  const modalContentForm = 'form';
  const modalContentSuccess = 'success';
  const modalContentFail = 'fail';

  const [modalActive, setModalActive] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState(modalContentForm);


  const onFormSuccess = () => {
    setModalActive(true);
    setCurrentModalContent(modalContentSuccess);
  };

  const onFormFail = () => {
    setModalActive(true);
    setCurrentModalContent(modalContentFail);

  }
  const handlerSelectModal = () => {
    setModalActive(!modalActive);
   
  };

  const closeModal = () => {
    setModalActive(false)
  };


  let modalContent; //= <PopUpForm child ={ <Form  handlerSelectModal={handlerSelectModal} onFormSuccessSubmit={onFormSuccess} onFormFailSubmit={onFormFail}/>}/>;




  switch (currentModalContent) {
    case modalContentFail:
      modalContent = <PopUpForm child={
        <FormFail t={t}
          handlerSelectModal={handlerSelectModal}
          onFormSuccessSubmit={onFormSuccess}
          onFormFailSubmit={onFormFail} />} />;
      break;
    case modalContentSuccess:
      modalContent = <PopUpForm child={
        <Success t={t}
          closeModal={closeModal}
          handlerSelectModal={handlerSelectModal}
          onFormSuccessSubmit={onFormSuccess}
          onFormFailSubmit={onFormFail} />} />;
      break;
    default:
      modalContent = <PopUpForm child={
        <Form t={t}
          handlerSelectModal={handlerSelectModal}
          onFormSuccessSubmit={onFormSuccess}
          onFormFailSubmit={onFormFail} />} />;
  }

  return (
    <HelmetProvider>
       <div className="App">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Hipoteka</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Routes>
        <Route path='/:lang?' element={<Layout t={t} changeLanguages={changeLanguages} />}>
          <Route index element={<HomePage t={t} handlerSelectModal={handlerSelectModal} />} />
          <Route path='privacy' element={<Privacy />}></Route>
          <Route path='CreditWorthinessPage' element={<CreditWorthinessPage t={t} />}></Route>
          <Route path='SaveCredit' element={<SaveCredit t={t} />}></Route>
          <Route path='*' element={<NotFoundPage t={t}/>}/>
        </Route>
      </Routes>
      <Modal setActive={handlerSelectModal} active={modalActive} handlerSelectModal={
        () => {
          closeModal();
          setCurrentModalContent(modalContentForm)
        }}>
        {modalContent}
      </Modal>
    </div>
    </HelmetProvider>
   
  );
}

export default App;
