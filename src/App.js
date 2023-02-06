import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import { Messages, MessagesOne, MessagesTwo, MessagesThree } from "./pages/Messages";
import Team from "./pages/Team";
import TreeView from "./pages/TreeView";


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/items" exact component={Reports} />
        <Route path="/items/item1" exact component={ReportsOne} />
        <Route path="/items/item2" exact component={ReportsTwo} />
        <Route path="/items/item3" exact component={ReportsThree} />
        <Route path="/level2items" exact component={Messages} />
        <Route path="/level2items/item1" exact component={MessagesOne} />
        <Route path="/level2items/item2" exact component={MessagesTwo} />
        <Route path="/level2items/item3" exact component={MessagesThree} />
        <Route path="/team" exact component={Team} />
        <Route path="/tree" exact component={TreeView} />
      </Switch>
    </Router>
  );
}

export default App;
