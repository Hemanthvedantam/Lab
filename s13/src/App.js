import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Appbar from './components/Appbar'
import { Block } from '@mui/icons-material';

function App({store}) {
  function Page() {
    switch(store.getState()) {
      case "Signin":
        return (<div> <Appbar store = {store} /> <SignIn /> </div>)
      case "Signup":
        return (<div> <Appbar store = {store} /> <SignUp /> </div>)  
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FeedBack Management System</p>
      </header>
      <div className='App-body'>
        <Page /> 
      </div>
    </div>
  );
}

export default App;
