import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Page404 from './components/Page404';
import Instagram from './components/Instagram';
import Facebook from './components/Facebook';
import {
  BrowserRouter  as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/React-routers-application">
   <div className="App">
      <Header/>
     <Routes>
      <Route path='/'>
      <Route index element={<Home/>} />
      <Route path="/app" element={<Home/>} />
      </Route>

      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} >
        <Route index element={<Instagram/>}  /> 
        <Route path='insta' element={<Instagram/>}  />
        <Route path='face' element={<Facebook/>}  />
        </Route>
      <Route path="*" element={<Page404/>} />
     </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
