import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/login/Login";
import Movies from "./components/movies/Movies";
import Signup from "./components/signup/Signup";

function App() {
  return (
<BrowserRouter>
<ToastContainer></ToastContainer>
<Switch>
  <Route exact path="/" component={Signup}/>
  <Route exact path="/Login" component={Login}/>
  <Route exact path="/Movies" component={Movies}/>
</Switch>
</BrowserRouter>
  );
}

export default App;
