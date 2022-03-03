import Header from "../header/header";
import Home from "../home/home";
import Problem from "../problem/Problem";
import { AppWrapper } from "./styledApp";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Home />
      <Problem />
    </AppWrapper>
  );
}

export default App