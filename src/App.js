import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);


class App extends React.Component {

  render(){

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
      </header>
    </div>
  );
}

}

export default App;

