import './App.css';
import FileSystemNavigator from './FileSystemNavigator';
import { Routes,Route } from "react-router-dom";
import Sample from './Sample'


function App() {
  return (
    <div className="App">     
      <Routes>
      <Route path="/" element={<FileSystemNavigator/>}/>
      <Route path="sample" element={<Sample/>}/>
      </Routes>
    </div>
  );
}

export default App;
