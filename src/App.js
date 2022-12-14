import { Route, Switch } from 'react-router-dom';

import Header from './components/Layout/Header';
import Masthead from './components/Layout/Masthead';
import Scenarios from './components/Screens/Scenarios';
import AboutMe from './components/Screens/AboutMe';
import ContentOnlyBlock from './components/Layout/Blocks/ContentOnlyBlock';

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
          <Route path="/about-me">
            <AboutMe />
          </Route>
        </Switch>
        <ContentOnlyBlock title="Welcome!">Welcome to my site. Feel free to have a look around for scenarios!</ContentOnlyBlock>
      </main>
    </div>
  );
}

export default App;