import React, {Component} from 'react';
import checkLogin from '../helpers/checkLogin';
import history from './history';


const withAuth = AuthComponent => {
  return class AuthWrapped extends Component {
    constructor () {
      super()
      this.state = {
        isAutenticated: false,
      };
    }
    
    componentDidMount () {
      //check if it's still authenticated
      const isConfirmed = checkLogin ();

      if (!isConfirmed) {
        history.push ('/login');
      } else {
        this.setState ({
          isAutenticated: true,
        });
      }
    }

    render () {
      if (this.state.isAutenticated) {
        return (
          /* component that is currently being wrapper(App.js) */
          <AuthComponent />
        );
      } else {
        return null;
      }
    }
  };
};
export default withAuth;
