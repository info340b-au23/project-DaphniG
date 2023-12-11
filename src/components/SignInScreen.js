import { useState, useEffect } from 'react';
import {
  getAuth,
  EmailAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDatabase, ref, set } from 'firebase/database';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
      customParameters: {
        prompt: 'Enter your first name'
      }
    },
    // Other sign-in options like Google, Facebook, etc. if desired
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  }
};

function MySignInScreen() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUserLoggedIn(!!firebaseUser); // Set userLoggedIn based on firebaseUser
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully');
      })
      .catch((err) => {
        console.error('Error signing out:', err);
      });
  };

  if (loading) {
    return <p>Initializing user</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (userLoggedIn) {
    if (user) {
      const firstName = user.displayName ? user.displayName.split(' ')[0] : '';
      const database = getDatabase();
      const userRef = ref(database, `users/${user.uid}`);

      set(userRef, {
        firstName: firstName,
      })
        .then(() => {
          console.log('First Name saved to the database:', firstName);
        })
        .catch((error) => {
          console.error('Error saving First Name:', error);
        });
    }

    return (
      <div>
        <p>Welcome, {user?.displayName}</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
    );
  }
}

export { MySignInScreen };