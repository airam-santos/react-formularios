/*import * as Redux from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";*/
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import NewMovie from "./pages/NewMovie";

//const store = Redux.createStore(rootReducer);
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={Movies} />
        <Route path="/newmovie" component={NewMovie} />
        <Body />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
