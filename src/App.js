import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import SignUp from './Components/signUp/SignUp';
import Posts from './Components/posts/Posts';
import Login from './Components/login/Login';
// import AllPosts from "./Components/allPosts/AllPosts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/login" component={Login}/>
          {/* <Route exact path="/login" component={AllPosts}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
