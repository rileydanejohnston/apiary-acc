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

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Home />
      <Problem />
      <Sustainable />
      <How />
      <Impact />
      <Esg />
      <Price />
      <Team />
      <Footer />
    </AppWrapper>
  );
}

export default App