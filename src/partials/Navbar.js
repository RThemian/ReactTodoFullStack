import React, { useEffect } from 'react';
import { auth } from './../components/firebase'; // Update the path to match your file structure
import { GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider

const Navbar = () => {
  useEffect(() => {
    const googleSignInButton = document.getElementById('google-signin');
    googleSignInButton.addEventListener('click', () => {
      const provider = new GoogleAuthProvider(); // Use GoogleAuthProvider from firebase/auth
      auth
        .signInWithPopup(provider)
        .then((result) => {
          // Handle successful sign-in
          const user = result.user;
          console.log('User signed in:', user);
          // Update your UI or perform any other tasks here
        })
        .catch((error) => {
          // Handle errors
          console.error('Error signing in:', error);
        });
    });
  }, []);

  return (
    <div>
      <h3>Navbar</h3>
      <button id="google-signin">Sign in with Google</button>
    </div>
  );
};

export default Navbar;
