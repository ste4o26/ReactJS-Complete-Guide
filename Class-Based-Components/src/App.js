import { Component } from 'react';
import UsersFinder from './components/UsersFinder';
import UserProvider from './context/UserProvider'

class App extends Component {
  render() {
    return (
      <UserProvider >
        <UsersFinder />
      </UserProvider>
    );
  }
}

export default App;