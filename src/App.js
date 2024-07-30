  
  // import Todo from './components/Todo.js';
  import AddTodo from './components/AddTodo.js';
  import { Routes, Route, Navigate } from 'react-router-dom';
  import NavLink from './components/NavLink.js';
  import UserDetails from './components/UserDetails.js';
  import LoginPage from './Login/LoginPage.js';
  import HomePage from './Home/HomePage.js';
  import { useState } from 'react';

  function App() {
    const [isLoggedin, setisLoggedin] = useState(false)

    const handleLogin = () => {
      setisLoggedin(true)
    }

    const handleLogout=()=>{
      setisLoggedin(false)
    }
    return (
      <>
        <div >


          <Routes>
            <Route path='/login' element={<LoginPage onLogin={handleLogin} />}></Route>

            {
              isLoggedin ? (
                <>
                  
                  <Route path='home' element={<HomePage onLogout={handleLogout}/>}></Route>
                  <Route path='addtodo' element={<AddTodo />}></Route>
                  <Route path='navlink' element={<NavLink />}>
                    <Route path=':id' element={<UserDetails />}></Route>
                  </Route>
                </>
              ) : (
                <Route path='*' element={<Navigate to={"/login"} />}></Route>
              )
            }
        </Routes>

        </div>
      </>
    );
  }

  export default App;
