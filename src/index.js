import React from 'react';
import ReactDOM from 'react-dom';

const APP_CONTAINER = document.getElementById('app');

class TestClass extends React.Component {
   render() {
      return <div><h1>Here is the test component!</h1></div>;
   }
}

ReactDOM.render(<TestClass />, APP_CONTAINER);