import { Route, Switch } from 'react-router-dom';

import Header from './components/Layout/Header';
import Home from './components/Screens/Home';
import Masthead from './components/Layout/Masthead';
import Scenarios from './components/Screens/Scenarios';
import WIPContent from './components/Screens/WIPContent';

function App() {
  return (
    <div>
      <Header />
      <Masthead />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/scenarios">
            <Scenarios />
          </Route>
          <Route path="/wip-content">
            <WIPContent />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;