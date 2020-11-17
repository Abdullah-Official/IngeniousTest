import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MainPost from './Components/MainPost';
import Profile from './Components/Profile'
function App() {
  return (
    <div className="App">
      <Header/>
     
      <Switch>
          <Route exact path='/' component={Profile} />
          <Route exact path='/all-posts' component={MainPost} />
      </Switch>
      
      
     
    </div>
  );
}

export default App;
