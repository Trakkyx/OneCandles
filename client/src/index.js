import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {store, persistor} from "./redux/store"
import { PersistGate } from "redux-persist/es/integration/react"


/*This is the main file where everything is rendered*/ 

/*The provider brackets is for the redux toolkit so it can remember all the states*/ 

/*The persistgate brackers is for the states to be remembered even when the browser tab has been closed*/ 

/*App tag will render all the code in the app file*/ 

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);