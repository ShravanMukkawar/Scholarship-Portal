import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function OAuth() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    
    try {
      const result = await signInWithPopup(auth, provider);
      
      // Send the user data to your backend
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          //photo: result.user.photoURL,
        }),
      });

      // Check the response
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Failed to sign in with Google');
        return;
      }

      const data = await res.json();
      console.log('User data:', data); // Store user data in local storage or handle as needed
      
      navigate('/'); // Redirect after successful sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError('Could not sign in with Google. Please try again later.');
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleClick}
        type='button'
        className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
      >
        Continue with Google
      </button>
      {error && <p className='text-red-500 mt-2'>{error}</p>}
    </div>
  );
}
