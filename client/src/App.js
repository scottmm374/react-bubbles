import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./utils/PrivateRoute";

import Login from "./components/Login";
import "./styles.scss";
import ProtectedRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
