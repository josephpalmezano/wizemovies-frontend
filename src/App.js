import "./styles.css";
import InfiniteScroll from "./components/infiniteScroll/infiniteScroll";
//import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reviews from "./components/reviews/reviews";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <InfiniteScroll />
        </Route>
        <Route path="/reviews/:movieId">
          <Reviews />
        </Route>
      </Switch>
    </Router>
  );
}
