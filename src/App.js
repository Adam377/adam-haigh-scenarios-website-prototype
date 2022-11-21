import { Route, Switch } from 'react-router-dom';

import ContentImageBlock from './components/Layout/Blocks/ContentImageBlock';
import Header from './components/Layout/Header';
import Masthead from './components/Layout/Masthead';
import aboutMeImage from './assets/class319WBQ.JPG';
import Scenarios from './components/Screens/Scenarios';

function App() {
  return (
    <div>
      <Header />
      <Masthead />
      <main>
        <Switch>
          <Route path="/scenarios">
            <Scenarios />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;