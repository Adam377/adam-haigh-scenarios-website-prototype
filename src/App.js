import { Route, Switch } from 'react-router-dom';

import Header from './components/Layout/Header';
import Home from './components/Screens/Home';
import Masthead from './components/Layout/Masthead';
import Scenarios from './components/Screens/Scenarios';
import WIPContent from './components/Screens/WIPContent';
import Cart from './components/Screens/Cart';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Masthead title="Adam Haigh Scenarios">High quality and immersive scenarios for TS Classic</Masthead>
            <Home />
          </Route>
          <Route path="/scenarios">
            <Scenarios />
          </Route>
          <Route path="/wip-content">
            <WIPContent />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;