import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/Detail';

//react-route-dom: page를 url에 매칭시켜줌
// v6
// <Router><Routes><Route pate={url} element={page}/></Router></Routes>

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/movie/:id'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
