import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function HomePage({ onLogout }) 
{ // Receive onLogout function as a prop

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the onLogout function passed from the parent component
    navigate('/login');
  }

  return (
    <>
      <div className="container-fluid p-0 mt-2 mb-5">
        <div className="text-center">
          <h1 className="d-inline ms-5">Home</h1>
          <button className="d-inline float-end btn me-4 mt-2 btn-info" onClick={handleLogout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
        </div>
      </div>
      <nav>
        <center>
          <Link className='todolist' to='/addtodo'><h4>Todos-List</h4></Link>
        </center>
      </nav>
    </>
  )
}

export default HomePage;



// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Outlet,useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

// function HomePage() {

//   const navigate=useNavigate()
//   const handleLogout=()=>{
//     onlogout()
//     navigate('/login')
//   }


//   return (
//   <>
//     <div className="container-fluid p-0 mt-2 mb-5">
//       <div className="text-center">
//         <h1 className="d-inline ">Home</h1>
//         <button className="d-inline float-end btn mx-4 mt-2 btn-info" onClick={handleLogout}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
//       </div>
//     </div>
//     <Link to='/addtodo'><h3>Todos-List</h3></Link>

   
//     <Outlet />
//   </>
//   )
// }
// export default HomePage;
