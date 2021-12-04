import './App.css';
import Home from './page/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./page/login/Login"
import Write from './page/write/Write';
import SinglePost from './component/singlePost/singlePost';
import About from './page/about/About';
import Contact from './page/contact/Contact'
import HomeUser from './page/home/HomeUser';
import SinglePostUser from './component/singlePost/singlePostUser';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/login" exact element={<Login/>}></Route>
    <Route path="/write" exact element={<Write/>}></Route>
    <Route path="/about" exact element={<About/>}></Route>
    <Route path="/contact" exact element={<Contact/>}></Route>
    <Route path="/singlepostAdmin" exact element={<SinglePost/>}></Route>
    <Route path="/singlepost" exact element={<SinglePostUser/>}></Route>
    <Route path="/" exact element={<HomeUser/>}></Route>
    <Route path="/Admin" exact element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
