import './App.css';
import UseEffect from './components/hooks/predefined/UseEffect';
import UseId from './components/hooks/predefined/UseId';
import UseState from './components/hooks/predefined/UseState';

// Go through the components one by one, preferably in top-bottom order
function App() {
  return (
    <div>
      <UseState></UseState>
      <UseEffect></UseEffect>
      <UseId></UseId>
    </div>
  );
}

export default App;
