import { Route, Switch } from 'react-router-dom';
import FirstPage from './pages/firstPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={FirstPage }/>
    </Switch>
  );
}

export default App;
