import { getAuth, EmailAuthProvider, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1

const firebaseUIConfig = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
      customParameters: {
        // Specify additional parameters you want to collect during sign-in
        // In this case, 'displayName' is used for the first name
        prompt: 'Enter your first name'
      }
    },
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    }
  }
};

function MySignInScreen() {
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Optional: Perform any additional actions after successful sign-out
        console.log('User signed out successfully');
      })
      .catch(err => {
        console.error('Error signing out:', err);
      });
  };

  const handleSignInSuccess = (authResult) => {
    const user = authResult.user;
    if (user && user.displayName) {
      const firstName = user.displayName.split(' ')[0]; // Assuming the first name is entered as displayName
      // Save the first name to the database
      const database = getDatabase();
      const userRef = ref(database, `users/${user.uid}`); // Reference to the user in the database

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
    return false;
  };

  const uiConfigWithCallbacks = {
    ...firebaseUIConfig,
    callbacks: {
      ...firebaseUIConfig.callbacks,
      signInSuccessWithAuthResult: handleSignInSuccess,
    },
  };

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfigWithCallbacks} firebaseAuth={auth} />
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export { MySignInScreen };
