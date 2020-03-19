import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import HomePage from "./components/Home/home"

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
            <Route path="/">
            <HomePage></HomePage>
            </Route>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
