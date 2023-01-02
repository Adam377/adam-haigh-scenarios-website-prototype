import { Route, Switch } from 'react-router-dom';

import Header from './components/Layout/Header';
import Masthead from './components/Layout/Masthead';
import Scenarios from './components/Screens/Scenarios';
import AboutMe from './components/Screens/AboutMe';
import ContentOnlyBlock from './components/Layout/Blocks/ContentOnlyBlock';
import ContentImageBlock from './components/Layout/Blocks/ContentImageBlock';

import class319 from './assets/class319WBQ.JPG';

function App() {
  return (
    <div>
      <Header />
      <Masthead />
      <main>
        <Switch>
          <Route path="/" exact>
            <ContentImageBlock title="Welcome!" image={class319}>Nunc tincidunt arcu quis diam pharetra laoreet. Proin eget nulla lorem. Nullam et sagittis dui, nec vestibulum diam. Proin nec finibus justo. Donec ac vehicula dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet vehicula mauris. Quisque tempor convallis malesuada. Praesent sed velit id lorem ullamcorper interdum a et ligula. Cras gravida pretium odio, et faucibus sem blandit vitae. Pellentesque tincidunt fermentum nunc ut consequat. Sed varius, dolor ac vehicula egestas, enim ipsum congue ante, vitae dictum ligula arcu nec neque. Curabitur in quam ac nibh varius blandit et quis lorem. Duis at congue mi, et convallis velit. Quisque condimentum ante eu purus semper finibus. Morbi pellentesque eget mauris et finibus. Fusce rutrum purus et est tincidunt, at condimentum felis dignissim. Duis tempor lobortis porta. Cras ultricies est dui, et auctor nulla sagittis at. Nulla lobortis neque sapien, ut egestas nisl lobortis nec.</ContentImageBlock>
          </Route>
          <Route path="/scenarios">
            <Scenarios />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;