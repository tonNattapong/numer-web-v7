import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FalsePosition from './pages/FalsePosition';
import Bisection from './pages/Bisection';
import Garphical from './pages/Garphical';
import NewtonRaphson from './pages/NewtonRaphson';
import OnePoint from './pages/OnePoint';
import LinearLagrange from './pages/LinearLagrange';
import QuardraticLagrange from './pages/QuardraticLagrange';
import PolynomialLagrange from './pages/PolynomialLagrange';
import LinearNewton from './pages/LinearNewton';
import QuardraticNewton from './pages/QuardraticNewton';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Route path='/RootOfEquation/Bisection' exact component={Bisection} />
      <Route path='/RootOfEquation/FalsePosition' exact component={FalsePosition} />
      <Route path='/RootOfEquation/Garphical' exact component={Garphical} />
      <Route path='/RootOfEquation/NewtonRaphson' exact component={NewtonRaphson} />
      <Route path='/RootOfEquation/OnePoint' exact component={OnePoint} />
      <Route path='/Interpolation/LinearLagrange' exact component={LinearLagrange} />
      <Route path='/Interpolation/QuardraticLagrange' exact component={QuardraticLagrange} />
      <Route path='/Interpolation/PolynomialLagrange' exact component={PolynomialLagrange} />
      <Route path='/NewtonInterpolation/LinearNewton' exact component={LinearNewton} />
      <Route path='/NewtonInterpolation/QuardraticNewton' exact component={QuardraticNewton} />
      </Switch>
    </Router>
  );
}

export default App;
