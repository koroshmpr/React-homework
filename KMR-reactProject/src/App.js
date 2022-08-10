import './App.css';
import {Route , Routes} from 'react-router-dom';
import Post from './Pages/post/Post';
import Home from './Pages/home/Home';
import AboutUs from './Pages/about-us/AboutUs';
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path='post/:id' element={<Post/>}/>
      </Route>
    </Routes>
  );
}

export default App;
