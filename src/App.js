import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Adventures from "./components/Adventures/Adventures";

const App = withRouter(({location, history}) => {
  return (
    <div>
      <div style={{position: 'sticky', top: 0}}> 
        <Header />
      </div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />     
          <Route exact path="/adventures" component={Adventures} />     
      </Switch>
    </div>
  );
});

export default App;
