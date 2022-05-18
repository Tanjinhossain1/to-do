import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import AllTodo from './Pages/AllTodo/AllTodo';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/allTodo' element={<RequireAuth><AllTodo /></RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
