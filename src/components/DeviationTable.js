import React from 'react';
import { tableHeaders, tableData } from '../data-source/DataSource'; 
// import { Indicator } from './Indicator';

export class DeviationTable extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         tableData: tableData,
         sortBy: 3,
         descending: false
      };

      this.handleHeaderClick = this.handleHeaderClick.bind(this);
   }

   handleHeaderClick(ev) {
      var column = ev.target.cellIndex;

      var descending = this.state.sortBy === column && !this.state.descending;
      

      var newTableData = [...this.state.tableData].sort((a,b) => {
         if(descending) {
            if(a[column] < b[column]) return 1;
            if(a[column] > b[column]) return -1;
         } else {
            if(a[column] > b[column]) return 1;
            if(a[column] < b[column]) return -1;   
         }
         return 0;
      });

      this.setState({
         tableData: newTableData,
         sortBy: column,
         descending: descending
      })
   }
   
   render() {
      const headersRow = tableHeaders.map((elem, index) => {
         let title = elem;
         if(this.state.sortBy === index) {
            title += (this.state.descending ? ' \u2191 ' : ' \u2193 ');
         }
         return <th key={index}>{title}</th>;
      });
      
      const dataRows = this.state.tableData.map((elem, index) => {
         const dataCells = elem.map((elem, index) => {
            return <td key={index}>{elem}</td>; 
         });
         return <tr key={index}>{ dataCells }</tr>;
      });

      return (
         <table cellPadding="0" cellSpacing="0" className="deviation-table">
            <thead onClick={this.handleHeaderClick}>
               <tr>{headersRow}</tr>
            </thead>
            <tbody>{dataRows}</tbody>
         </table>
      );
   }
}