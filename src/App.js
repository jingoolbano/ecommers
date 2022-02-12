import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import shopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signIn-and-signUp-page/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscrifeFromAuth = null;

  componentDidMount() {
    this.unsubscrifeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })

  }

  componentWillUnmount() {
    this.unsubscrifeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={shopPage} />
          <Route exact path='/Signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
