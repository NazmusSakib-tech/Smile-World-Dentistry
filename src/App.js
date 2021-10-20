import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllTreatments from './components/AllTreatments/AllTreatments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import TeethSuggestion from './components/TeethSuggestion/TeethSuggestion';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/treatmentdetails/:treatmentId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/alltreatments'>
              <AllTreatments></AllTreatments>
            </PrivateRoute>
            <PrivateRoute path="/teethsuggestion">
              <TeethSuggestion></TeethSuggestion>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
