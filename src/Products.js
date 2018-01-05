import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from "./Product";

export default ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/item1`}>item 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/item2`}>item 2</Link>
      </li>
      <li>
        <Link to={`${match.url}/item3`}>item 3</Link>
      </li>
      <li>
        <Link to={`${match.url}/item4`}>item 4</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:productId`} component={Product} />
    <Route
      exact
      path={match.path}
      render={() => <h3>please select a product</h3>}
    />
  </div>
);
