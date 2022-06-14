import React from 'react';
import ToDoList from './components/ToDoList';
// import { SpinnerRoundOutlined } from 'spinners-react';

const App = () => {

  return (
    <div className='App'>
      <ToDoList/>
      {/* <SpinnerRoundOutlined color='grey'/> */}
    </div>
  );
}

export default App;
