import Esg from "../esg/Esg";
import Footer from "../footer/Footer";
import Header from "../header/header";
import Home from "../home/home";
import Impact from "../impact/Impact";
import Price from "../price/Price";
import Problem from "../problem/Problem";
import Sustainable from "../sustainable/Sustainable";
import How from '../how/How';
import Team from "../team/Team";
import { AppWrapper } from "./styledApp";
import Form from "../form/Form";
import { useState } from 'react';

const App = () => {

  // POPUP_____________________________________________POPUP
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  return (
    <AppWrapper>
      <Header
        openPopup={openPopup} />
      <Home />
      <Problem />
      <Impact />
      <Sustainable />
      <How
        openPopup={openPopup} />
      <Esg />
      <Price />
      <How />
      <Team />
      <Footer />
      <Form
        open={popupOpen}
        closePopup={closePopup} />
    </AppWrapper>
  );
}

export default App