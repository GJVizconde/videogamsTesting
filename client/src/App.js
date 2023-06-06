import NavBar from "./components/NavBar/NavBar";
import { Landing, Home, Detail, Form } from "./views";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname === "/" ? <Landing /> : <NavBar />}

      <Route path="/home" render={() => <Home />} />
      <Route path="/detail/:id" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
