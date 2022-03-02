import Header from "../header/header";
import { AppWrapper } from "./styledApp";
import { headerLinks } from '../../constants/headerConstants';

function App() {
  return (
    <AppWrapper>
      <Header headerLinks={headerLinks} />
    </AppWrapper>

  );
}

export default App;
