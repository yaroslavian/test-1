import React from 'react';

export class Indicator extends React.Component {
   render() {
      const size = 20+this.props.value;

      return <div className="Indicator" style={{ width: size }}>{this.props.value}</div>
   }
};