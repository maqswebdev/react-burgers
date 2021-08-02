import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import { Landing, Restaurant, NotFound } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Landing} path="/" />
          <Route
            exact
            component={Restaurant}
            path="/restaurant/:restaurantUrl"
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
