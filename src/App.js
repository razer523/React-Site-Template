import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './components/navBar';
import WhatWeDo from './components/whatWeDo';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path='/' component={Home}/>        
        <Route path='/home' component={Home} />
        <Route path='/whatWeDo' component={WhatWeDo} />
        <Route path='/contact' component={Contact} />
      </Router>
    </div>
  );
}

export default App;
