import * as React from 'react';
import Card from './Card';

function Widget() {
      return (
        <div style={{display: 'flex'}}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      );
    }
export default Widget