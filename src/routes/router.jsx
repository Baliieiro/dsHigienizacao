import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import navList from "../constants/navList";
import Budgets from "../containers/Budgets";
import ContactUs from "../containers/ContactUs";
import Home from "../containers/Home";
import Services from "../containers/Services";

export default function router() {
  const paths = navList.reduce((acc, cur) => {
    acc[cur.englishLabel] = cur.links;
    return acc;
  }, {});

  return (
    <Router>
      <Switch>
        <Route exact component={Home} path={paths.home} />;
        <Route component={Services} path={paths.services} />;
        <Route component={Budgets} path={paths.budgets} />;
        <Route component={ContactUs} path={paths.contactUs} />;
      </Switch>
    </Router>
  );
}
