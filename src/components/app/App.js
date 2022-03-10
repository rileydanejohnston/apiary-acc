import Esg from "../esg/Esg";
import Header from "../header/header";
import Home from "../home/home";
import Impact from "../impact/Impact";
import Price from "../price/Price";
import Problem from "../problem/Problem";
import Sustainable from "../sustainable/Sustainable";
import { AppWrapper } from "./styledApp";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Home />
      <Problem />
      <Impact />
      <Sustainable />
      <Esg />
      <Price />
    </AppWrapper>
  );
}

export default App