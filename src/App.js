import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import Data from './components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [scribble, setScribble] = useState([]);

  return (
    <div className="bg-scribble p-5 w-100">
      <h5 className="mobile text-scribble d-md-none">Scribble . . .</h5>
      <h1 className="desktop text-scribble d-none d-md-block">Scribble . . .</h1>
      <Input scribble={scribble} setScribble={setScribble}/>
      {scribble.map((item, index) => {
        return <Data item={item} index={index} scribble={scribble} setScribble={setScribble}/>
      })}

    </div>
  );
}

export default App;
