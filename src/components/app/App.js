import Esg from "../esg/Esg";
import Header from "../header/header";
import Home from "../home/home";
import Impact from "../impact/Impact";
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
    </AppWrapper>
  );
}

export default App