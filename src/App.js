import './App.css';
import Todo from './components/Todo';
import Navbar from './partials/Navbar';

function App() {
  return (

    <div >
      <div className ='nav'>
        <Navbar />
      </div>
      <Todo />
    </div>
  );
}

export default App;
