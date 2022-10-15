import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error('error', error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(()=> {
      setUser({})
    })
    .catch(() => {
      setUser({})
    })
  }

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error('error', error);
    })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error('error', error);
    })
  }

  return (
    <div className="App">
      {
        user.uid ? 
        <button onClick={handleSignOut}>Sign Out</button> :
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </div>
      }
      {
        user.uid && <div>
        <h1>{user.displayName}</h1>
        <h3>{user.email}</h3>
        <img src={user.photoURL} alt="" />
      </div>
      }
    </div>
  );
}

export default App;
