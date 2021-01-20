
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../style/App.css";
import Map from "./Map"
import Photos from "./photos"
import Home from "./Home"
function App() {
  return (<>
    <Router>
      <Switch>
     
      <Route path="/map" exact render={()=><Map />} />
      <Route  path="/images"  render={()=><Photos />} />
      <Route path="/"  render={()=><Home />} />
      </Switch>
    </Router>
  </>)
}

export default App;
