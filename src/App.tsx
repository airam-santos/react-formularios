import * as Redux from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";

const store = Redux.createStore(rootReducer);
const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" component={Movies} />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
