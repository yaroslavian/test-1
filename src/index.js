import React from 'react';
import ReactDOM from 'react-dom';
import { DeviationTable } from './components/DeviationTable';
import './style.styl';

const APP_CONTAINER = document.getElementById('app');

class TestClass extends React.Component {
   render() {
   return (
      <div>
         <DeviationTable />
      </div>);
   }
}

ReactDOM.render(<TestClass />, APP_CONTAINER);