import Footer from "../footer/Footer";
import Header from "../header/header";
import Home from "../home/home";
import Impact from "../impact/Impact";
import Problem from "../problem/Problem";
import Sustainable from "../sustainable/Sustainable";
import How from '../how/How';
import { AppWrapper } from "./styledApp";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Home />
      <Problem />
      <Impact />
      <Sustainable />
      <How />
      <Footer />
    </AppWrapper>
  );
}

export default App