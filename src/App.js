 
import './App.css';
import PlayerList from './Components/PlayerList';
import {playarr} from './Players';

function App() {
  return (
    <div className="App">
      <br /><br />
       <div className="container" >
        <div className="alert alert-danger" ><h2>Hi! it is me!</h2></div>
       <PlayerList brobz={playarr} />
       </div>
    </div>
  );
}

export default App;
