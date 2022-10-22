import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Usuario from './Usuario';
import Informacoes from './Informacoes';
import Api from './Api';


export default function App() {
  return (
      <>
    <header>
    <p><Link to='/home'>Home</Link></p>
     <p><Link to='/usuario'> Usuario </Link></p>
     <p><Link to='/sobre'> Sobre </Link></p>
     <p><Link to='/informacoes'> Informacões </Link></p>
     <p><Link to='/api'>Api</Link></p>
    </header>
    <main>
        <Switch>
          <Route path='/api' component= {Api}/>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/sobre' component= {Sobre}/>
          <Route path='/home' component= {Home}/>
          <Route path='/informacoes' component= {Informacoes}/>
        </Switch>
      </main></>
  );
  }
  
