import React from 'react';
import { tableHeaders, tableData } from '../data-source/DataSource'; 
// import { Indicator } from './Indicator';

export class DeviationTable extends React.Component {
   render() {
      const headersRow = tableHeaders.map((elem, index) => {
         return <th key={index}>{elem}</th>;
      });
      
      const dataRows = tableData.map((elem, index) => {
         const dataCells = elem.map((elem, index) => {
            return <td key={index}>{elem}</td>; 
         });
         return <tr key={index}>{ dataCells }</tr>;
      });

      return (
         <table className="DeviationTable">
            <thead>
               <tr>{headersRow}</tr>
            </thead>
            <tbody>{dataRows}</tbody>
         </table>
      );
   }
}