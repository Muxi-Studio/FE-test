import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';
import './App.css'

const App: React.FC = () => (
  <div className="App">
    <Link to='/login'><Button type="primary" className='bigButton'>Hello</Button></Link>
  </div>
);

export default App;
