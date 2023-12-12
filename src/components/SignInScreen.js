import { useState, useEffect } from 'react';
import {
  getAuth,
  EmailAuthProvider,
  onAuthStateChanged,
  signOut,
   GoogleAuthProvider
} from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getDatabase, ref, set } from 'firebase/database';
import QuizForm from './quiz';

const firebaseUIConfig = {
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
    },
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
      customParameters: {
        prompt: 'Enter your first name',
      },
    },
    // Other sign-in options like Facebook, etc., if desired
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function MySignInScreen() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const firstName = firebaseUser.displayName ? firebaseUser.displayName.split(' ')[0] : '';
        const database = getDatabase();
        const userRef = ref(database, `users/${firebaseUser.uid}`);

        set(userRef, {
          firstName: firstName,
        })
          .then(() => {
            console.log('First Name saved to the database:', firstName);
            console.log(user.uid);
          })
          .catch((error) => {
            console.error('Error saving First Name:', error);
            

          });

        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    }, (authError) => {
      setError(authError);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
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

  if (user) {
    console.log(user.uid);
    return (
      <div>
        <p>Welcome, {user.displayName}</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );

 
  } else {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={getAuth()} />
      </div>
    );
  }
}

export { MySignInScreen };
