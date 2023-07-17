/* eslint-disable no-undef */

import React from 'react';
import '../styles/App.css'
import { AppUI } from './AppUi.js';
import { RenderContext } from '../context/TodosContext';

function App() {
  
  return (
    <>
      <RenderContext>
        <AppUI />
      </RenderContext>
    </>
    
  )
}

export default App;
