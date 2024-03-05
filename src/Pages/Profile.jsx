import React, { useState, useEffect } from 'react'
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
     

    useEffect(() => {
        // Fetch user data using token
        const token = localStorage.getItem('token');
        if (token) {
            fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwODUwMDUxMywiZXhwIjoxNzA4NTA0MTEzfQ.eIzo-1bN6ZmJO7B17718QF-iPu3JmmVukmGqHNL845I'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUserData(data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    const handleLogout = () => {
        // Clear user info from localStorage and redirect to login page
        localStorage.removeItem('token');
        localStorage.removeItem('user-info');
        
        // Redirect to login page
       navigate('/home')
       window.history.replaceState(null, null, '/home');

    // Clear browser history to prevent back navigation
    

    };

    return (
        <div>
        <div><Navbar/></div>
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-25">

       
            {userData ? (
                <div>
                    <h2 className="text-xl font-bold mb-4">Profile Page</h2>
                    <div className="mb-4">

                    <div>
                        <img
                            src={userData.image}
                            alt="Profile"
                            className="rounded-full w-20 h-20 object-cover"
                        />
                    </div>
                        <p className="text-gray-600">
                            <span className="font-semibold">Username:</span> {userData.username}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Firstname:</span> {userData.firstName}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Lastname:</span> {userData.lastName}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Gender:</span> {userData.gender}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Email:</span> {userData.email}
                        </p>
                    </div>


                    <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </div>
    );
};


export default Profile
