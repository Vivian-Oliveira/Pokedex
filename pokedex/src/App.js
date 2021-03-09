import React from 'react'
import  Router  from '../src/routes/Router'
import GlobalState from './global/GlobalState';

const App = () => {
  return (
    <GlobalState>
        <Router />
    </GlobalState>
      
   
  );
}

export default App;
