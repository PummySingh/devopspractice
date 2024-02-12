
import './App.css';
 import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
function App() {
  return (
  <Router>
    <MainNavigation/>
    <main>
    <Routes>
    <Route path="/" element={<Users/>}>
        </Route>
      <Route path="/places/new" element={<NewPlace/>}>
        </Route>
      <Route path="/:userId/places" element={<UserPlaces/>}>
        </Route>
       </Routes>
      </main>
    </Router>
  
  );
}

export default App;
