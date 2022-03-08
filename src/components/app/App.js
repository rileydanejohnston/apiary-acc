import Header from "../header/header";
import Home from "../home/home";
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
      <Sustainable />
      <How />
    </AppWrapper>
  );
}

export default App