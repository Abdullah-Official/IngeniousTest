import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AllPosting from './Components/AllPosting';
import Header from './Components/Header';
import MainPost from './Components/MainPost';
import Posting from './Components/Posting';
import Profile from './Components/Profile'
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Profile} />
          <Route exact path='/all-posts' component={MainPost} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
