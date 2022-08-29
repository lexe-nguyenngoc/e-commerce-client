import { useRoutes } from 'react-router-dom';
import routes from '~/routes';

const App = (props) => {
  return useRoutes(routes);
};

App.propTypes = {};

export default App;
