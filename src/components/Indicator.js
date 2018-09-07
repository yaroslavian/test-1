import React from 'react';

export class Indicator extends React.Component {
   render() {
      const displayValue = Math.round(this.props.value / (this.props.maxAbs * 0.01));
      const isPositive = displayValue > 0;
      
      const drawStyle = {
         width: Math.round(Math.abs(this.props.value) / (this.props.maxAbs * 0.01)) + '%',
         backgroundImage: isPositive ? 'linear-gradient(to left, #d84852 , #f2505c)' : 'linear-gradient(to right, #329c60 , #4cc881)'
      };
      
      const barStyle = {
         justifyContent: isPositive ? 'flex-end' : 'flex-start',
      };
   
      const bar = (
         <div style={barStyle} className="bar">
            <div style={drawStyle}>&nbsp;</div>
         </div>
      );

      return (
         <div className="indicator">
            <div className="bar-container">{ displayValue > 0 ? bar : '' }</div>
            <div>{ displayValue + ' п.п.'}</div>
            <div className="bar-container">{ displayValue < 0 ? bar : '' }</div>
         </div>
      );
   }
};