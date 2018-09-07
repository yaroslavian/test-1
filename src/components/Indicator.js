import React from 'react';

/**
 * Компонент цветового индикатора
 */
export class Indicator extends React.Component {
   render() {
      const displayValue = Math.round(this.props.value / (this.props.maxAbs * 0.01)); // Получаем значение в процентах
      const isPositive = displayValue > 0; // Признак по которому определяем, с какой стороны рисовать и каким градиентом закрашивать индикатор
      
      // Стиль слоя заливки индикатора
      const drawStyle = {
         width: Math.round(Math.abs(this.props.value) / (this.props.maxAbs * 0.01)) + '%',
         backgroundImage: isPositive ? 'linear-gradient(to left, #d84852 , #f2505c)' : 'linear-gradient(to right, #329c60 , #4cc881)'
      };
      
      // Стиль для позиционирования слоя с заливкой
      const barStyle = {
         justifyContent: isPositive ? 'flex-end' : 'flex-start',
      };
   
      const bar = (
         <div style={barStyle} className="bar">
            <div style={drawStyle}></div>
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