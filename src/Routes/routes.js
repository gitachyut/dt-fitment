import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../containers/Home/home";

export default function Routes() {
  return (
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/vehicle-tires/:makeParam?/:modelParam?/:trimParam?/:yearParam?">
                <Home />
              </Route>

              <Route exact path="/vehicle-wheels/:makeParam?/:modelParam?/:trimParam?/:yearParam?">
                <Home />
              </Route>

              <Route exact path="/vehicle-packages/:makeParam?/:modelParam?/:trimParam?/:yearParam?">
                <Home />
              </Route>

              <Route exact path="/vehicle-accessories/:makeParam?/:modelParam?/:trimParam?/:yearParam?">
                <Home />
              </Route>
            </Switch>
        </Router>
  );
}
