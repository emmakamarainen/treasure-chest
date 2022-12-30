import Store from "./components/Store/Store";
import Card from "./components/UI/Card";
import classes from "./App.css";
import Terrain from "./components/Treasure/Terrain";

function App() {
  return (
    <div className={classes['App-header']}>
      <Card>
        <Terrain/>
        
        <Store />
      </Card>
    </div>
  );
}

export default App;
