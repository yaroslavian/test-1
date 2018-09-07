import React from 'react';

export class Indicator extends React.Component {
   render() {
      // const size = 20+this.props.value;
      const bar = <div className="bar">&nbsp;</div>;

      return (
         <div className="indicator">
            <div className="bar-container">{ this.props.value > 0 ? bar : '' }</div>
            <div>{ this.props.value + ' п.п.'}</div>
            <div className="bar-container">{ this.props.value < 0 ? bar : '' }</div>
         </div>
      );
   }
};