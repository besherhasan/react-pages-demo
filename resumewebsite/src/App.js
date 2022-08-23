import './App.css';
import Navbar from './Navbar';
import './Navbar.css'

import AnimatedRoutes from './AnimatedRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from 'react-router-dom'

function App() {




  return (
<div>
<Router>
  <Navbar />

<AnimatedRoutes />

</Router>


</div>

  );
}

export default App;
