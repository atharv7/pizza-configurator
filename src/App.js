import React, { PureComponent } from 'react';
import Customizer from './containers/index.js'
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./newagepizza.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Build your pizza! <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Wink_Emoji_large.png?v=1480481060" width="30"/></h1>
        </header>
        <div className="container">
          <Customizer />
        </div>
      </div>
    );
  }
}

export default App;
