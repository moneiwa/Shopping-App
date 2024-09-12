// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { register } from './redux/authSlice';
// // import './index.css';

// // const Register = () => {
// //   const [name, setName] = useState("");
// //   const [password, setPassword] = useState("");
// //   const dispatch = useDispatch();

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     dispatch(register({ name, password }));
// //     alert('Registered successfully');
// //     window.location.href = '/login';
// //   };

// //   return (
// //     <div className='wrapper'>
// //       <form onSubmit={handleSubmit}>
// //         <h1>Register</h1>
// //         <div className="input-box">
// //           <input 
// //             type="text" 
// //             placeholder='Username' 
// //             required 
// //             onChange={e => setName(e.target.value)} 
// //           />
// //         </div>
// //         <div className='input-box'>
// //           <input 
// //             type="password" 
// //             placeholder='Password' 
// //             required 
// //             onChange={e => setPassword(e.target.value)} 
// //           />
// //         </div>
// //         <div className="remember-forgot">
// //           <label><input type="checkbox" /> Remember me</label>
// //         </div>
// //         <button className="log-btn" type='submit'>Register</button>
// //       </form>
// //       <button onClick={() => window.location.href = '/login'}>
// //         Already have an account? Login
// //       </button>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from './redux/authSlice';
// import './index.css';

// const Register = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Save user data to db.json
//     try {
//       const response = await fetch('http://localhost:3000/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, password }),
//       });

//       if (response.ok) {
//         dispatch(register({ name, password }));
//         alert('Registered successfully');
//         window.location.href = '/login';
//       } else {
//         alert('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred');
//     }
//   };

//   return (
//     <div className='wrapper'>
//       <form onSubmit={handleSubmit}>
//         <h1>Register</h1>
//         <div className="input-box">
//           <input 
//             type="text" 
//             placeholder='Username' 
//             required 
//             value={name}
//             onChange={e => setName(e.target.value)} 
//           />
//         </div>
//         <div className='input-box'>
//           <input 
//             type="password" 
//             placeholder='Password' 
//             required 
//             value={password}
//             onChange={e => setPassword(e.target.value)} 
//           />
//         </div>
//         <div className="remember-forgot">
//           <label><input type="checkbox" /> Remember me</label>
//         </div>
//         <button className="log-btn" type='submit'>Register</button>
//       </form>
//       <button onClick={() => window.location.href = '/login'}>
//         Already have an account? Login
//       </button>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './redux/authSlice';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        dispatch(register({ name, password }));
        alert('Registered successfully');
        navigate('/login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input 
            type="text" 
            placeholder='Username' 
            required 
            value={name}
            onChange={e => setName(e.target.value)} 
          />
        </div>
        <div className='input-box'>
          <input 
            type="password" 
            placeholder='Password' 
            required 
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
        </div>
        <button className="log-btn" type='submit'>Register</button>
      </form>
      <button onClick={() => navigate('/login')}>
        Already have an account? Login
      </button>
    </div>
  );
};

export default Register;
