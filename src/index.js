import React from 'react';
import ReactDOM from 'react-dom';
import { DeviationTable } from './components/DeviationTable';
import './style.styl';

const APP_CONTAINER = document.getElementById('app');

class TestClass extends React.Component {
   render() {
   return (
      <div>
         <h1>Таблица 1</h1>
         <DeviationTable />
      </div>);
   }
}

ReactDOM.render(<TestClass />, APP_CONTAINER);