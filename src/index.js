
//Pour connecter le magasin à votre application React, vous allez avoir besoin d'un composant de la bibliothèque react-redux nommé Provider.
//Le composant fournisseur est utilisé pour envelopper l'application de réaction et lui donnera accès au magasin.
//src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './JS/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* the component Provider needs a props store  */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//Comme vous pouvez le voir dans le code ci-dessus, le fournisseur de composants a besoin d'un magasin d'accessoires nommé, à travers cela, propsnous passons le redux storeà la hiérarchie enveloppée (qui dans notre cas, l'ensemble de l'application)