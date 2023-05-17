import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Movies from "./components/movies/Movies";

function App() {
  return (
<BrowserRouter>
<Switch>
  <Route exact path="/" component={Login}/>
  <Route exact path="/Movies" component={Movies}/>
</Switch>
</BrowserRouter>
  );
}

export default App;
