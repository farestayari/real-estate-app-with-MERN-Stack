import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Header from './components/header';
import Home from './components/home';
import './css/plugins/css/bootstrap.min.css';
import './css/styles.css';
import './css/colors.css';
import SignUp from './components/signUp';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import AddProperty from "./components/AddProperty";


function App() {

  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   }
  // }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" render={() => <Register/>} />
        <Route path="/login" render={() => <Login/>} />
        <Route path="/add-property" render={() => <AddProperty/>} />
        </Switch>
       
        </BrowserRouter>
        <Footer/>

    </div>
  );
}

export default App;
