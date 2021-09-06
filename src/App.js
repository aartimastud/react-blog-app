import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Pageone from './components/main';
import Home from './components/Home';
import Techbology from './components/techonology';
import Mainmobile from './components/mainmobile';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Pageone} exact/>
      <Route path="/bollywood" component={Home}/>
      <Route path="/tech" component={Techbology}/>
      <Route path="/fitness" component={Mainmobile}/>
    </BrowserRouter>
  );
}

export default App;
