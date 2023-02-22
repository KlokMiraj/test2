import React from 'react';
// import logo from './logo.svg';
import './App.css';

///amplify import
import { Amplify } from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { Authenticator } from '@aws-amplify/ui-react';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

//importing the rest-api for the app
// import {API} from 'aws-amplify';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


// function App({ isPassedToWithAuthenticator, signOut, user }) {
//   if (!isPassedToWithAuthenticator) {
//     throw new Error(`isPassedToWithAuthenticator was not provided`);
//   }

//   return (
//     <div className='App'>
//     <Heading level={1}>Hello {user.username}</Heading>
//     <Button onClick={signOut}>Sign out</Button>
//     <h2>Amplify Todos</h2>

//     </div>
//   );
// }

class App extends React.Component {
  render(){
    return(
      <div className='App'>
      <div className='App'>
      <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </div>
        <h2>Amplify Todos</h2>
      </div>
    )
  }
}
export default withAuthenticator(App,true);

// export async function getStaticProps() {
//   return {
//     props: {
//       isPassedToWithAuthenticator: true,
//     },
//   };
// }



