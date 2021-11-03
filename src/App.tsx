import React, { useState } from 'react';

import Menu from './components/Menu';
import Multiplier from './Multiplier';
import './app.css';
import Divider from './Divider';
import Summation from './Summation';
import Subtraction from './Subtraction';

const App: React.FC = () => {
  const [operation, setOperation] = useState('Divider');
  return (
    <div className="boxes">
      <Menu setOperation={setOperation} />
      {operation === 'Multiplier' && <Multiplier />}
      {operation === 'Divider' && <Divider />}
      {operation === 'Summation' && <Summation />}
      {operation === 'Subtraction' && <Subtraction />}
    </div>
  );
};

export default App;
