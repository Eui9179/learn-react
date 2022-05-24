import './App.css';
import PropsStudy from './PropsStudy';

function App() {
  return (
    <div className='App'>
      <PropsStudy name='chan' isSpecial={true} />
      <PropsStudy />
    </div>
  );
}

export default App;
