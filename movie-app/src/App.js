import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/Detail';

//react-route-dom: page를 url에 매칭시켜줌
// <Router><Routes><Route pate={url} element={page}/></Router></Routes>

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
