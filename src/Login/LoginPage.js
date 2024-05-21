import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ onLogin }) => { // Receive onLogin prop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    // Add more users as needed
  ];

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onLogin(); // Call the onLogin function passed from App.js
      navigate('/home');
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyPress=(event)=>{
    if(event.key==='Enter'){
      handleLogin()
    }
  }

  return (
    <div>
      <center>
        <h2>Login</h2>
        <div>
          <label>Username:  </label>
          <input className="form-control d-inline-block w-auto mx-3 my-5 mb-1"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:  </label>
          <input className="form-control d-inline-block w-auto mx-3  mt-2"
            type="password"
            value={password} onKeyPress={handleKeyPress}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button className="text-center mt-4 mb-5" onClick={handleLogin}>Login</button>
      </center>
    </div>
  );
};

export default LoginPage;


// import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate=useNavigate()
//   // Predefined list of credentials
//   const users = [
//     { username: "user1", password: "pass1" },
//     { username: "user2", password: "pass2" },
//     // Add more users as needed
//   ];

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = () => {
//     console.log("Username:",username)
//     console.log("Password:", password)
//     const user = users.find(
//       (user) => user.username === username && user.password === password
//     );
//     console.log("User found:",user)

//     if (user) {
//       onLogin()
//       // Redirect to the desired page upon successful login
//       navigate('/home'); // Example: Redirect to dashboard page
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div>
//         <center>
//       <h2>Login</h2>
//       <div>
//         <label>Username:  </label>
//         <input className="form-control d-inline-block w-auto mx-3 my-5 mb-1"
//           type="text"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div>
//         <label>Password:  </label>
//         <input className="form-control d-inline-block w-auto mx-3  mt-2"
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       {error && <p>{error}</p>}
//       <button className="text-center mt-4 mb-5" onClick={handleLogin}>Login</button>
//       </center>
//     </div>
//   );
// };

// export default LoginPage;
